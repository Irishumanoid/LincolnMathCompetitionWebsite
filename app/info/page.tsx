import { Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Image from 'next/image';
import { Shadows_Into_Light_Two } from 'next/font/google';
import HeroImage from '../../public/imgs/background_info.jpg';

const fontFamily = Shadows_Into_Light_Two({ weight: "400", subsets: ["latin"] });

export default function Info() {

    return (
        <div className="flex flex-col">
            <div className="relative w-full shadow-lg">
                <Image src={HeroImage} alt="Hero" className="w-full min-h-64 max-h-96 object-cover object-center"/>
                <div className='absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-50 text-white items-center justify-center text-center p-4'>
                    <Typography variant="h2" sx={fontFamily.style}>
                        Event Information
                    </Typography>
                </div>
            </div>
            <div className="flex flex-col items-center p-4 sm:p-8 gap-8">
                <div id="rules" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Rules
                    </Typography>
                    <Divider sx={{marginY: "8px"}} />
                    <ul className='list-disc ml-4'>
                        <li>No calculators or external aid</li>
                        <li>No discussion of answers until after completion of all rounds</li>
                    </ul>
                </div>
                <div id="structure" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Structure
                    </Typography>
                    <Divider sx={{marginY: "8px"}} />
                    <ul className='list-disc ml-4'>
                        <li>Each round has two sections of competitors: an introductory group, and a competitive group</li>
                        <li>The competition will consist of four rounds:</li>
                        <ul className='list-disc ml-8' style={{ listStyleType: "lower-roman" }}>
                            <li><b>Super Sprint:</b> 25 problems of increasing difficulty in 30 minutes, completed individually</li>
                            <li><b>Mental Mania:</b> With no paper and pencil allowed, each question will be read aloud twice by the proctor, and students will then be given 10 more seconds to complete each of the 10 problem.</li>
                            <li><b>Team Tumble:</b> Teams of 3 compete to complete 10 problems of a higher difficulty compared to the individual round in 25 minutes.</li>
                            <li><b>Lynx Lightning Round:</b> A team-based game with multiple rounds in which contestants will test their math skills in pairs with other teams.</li>
                        </ul>
                        <li>Lunch will be provided at 12:20pm</li>
                        <li>Grading will happen during/after lunch</li>
                        <li>Winners will be announced at the closing ceremony</li>
                    </ul>
                </div>
                <div id="donate" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Donate
                    </Typography>
                    <Divider sx={{marginY: "8px"}} />
                    <Typography>
                        These costs are coming out of club funds. For that reason, we ask that you consider donating to our club! It will help us keep doing events like these annually.
                        <br /><br />
                        We suggest a donation of $5 if your child is attending the competition and receiving pizza. You can donate at the event or the SchoolPay link below:
                    </Typography>
                    <Button href="https://www.schoolpay.com/pay/for/Math-Club-Donations/SdmwPMB"
                        target="_blank"
                        variant="contained"
                        sx={{ marginY: "12px" }}
                    >
                        Donate
                    </Button>
                </div>
                <div id="schedule" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Competition Schedule
                    </Typography>
                    <Divider sx={{marginY: "8px"}} />
                    <Typography>
                        Date of competition: Saturday, June 8th
                    </Typography>
                    <br />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 300 }} aria-label="Schedule Table">
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
                                    <TableCell>Jelly Bean Guessing Game</TableCell>
                                    <TableCell align="right">10:45am - 11am</TableCell>
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
                                    <TableCell>Lynx Lightning Round</TableCell>
                                    <TableCell align="right">1:30pm - 2:30pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Closing Ceremony</TableCell>
                                    <TableCell align="right">2:30pm - 3:00pm</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}
