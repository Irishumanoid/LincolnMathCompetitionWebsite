import { Box, Card, CardActions, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import HeroImage from '../public/imgs/comp8.jpg';
import ImagePaper from '@/components/ImagePaper';

const fontFamily = Lato({ weight: "400", subsets: ["latin"] });

export default function Home() {

    return (
        <div className="flex flex-col">
            <div className="relative w-full shadow-lg">
                {/** Main layout image */}
                <Image src={HeroImage} alt="Hero" className="w-full min-h-64 max-h-96 object-cover object-center"/>
                {/** Title component, wrappped in div to center both title texts */}
                <div className='absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-55 text-white items-center justify-center text-center p-4'>
                    <Typography variant="h6">
                        Welcome to the
                    </Typography>
                    <Typography variant="h2" sx={fontFamily.style}>
                        Lincoln   Math   Competition
                    </Typography>
                </div>
            </div>
            {/** Body for info cards, specifies padding and distance */}
            <div className="flex flex-wrap justify-center p-4 sm:p-8 gap-8">
                {/** Card is an MUI object, put body inside CardContent
                 * This card has a larger heading, divider, and LMC description*/}
                <Card id="about" variant="elevation" className="max-w-xl">
                    <CardContent>
                        <Typography variant="h5">
                            About
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <Typography>
                            Lincoln Math Competition is an annual contest held for elementary school students in the Seattle area. 
                            It is targeted for 4th-5th grade students, but younger students can also compete! The competition has two individual 
                            rounds: Super Sprint and Mental Mania, and one team round: Team Tumble. The overall difficulty can be compared 
                            to beginner MATHCOUNTS and is a great introductory competition for students interested in mathematics.
                        </Typography>
                    </ CardContent>
                </Card>
                {/** Registration Card with link to registration form (keep this updated) */}
                <Card id="registration" variant="elevation" className="max-w-xl">
                    <CardContent>
                        <Typography variant="h5">
                            Registration
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <Typography>
                            The competition is completely free. The registration link will be available here starting on April 24.
                        </Typography>
                    </ CardContent>
                    {/* <CardActions sx={{ padding: "16px" }}>
                        <Typography fontSize={20}>Access the registration form <Link href="https://forms.office.com/r/42b2h56tfY">here</Link> </Typography>
                    </CardActions> */}
                </Card>
                {/** Time and date information with bullet point list and ImagePaper container for parking map */}
                <Card id="time-and-date" variant="elevation" className="max-w-xl">
                    <CardContent>
                        <Typography variant="h5">
                            Time and Date
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <ul className='list-disc ml-4'>
                            <li><b>Date:</b> Saturday, May 30th 2026 from 1:00 PM to 4:30 PM  (full schedule coming soon)</li>
                            <li><b>Location:</b> Lincoln High School: <Link href="https://maps.app.goo.gl/ViWc33Y4vYL66wCF7" target="_blank">4400 Interlake Ave N, Seattle, WA 98103</Link></li>
                            <li><b>Directions:</b> Go to Lincoln High School and go through the performing arts/sports entrance on the east side (on Woodlawn Ave). 
                            Immediately upon entering, turn right and enter the gynamsium.</li>
                        </ul>
                        <ImagePaper imageSrc="/imgs/parking.png" imageAlt="parking" width={350} height={350} includeBoundary={false}/>
                    </ CardContent>
                </Card>
            </div>
            <div>
                
            </div>
        </div>
    );
}
