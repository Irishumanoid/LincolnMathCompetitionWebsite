"use client";

import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Papa from 'papaparse';

interface TeamData {
    names: string;
    tumbleScore: number;
    lightningScore: number;
    total: number;
}

interface IndividualData {
    name: string;
    sprintScore: number;
    mentalScore: number;
    total: number;
}

interface CompYear {
    selectedYear: string;
    teamResDir: string;
    individualResDir: string;
    isMM: boolean;
}

function createTeamData(
    names: string,
    tumbleScore: number,
    lightningScore: number,
    total: number
): TeamData {
    return { names, tumbleScore, lightningScore, total };
}

function createIndividualData(
    name: string,
    sprintScore: number,
    mentalScore: number,
    total: number
): IndividualData {
    return { name, sprintScore, mentalScore, total };
}

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

interface TeamProps {
    teamOut: TeamData[];
    isMM: boolean;
}

interface IndividualProps {
    individualOut: IndividualData[];
    isMM: boolean;
}

const TeamTable: React.FC<TeamProps> = ({ teamOut, isMM }) => {
    const roundType = isMM ? 'Math Masters' :'Numerical Novices';
    return (
        <List>
            <TableContainer component={Paper}>
                <Typography>Results for {roundType} Round </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Names</TableCell>
                            <TableCell align="right">Team Tumble</TableCell>
                            <TableCell align="right">Lynx Lightning</TableCell>
                            <TableCell align="right">Total Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teamOut.map((row, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.names}</TableCell>
                                <TableCell align="right">{row.tumbleScore}</TableCell>
                                <TableCell align="right">{row.lightningScore}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </List>
    );
}

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

//create another comp content obj and pass it csv loc params
const CompContent: React.FC<CompYear> = ({ selectedYear, teamResDir, individualResDir, isMM }) => {
    const [teamData, setTeamData] = useState<TeamData[]>([]);
    const [individualData, setIndividualData] = useState<IndividualData[]>([]);

    useEffect(() => {
        if (selectedYear === 'option1') {
            loadCSV(teamResDir).then(data => {
                const teamResults = data.slice(0, -1).map(item => createTeamData(
                    `${item['Team Member 1']}, ${item['Team Member 2']}, ${item['Team Member 3']}`,
                    Number(item['Team Tumble']),
                    Number(item['Lynx Lightning']),
                    Number(item['Total'])
                ));
                setTeamData(teamResults);
            });
        } else if (selectedYear === 'option2') {
            loadCSV(individualResDir).then(data => {
                const individualResults = data.slice(0, -1).map(item => createIndividualData(
                    item['Name'],
                    Number(item['Super Sprint']),
                    Number(item['Mental Mania']),
                    Number(item['Total'])
                ));
                setIndividualData(individualResults);
            });
        }
    }, [selectedYear]);

    switch (selectedYear) {
        case 'option1':
            return  <TeamTable teamOut={teamData} isMM={isMM}/>;
        case 'option2':
            return <IndividualTable individualOut={individualData} isMM={isMM}/>;
        default:
            return <div></div>;
    }
};

const Dropdown: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="dropdown-label">Competition Results</InputLabel>
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedOption}
                    label="Competition Results"
                    onChange={handleChange}
                >
                    <MenuItem value="option1">2024 Team</MenuItem>
                    <MenuItem value="option2">2024 Individual</MenuItem>
                </Select>
            </FormControl>
            <Box mt={2}>
                <CompContent selectedYear={selectedOption} teamResDir='/comp_results/finalMMTeam.csv' individualResDir='/comp_results/finalMMIndividual.csv' isMM={true}/>
                <CompContent selectedYear={selectedOption} teamResDir='/comp_results/finalNNTeam.csv' individualResDir='/comp_results/finalNNIndividual.csv' isMM={false}/>
            </Box>
        </Box>
    );
};

type PDFViewerProps = {
    loc: string;
};

const PDFViewer: React.FC<PDFViewerProps> = ({ loc }) => {
    return (
        <div>
            <iframe src={loc+'#toolbar=0&navpanes=1'} width='100%' height='500px' />
        </div>
    )
}

const pdfLocList = ['/comp_psets/Mental_Mania_Competitive.pdf', 
    '/comp_psets/Mental_Mania_Introductory.pdf',
    '/comp_psets/Super_Sprint_Competitive.pdf',
    '/comp_psets/Super_Sprint_Introductory.pdf',
    '/comp_psets/Team_Tumble_Competitive.pdf',
    '/comp_psets/Team_Tumble_Introductory.pdf'];


export default function ProbRes() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className='p-4 mt-8 max-w-3xl w-full'>
                <Typography variant="h4" component="h1" gutterBottom>
                    Competition Results
                </Typography>
                <Divider sx={{ marginY: "8px" }} />
                {pdfLocList.map((pset, index) => {
                    const fileName = pset.split('.')[0].split('/').pop()?.replaceAll('_', ' ') + ' Problems';
                    return (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{fileName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <PDFViewer loc={pset} />
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
            <Dropdown />
        </div>
    );
}
