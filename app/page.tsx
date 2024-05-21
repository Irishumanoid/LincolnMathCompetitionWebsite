"use client";

import { Button, Card, CardActions, CardContent, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import Image from 'next/image';
import { Shadows_Into_Light_Two } from 'next/font/google';
import HeroImage from '../public/imgs/background.jpg';

const fontFamily = Shadows_Into_Light_Two({ weight: "400", subsets: ["latin"] });

const StyledTable = styled(Table)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
}));

export default function Home() {

    return (
        <div className="flex flex-col">
            <div className="relative w-full shadow-lg">
                <Image src={HeroImage} alt="Hero" className="w-full min-h-64 object-cover object-center"/>
                <div className='absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-50 text-white items-center justify-center text-center p-4'>
                    <Typography variant="h6">
                        Welcome to the
                    </Typography>
                    <Typography variant="h2" sx={fontFamily.style}>
                        Lincoln Math Competition
                    </Typography>
                </div>
            </div>
            <div className="flex flex-wrap justify-center p-8 gap-8">
                <Card variant="elevation" className="max-w-xl">
                    <CardContent>
                        <Typography variant="h5">
                            About
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <Typography>
                            Lincoln Math Competition is an annual contest held for elementary school students in the Seattle area. 
                            It is targeted for 4th-5th grade students, but anyone younger can compete! The competition has two individual 
                            rounds: Super Sprint and Mental Mania, and a team round: Team Tumble. The overall difficulty can be compared 
                            to beginner MATHCOUNTS and is a great introductory competition for children interested in mathematics.
                        </Typography>
                    </ CardContent>
                </Card>

                <Card variant="elevation" className="max-w-xl">
                    <CardContent>
                        <Typography variant="h5">
                            Registration
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <Typography>
                            The competition is completely free. Individuals can register with the following link.
                        </Typography>
                    </ CardContent>
                    <CardActions sx={{ padding: "16px" }}>
                        <Button href="https://forms.office.com/pages/responsepage.aspx?id=WNEx1HRgMkiHg1Hqb23SJ_L1aZAVTPxCi-YvwKCadtVUOVQ3TEdGR0hOWlFKQVhCRjlVWEJOMlkyWC4u"
                            variant="contained"
                        >
                            Register
                        </Button>
                    </CardActions>
                </Card>

                <Card variant="elevation" className="max-w-xl w-full">
                    <CardContent>
                        <Typography variant="h5">
                            Competition Schedule
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <Typography>
                            Date of competition: Saturday, June 8th
                        </Typography>
                        <br />
                        <TableContainer component={Paper}>
                            <StyledTable sx={{ minWidth: 300 }} aria-label="Schedule Table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Time</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Registration</TableCell>
                                        <TableCell align="right">10:30am - 11am</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Opening Ceremony</TableCell>
                                        <TableCell align="right">11:00am - 11:30am</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Super Sprint</TableCell>
                                        <TableCell align="right">11:30am - 12:10pm</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Mental Mania</TableCell>
                                        <TableCell align="right">12:10pm - 12:20pm</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lunch</TableCell>
                                        <TableCell align="right">12:20pm - 1:00pm</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Team Tumble</TableCell>
                                        <TableCell align="right">1:00pm - 1:30pm</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Lynx Bowl</TableCell>
                                        <TableCell align="right">1:30pm - 2:30pm</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Closing Ceremony</TableCell>
                                        <TableCell align="right">2:30pm - 3:00pm</TableCell>
                                    </TableRow>
                                </TableBody>
                            </StyledTable>
                        </TableContainer>
                    </ CardContent>
                    <CardActions>
                        <Button href="https://forms.office.com/pages/responsepage.aspx?id=WNEx1HRgMkiHg1Hqb23SJ_L1aZAVTPxCi-YvwKCadtVUOVQ3TEdGR0hOWlFKQVhCRjlVWEJOMlkyWC4u" variant="contained">
                            Register
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div>
                
            </div>
        </div>
    );
}
