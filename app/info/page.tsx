'use client'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { Shadows_Into_Light_Two } from 'next/font/google';
import HeroImage from '../../public/imgs/background_info.jpg';
import ImagePaper from '@/components/ImagePaper';
import DownloadIcon from '@mui/icons-material/Download';

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
                            <li><b>Team Tumble:</b> Teams of 4 compete to complete 10 problems of a higher difficulty compared to the individual round in 25 minutes.</li>
                            <li><b>Lynx Lightning Round:</b> A team-based game with multiple rounds in which contestants will test their math skills in pairs with other teams.</li>
                        </ul>
                        <li>Lunch will be provided at 12:20pm</li>
                        <li>Grading will happen during/after lunch</li>
                        <li>Winners will be announced at the closing ceremony</li>
                    </ul>
                    <Box padding={5}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography> View Our 2025 Competition Flyer </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack direction='row' display="flex" justifyContent="center" alignItems="top" width="100%">
                                    <Image src={'/lmc_2025_flyer.png'} alt={'LMC 2025 Flyer'} width={450} height={1200}/>
                                    <DownloadIcon 
                                        fontSize='large' 
                                        sx={{ cursor: 'pointer' }} 
                                        onClick={async () => {
                                            const uri = '/lmc_2025_flyer.png';
                                            const resp = await fetch(uri);
                                            const imageBlob = await resp.blob();
                                            const imLink = document.createElement('a');
                                            imLink.href = URL.createObjectURL(imageBlob);
                                            imLink.download = 'lmc_2025_flyer';
                                            imLink.click();
                                        }}
                                    />
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
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
                <div id="tshirts" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Competition T-shirts
                    </Typography>
                    <Divider sx={{marginY: "8px"}} />

                    <Typography>
                        If you&apos;re interested in buying a competition t-shirt, please preorder it at (open up into design) <Link href="https://www.schoolpay.com/pay/for/2025-Math-Competition-Tshirt/Sc02vGC">this link</Link> 
                    </Typography>
                    <ImagePaper imageSrc="imgs/tshirt.png" imageAlt="Math Club competition t-shirt" width={350} height={350}/>
                </div>
                <div id="schedule" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Competition Schedule
                    </Typography>
                    <Typography> If you would like to </Typography>
                    <Divider sx={{marginY: "8px"}} />
                    <Typography>
                        Date of competition: Sunday, April 6th
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
                                    <TableCell>Gummy Guessing Game</TableCell>
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
                                    <TableCell align="right">12:10pm - 12:30pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Lunch</TableCell>
                                    <TableCell align="right">12:30pm - 1:30pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Team Tumble</TableCell>
                                    <TableCell align="right">1:30pm - 2:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Lynx Lightning Round</TableCell>
                                    <TableCell align="right">2:00pm - 3:30pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Closing Ceremony</TableCell>
                                    <TableCell align="right">3:30pm - 4:00pm</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div id="schedule" className="max-w-3xl w-full">
                        <br /><br />
                        <Typography variant="h5">
                            Competition Sponsors
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <br />
                        <Grid container spacing={2} justifyContent="space-between">
                            <Grid item xs={8}>
                                <ImagePaper imageSrc="imgs/aopslogo.jpg" imageAlt="Art of Problem Solving"/>
                            </Grid>
                            <Grid item xs={4}>
                                <ImagePaper imageSrc="/imgs/lhslogo.webp" imageAlt="Lincoln High School"/>
                            </Grid>
                            <Grid item xs={4}>
                                <ImagePaper imageSrc="/imgs/olympialogo.png" imageAlt="Olympia Pizza"/>
                            </Grid>
                            <Grid item xs={8}>
                                <ImagePaper imageSrc="/imgs/tuttabellalogo.jpg" imageAlt="Tutta Bella Pizza"/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}
