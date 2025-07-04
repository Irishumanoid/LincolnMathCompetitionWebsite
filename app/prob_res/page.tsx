"use client";

import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Papa from 'papaparse';

/**
 * @param names Comma-separated names of students on a team
 * @param tumbleScore The team's Team Tumble score
 * @param lightningScore The team's Lynx Lightning score
 * @param total The team's total score
 */
interface TeamData {
    names: string;
    tumbleScore: number;
    lightningScore: number;
    total: number;
}

/**
 * @param name The student's name
 * @param sprintScore The student's Super Sprint score
 * @param mentalScore The student's Mental Mania score
 * @param total The student's total individual score
 */
interface IndividualData {
    name: string;
    sprintScore: number;
    mentalScore: number;
    total: number;
}

/**
 * @selectedTest The name of the test (selected from dropdown)
 * @isMM Whether the test is from the Math Masters or Numerical Novices division
 */
interface CompYear {
    selectedTest: string;
    isMM: boolean;
}

/** @returns team info as TeamData object */
function createTeamData(
    names: string,
    tumbleScore: number,
    lightningScore: number,
    total: number
): TeamData {
    return { names, tumbleScore, lightningScore, total };
}

/** @returns individual info as IndividualData object */
function createIndividualData(
    name: string,
    sprintScore: number,
    mentalScore: number,
    total: number
): IndividualData {
    return { name, sprintScore, mentalScore, total };
}

/**
 * Loads CSV data and parses it
 * @param csvUrl the location of the CSV data relative to the /public directory
 * @returns list of parsed CSV rows
 */
const loadCSV = (csvUrl: string): Promise<any[]> => {
    return fetch(csvUrl)
        .then(response => response.text())
        .then(responseText => {
            const results = Papa.parse(responseText, { header: true }).data;
            return results;
        })
        .catch(error => {
            console.error('Error loading CSV:', error);
            return [];
        });
};

/**
 * @param teamOut list of team results
 * @param isMM whether the team is in the Math Masters or Numerical Novices division
 * @param totalOnly whether to only include total team scores when displaying final results
 */
interface TeamProps {
    teamOut: TeamData[];
    isMM: boolean;
    totalOnly: boolean;
}

/**
 * @param individualOut list of individual results
 * @param isMM whether the individual participated in the Math Masters or Numerical Novices division
 */
interface IndividualProps {
    individualOut: IndividualData[];
    isMM: boolean;
}

