"use client";

import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
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
}

interface IndividualProps {
    individualOut: IndividualData[];
}

const TeamTable: React.FC<TeamProps> = ({ teamOut }) => {
    return (
        <List>
            <TableContainer component={Paper}>
                <Typography>Results for Team Rounds</Typography>
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

const IndividualTable: React.FC<IndividualProps> = ({ individualOut }) => {
    return (
        <List>
            <TableContainer component={Paper}>
                <Typography>Results for Individual Rounds</Typography>
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
const CompContent: React.FC<CompYear> = ({ selectedYear, teamResDir, individualResDir }) => {
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
            return  <TeamTable teamOut={teamData} />;
        case 'option2':
            return <IndividualTable individualOut={individualData} />;
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
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="dropdown-label">Options</InputLabel>
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedOption}
                    label="Options"
                    onChange={handleChange}
                >
                    <MenuItem value="option1">2024 Team</MenuItem>
                    <MenuItem value="option2">2024 Individual</MenuItem>
                </Select>
            </FormControl>
            <Box mt={2}>
                <CompContent selectedYear={selectedOption} teamResDir='/comp_results/finalMMTeam.csv' individualResDir='/comp_results/finalMMIndividual.csv'/>
                <CompContent selectedYear={selectedOption} teamResDir='/comp_results/finalNNTeam.csv' individualResDir='/comp_results/finalNNIndividual.csv'/>
            </Box>
        </Box>
    );
};

export default function ProbRes() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className='p-4 mt-8 max-w-3xl w-full'>
                <Typography variant="h4" component="h1" gutterBottom>
                    Competition Results
                </Typography>
                <Divider sx={{ marginY: "8px" }} />
            </div>
            <Dropdown />
        </div>
    );
}
