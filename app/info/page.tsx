'use client'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, IconButton, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { Lato} from 'next/font/google';
import HeroImage from '../../public/imgs/background_info.jpg';
import ImagePaper from '@/components/ImagePaper';
import DownloadIcon from '@mui/icons-material/Download';

const fontFamily = Lato({ weight: "400", subsets: ["latin"] });

/** Download images by fetching response data when querying file location relative to \public directory */
const linkFunction = async (uri: string, title: string) => {
    const resp = await fetch(uri);
    const imageBlob = await resp.blob();
    const imLink = document.createElement('a');
    imLink.href = URL.createObjectURL(imageBlob);
    imLink.download = title;
    imLink.click();
}

// Functional component for information page
export default function Info() {
    return (
        <div className="flex flex-col">
            <div className="relative w-full shadow-lg">
                {/** Background image */}
                <Image src={HeroImage} alt="Hero" className="w-full min-h-64 max-h-96 object-cover object-center"/>
                <div className='absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-50 text-white items-center justify-center text-center p-4'>
                    <Typography variant="h2" sx={fontFamily.style}>
                        Event Information
                    </Typography>
                </div>
            </div>
            <div className="flex flex-col items-center p-4 sm:p-8 gap-8">
                {/** Bullet point list of competition rules */}
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
                {/** Bullet point lists of component structure, round descriptions, and main events throughout the day */}
                <div id="structure" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Structure
                    </Typography>
                    <Divider sx={{marginY: "8px"}} />
                    <ul className='list-disc ml-4'>
                        <li>Participants will compete in 2 different divisions: Numerical Novices (for those new to math competitions), and Math Masters (for those with prior math competition experience) </li>
                        <li style={{ marginTop: "8px" }}>The competition will consist of 3 rounds:</li>
                        <ul className='list-disc ml-8' style={{ listStyleType: "lower-roman" }}>
                            <li style={{ marginTop: "5px" }}><b>Super Sprint:</b> Participants will individually solve 25 problems of increasing difficulty in 30 minutes.</li>
                            <li style={{ marginTop: "5px" }}><b>Mental Mania:</b> Participants will solve 10 problems without using paper and pencil. Each question will be read aloud twice by the proctor. After each problem is read, students will be given 1 minute to solve the problem.</li>
                            <li style={{ marginTop: "5px" }}><b>Team Tumble:</b> Participants will work together in teams of 4 to solve 10 challenging problems in 25 minutes.</li>
                            {/* <li><b>Lynx Lightning Round:</b> A team-based game with multiple rounds in which contestants will test their math skills in pairs with other teams.</li> */}
                        </ul>
                        <li style={{ marginTop: "8px" }}>After the 3 rounds are over, participants will take a short break. We will provide gummy fruit snacks and play Math Bingo.</li>
                        <li style={{ marginTop: "8px" }}>Winners will be announced at the awards ceremony.</li>
                    </ul>
                    {/** Competition flyer dropdown display with MUI icon that downloads flyer when clicked */}
                    <Box padding={5}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography> View Our 2026 Competition Flyer </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack direction='row' display="flex" justifyContent="center" alignItems="top" width="100%">
                                    <Image src={'/imgs/2026-flyer.png'} alt={'LMC 2026 Flyer'} width={450} height={1200}/>
                                    <DownloadIcon 
                                        fontSize='large' 
                                        sx={{ cursor: 'pointer' }} 
                                        onClick={() => linkFunction("/imgs/2026-flyer.png", "lmc_2026_flyer")}
                                    />
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </div>
                {/** Donation section wtih link to math club SchoolPay 
                 * (make sure to update this or keep the link open if you guys want money) */}
                <div id="donate" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Donate
                    </Typography>
                    <Divider sx={{marginY: "8px"}} />
                    <Typography>
                        All competition expenses, such as facility fees, snacks for participants, prizes/awards, and other expenses come from our club budget. For that reason, we ask that you please consider donating to our club. Your support helps us keep our annual math competition free for all participants.
                        <br /><br />
                        You can make a donation at the event or with the SchoolPay link below:
                    </Typography>
                    <Button href="https://www.schoolpay.com/pay/for/Math-Club-Donations/SdmwPMB"
                        target="_blank"
                        variant="contained"
                        sx={{ marginY: "12px" }}
                    >
                        Donate
                    </Button>
                </div>
                {/** Competition t-shirt section with SchoolPay link for purchase */}
                {/* <div id="tshirts" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Competition T-shirts
                    </Typography>
                    <Divider sx={{marginY: "8px"}} />

                    <Typography>
                        If you&apos;re interested in buying a competition t-shirt, please preorder it at <Link href="https://www.schoolpay.com/pay/for/2025-Math-Competition-Tshirt/Sc02vGC">this link</Link> 
                    </Typography>
                    <ImagePaper imageSrc="imgs/tshirt.png" imageAlt="Math Club competition t-shirt" width={350} height={350}/>
                </div> */}
                {/** Competition schedule with downloadable image */}
                <div id="schedule" className="max-w-3xl w-full">
                    <Typography variant="h5">
                        Competition Schedule
                    </Typography>
                    {/* <Typography onClick={() => linkFunction("/imgs/schedule.png", "lmc_2025_schedule")}> 
                        Download a detailed version of the schedule here
                    </Typography> */}
                    <Divider sx={{marginY: "8px"}} />
                    <Typography>
                        Date of competition: Saturday, May 30th, 2026
                    </Typography>
                    <br />
                    {/** Table container for styling with TableHead for column names 
                     * and events happening throughout the day as TableRows  */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 300 }} aria-label="Schedule Table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Event</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Check-in Opens</TableCell>
                                    <TableCell align="right">1:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Check-in</TableCell>
                                    <TableCell align="right">1:00pm - 1:45pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Jelly Bean Guessing Game</TableCell>
                                    <TableCell align="right">1:00pm - 1:45pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Opening Ceremony</TableCell>
                                    <TableCell align="right">1:45pm- 2:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Super Sprint</TableCell>
                                    <TableCell align="right">2:05pm - 2:40pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Mental Mania</TableCell>
                                    <TableCell align="right">2:40pm - 3:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Team Tumble</TableCell>
                                    <TableCell align="right">3:00pm - 3:30pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Snack Time and Math Bingo</TableCell>
                                    <TableCell align="right">3:30pm- 4:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Awards Ceremony</TableCell>
                                    <TableCell align="right">4:00pm - 4:30pm</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/** Resizable image grid of competition sponsor logos */}
                    <div id="sponsors" className="max-w-3xl w-full">
                        <br /><br />
                        <Typography variant="h5">
                            Competition Sponsors
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <br />
                        <Grid container spacing={2} justifyContent="space-between">
                            {/** xs specifies item size, when the icon is clicked it opens the provided link */}
                            <Grid item xs={4}>
                                <IconButton onClick={() => window.open("https://artofproblemsolving.com/", "AoPS")}>
                                    <ImagePaper imageSrc="imgs/aopslogo.jpg" imageAlt="Art of Problem Solving"/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={8}>
                                <IconButton onClick={() => window.open("https://www.kumon.com/home/", "Kumon")}>
                                    <ImagePaper imageSrc="/imgs/kumonlogo.png" imageAlt="Kumon Logo"/>
                                </IconButton>
                            </Grid>
                            
                            
                            <Grid item xs={6}>
                                <IconButton onClick={() => window.open("https://www.awesomemath.org/", "AwesomeMath")}>
                                    <ImagePaper imageSrc="/imgs/awesomemathlogo.png" imageAlt="AwesomeMath Logo"></ImagePaper>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton onClick={() => window.open("https://www.wolfram.com/", "Wolfram")}>
                                    <ImagePaper imageSrc="/imgs/wolframlogo.png" imageAlt="Wolfram Logo"></ImagePaper>
                                </IconButton>
                            </Grid>
                            <Grid item xs={7}>
                                <IconButton onClick={() => window.open("https://live.poshenloh.com/", "LIVE")}>
                                    <ImagePaper imageSrc="/imgs/live.png" imageAlt="LIVE by Poh Shen Loh"></ImagePaper>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton onClick={() => window.open("https://lincolnhs.seattleschools.org/", "Lincoln")}>
                                    <ImagePaper imageSrc="/imgs/lhslogo.webp" imageAlt="Lincoln High School"/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton onClick={() => window.open("https://www.olympiapizzaspaghetti.com/", "Olympia_Pizza")}>
                                    <ImagePaper imageSrc="/imgs/olympialogo.png" imageAlt="Olympia Pizza"/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton onClick={() => window.open("https://www.tuttabella.com/", "Tutta_Bella")}>
                                    <ImagePaper imageSrc="/imgs/tuttabellalogo.jpg" imageAlt="Tutta Bella Pizza"/>
                                </IconButton>
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