// Table functional component with team results using TeamProps parameters
const TeamTable: React.FC<TeamProps> = ({ teamOut, isMM, totalOnly }) => {
    const roundType = isMM ? 'Math Masters' :'Numerical Novices';
    return (
        <List>
            <TableContainer component={Paper}>
                <Typography>Results for {roundType} Round </Typography>
                {/** Column names are Names, Team Tumble, Lynx Lightning, Total Score */}
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Names</TableCell>
                            {/** Only add individual round columns if want individual round score breakdowns */}
                            {!totalOnly && <TableCell align="right">Team Tumble</TableCell>}
                            {!totalOnly &&  <TableCell align="right">Lynx Lightning</TableCell>}
                            <TableCell align="right">Total Score</TableCell>
                        </TableRow>
                    </TableHead>
                    {/** Iterates through teamOut team data and adds the data of each team as a new TableRow
                     * If totalOnly, only dispalys the total score TableCell*/}
                    <TableBody>
                        {teamOut.map((row, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.names}</TableCell>
                                 {!totalOnly && <TableCell align="right">{row.tumbleScore}</TableCell>}
                                 {!totalOnly && <TableCell align="right">{row.lightningScore}</TableCell>}
                                <TableCell align="right">{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </List>
    );
}

// Table functional component with individual results using IndividualProps parameters
const IndividualTable: React.FC<IndividualProps> = ({ individualOut, isMM }) => {
    const roundType = isMM ? 'Math Masters' :'Numerical Novices';
    return (
        <List>
            <TableContainer component={Paper}>
                <Typography>Results for {roundType} Round </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Super Sprint</TableCell>
                            <TableCell align="right">Mental Mania</TableCell>
                            <TableCell align="right">Total Score</TableCell>
                        </TableRow>
                    </TableHead>
                    {/** Display the name and scores of each individual */}
                    <TableBody>
                        {individualOut.map((row, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.sprintScore}</TableCell>
                                <TableCell align="right">{row.mentalScore}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </List>
    );
}

// Functional component for displaying team and individual results
const CompContent: React.FC<CompYear> = ({ selectedTest, isMM }) => {
    // React useState hooks to track current selected data (initialized as empty)
    const [teamData, setTeamData] = useState<TeamData[]>([]);
    const [individualData, setIndividualData] = useState<IndividualData[]>([]);
    
    // Match digits in name of selected test to get year 
    const res = selectedTest.match(/(\d+)/);
    let year;
    if (res && res.length > 0) {
        year = res[0];
    }
    // Jank way to get csv path for needed result - make sure new file names match this structure or fix it
    const resDir = `/comp_results/${year}/${isMM ? 'mm' : 'nn'}_${selectedTest}.csv`;

    // Whenever selectedTest (or anything that you put in the dependency array) changes, contents inside useEffect hook are called
    useEffect(() => {
        // If team test, load team data as array of rows of the target CSV and destructure each row as a TeamData object
        if (selectedTest.includes('team')) {
            loadCSV(resDir).then(data => {
                const teamResults = data.slice(0, -1).map(item => createTeamData(
                    `${item['Team Member 1']}, ${item['Team Member 2']}, ${item['Team Member 3']}`,
                    Number(item['Team Tumble']),
                    Number(item['Lynx Lightning']),
                    Number(item['Total'])
                ));
                // Update teamData variable 
                setTeamData(teamResults);
            });
        } else if (selectedTest.includes('individual')) {
            // Load individual data and save it to individualData variable
            loadCSV(resDir).then(data => {
                const individualResults = data.slice(0, -1).map(item => createIndividualData(
                    item['Name'],
                    Number(item['Super Sprint']),
                    Number(item['Mental Mania']),
                    Number(item['Total'])
                ));
                setIndividualData(individualResults);
            });
        }
    }, [selectedTest]);

    // Return either a TeamTable or IndividualTable component depending on test type
    if (selectedTest.includes('team')) {
        return  <TeamTable teamOut={teamData} isMM={isMM} totalOnly={Number(year) == 2025 ? true : false}/>;
    } else if (selectedTest.includes('individual')) {
        return <IndividualTable individualOut={individualData} isMM={isMM}/>;
    } else { 
        return <div></div>;
    }
};

// Functional component that fetches results data based on selected option
const Dropdown: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    // updates selectedOption when the value of the selector changes
    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 200 }} paddingTop={2}>
            <FormControl fullWidth>
                <InputLabel id="dropdown-label">Competition Scores</InputLabel>
                {/** Dropdown menu selector */}
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedOption}
                    label="Competition Results"
                    onChange={handleChange}
                >
                    <MenuItem value="team2024">2024 Team</MenuItem>
                    <MenuItem value="individual2024">2024 Individual</MenuItem>
                    <MenuItem value="team2025">2025 Team</MenuItem>
                    <MenuItem value="individual2025">2025 Individual</MenuItem>
                </Select>
            </FormControl>
            <Box mt={2}>
                <CompContent selectedTest={selectedOption} isMM={true}/>
                <CompContent selectedTest={selectedOption} isMM={false}/>
            </Box>
        </Box>
    );
};

type PDFViewerProps = {
    loc: string;
};

// PDF viewer component
const PDFViewer: React.FC<PDFViewerProps> = ({ loc }) => {
    return (
        <div>
            <iframe src={loc+'#toolbar=0&navpanes=1'} width='100%' height='500px' />
        </div>
    )
}



export default function ProbRes() {
    // Competition year, by default set to 2025
    const [year, setYear] = useState<string>('2025');

    // List of competition problem sets for given year
    let pdfLocList = [`/comp_psets/${year}/Mental_Mania_Competitive.pdf`, 
        `/comp_psets/${year}/Mental_Mania_Introductory.pdf`,
        `/comp_psets/${year}/Super_Sprint_Competitive.pdf`,
        `/comp_psets/${year}/Super_Sprint_Introductory.pdf`,
        `/comp_psets/${year}/Team_Tumble_Competitive.pdf`,
        `/comp_psets/${year}/Team_Tumble_Introductory.pdf`];

    return (
        <div className="flex flex-col items-center w-full">
                <Typography variant="h4" component="h1" gutterBottom paddingTop={3}>
                    Competition Results
                </Typography>
                <Divider sx={{ my: 2, width: '50%' }} />
                <Box width={150} paddingTop={2}>
                    {/** Selector for competition year */}
                    <FormControl fullWidth>
                        <InputLabel id="dropdown-label">Past Tests</InputLabel>
                        <Select
                            label="Past Tests"
                            labelId="dropdown-label"
                            id="dropdown"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            {/** Competition year options */}
                            <MenuItem value="2024">2024</MenuItem>
                            <MenuItem value="2025">2025</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            {/** Given a year is set, get all PDFs and display with PDFViewer */}
            {year != '' && 
                <div className='p-4 mt-8 max-w-3xl w-full'>
                    {pdfLocList.map((pset, index) => {
                        const fileName = pset.split('.')[0].split('/').pop()?.replaceAll('_', ' ') + ' Problems';
                        return (
                            <Accordion key={index}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>{`${fileName} ${year}`}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <PDFViewer loc={pset} />
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </div>
            }
            <Dropdown/>
        </div>
    );
}
