import { Card, CardActions, CardContent, Divider, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { Shadows_Into_Light_Two } from 'next/font/google';
import HeroImage from '../public/imgs/comp8.jpg';

const fontFamily = Shadows_Into_Light_Two({ weight: "400", subsets: ["latin"] });

export default function Home() {

    return (
        <div className="flex flex-col">
            <div className="relative w-full shadow-lg">
                <Image src={HeroImage} alt="Hero" className="w-full min-h-64 max-h-96 object-cover object-center"/>
                <div className='absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-30 text-white items-center justify-center text-center p-4'>
                    <Typography variant="h6">
                        Welcome to the
                    </Typography>
                    <Typography variant="h2" sx={fontFamily.style}>
                        Lincoln Math Competition
                    </Typography>
                </div>
            </div>
            <div className="flex flex-wrap justify-center p-4 sm:p-8 gap-8">
                <Card id="about" variant="elevation" className="max-w-xl">
                    <CardContent>
                        <Typography variant="h5">
                            About
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <Typography>
                            Lincoln Math Competition is an annual contest held for elementary school students in the Seattle area. 
                            It is targeted for 4th-5th grade students, but anyone younger can compete! The competition has two individual 
                            rounds: Super Sprint and Mental Mania, and two team rounds: Team Tumble and Lynx Lightning Round. The overall difficulty can be compared 
                            to beginner MATHCOUNTS and is a great introductory competition for children interested in mathematics.
                        </Typography>
                    </ CardContent>
                </Card>

                <Card id="registration" variant="elevation" className="max-w-xl">
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
                        <Typography fontSize={20}>Access the registration form <Link href="https://forms.office.com/r/42b2h56tfY">here</Link> </Typography>
                    </CardActions>
                </Card>

                <Card id="time-and-date" variant="elevation" className="max-w-xl">
                    <CardContent>
                        <Typography variant="h5">
                            Time and Date
                        </Typography>
                        <Divider sx={{marginY: "8px"}} />
                        <ul className='list-disc ml-4'>
                            <li><b>Date:</b> Sunday, April 6th 2025 from 10:30 am to 3 pm  (full schedule <Link href="/info#schedule">here</Link>)</li>
                            <li><b>Location:</b> Lincoln High School: <Link href="https://maps.app.goo.gl/ViWc33Y4vYL66wCF7" target="_blank">4400 Interlake Ave N, Seattle, WA 98103</Link></li>
                            <li><b>Directions:</b> Go to Lincoln High School and go through the large historic entrance on the west side (on Interlake Ave). 
                            Immediately upon entering, go forward until you reach the commons space with a projector and courtyard at the front.</li>
                        </ul>
                    </ CardContent>
                </Card>
            </div>
            <div>
                
            </div>
        </div>
    );
}
