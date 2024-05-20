import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { Shadows_Into_Light_Two } from 'next/font/google';

const fontFamily = Shadows_Into_Light_Two({ weight: "400", subsets: ["latin"] });

export default function Home() {

    return (
        <div className="flex flex-col">
            <div className="relative w-full h-64 shadow-lg">
                <Image src="/imgs/background.jpg" alt="Hero" layout="fill" objectFit="cover" />
                <div className='absolute w-full h-full flex flex-col bg-black bg-opacity-50 text-white items-center justify-center'>
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
