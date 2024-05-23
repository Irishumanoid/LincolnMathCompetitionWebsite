import React from 'react';
import { Box, Container, Typography, Link, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface CompetitionRound {
    name: string;
    description: string;
}

const competitionRounds: CompetitionRound[] = [
    {
        name: "Super Sprint",
        description: "Standard individual competition round, 25 problems of increasing difficulty in 30 minutes."
    },
    {
        name: "Mental Mania",
        description: "No paper and pencil allowed, each question will be read aloud twice by the proctor and students will then be given 10 more seconds to complete each problem. 10 problems total."
    },
    {
        name: "Team Tumble",
        description: "Teams of 3 compete to complete 10 problems of a higher difficulty compared to the individual round. 25 minutes."
    },
    {
        name: "Lynx Lightning Round",
        description: "Teams of 3 compete in preliminary head-to-head speed math rounds with other teams, within classrooms, before advancing to the Commons final round. Problems will be projected on the board and the first team to write down the correct answer will win the respective round."
    }
];

const CompetitionRoundsList: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            {competitionRounds.map((round, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h6" component="h2">
                        {round.name}
                    </Typography>
                    <Typography>
                        {round.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

interface FAQItem {
    question: string;
    answer: string;
    formatted_info?: React.FC;
}

//add optional field above for formatted text (e.g., for competition descriptions)

const round_details: React.FC = () => {
    return (
        <Container>
            <CompetitionRoundsList />
        </Container>
    );
};

const faqItems: FAQItem[] = [
    {
        question: 'What is the format of the competition?',
        answer: 'The competition consists of individual and team rounds, including Super Sprint, Mental Mania, Team Tumble, and Lynx Lightning Round.',
        formatted_info: round_details
    },
    {
        question: 'How can I register for the competition?',
        answer: 'Due to the unexpected number of responses, our registration form is closed for the year. Check back next year!'
    },
    {
        question: 'Are there any eligibility requirements?',
        answer: 'The competition is recommended for 4th and 5th graders, but open to all elementary school students.'
    },
    {
        question: 'What resources can my child use to prepare?',
        answer: 'We recommend checking our past problems from similar competitions, such as Math Is Cool and the first 5-ish problems from the AMC 8.'
    },
    {
        question: 'What topics will be covered in the competition?',
        answer: 'The competition will cover elementary algebra, geometry, combinatorics, and number theory.'
    },
    {
        question: 'What divisions are available?',
        answer: 'We offer Math Masters and Numerical Novices. Math Masters is recommended for students with prior competition experience or advanced math proficiency.'
    },
    {
        question: 'How will teams be made? ',
        answer: 'If you did not select to have specific teammates on the registration form, or only selected one other student, we will be making the rest of your team for you with other competitors. We will be basing this off of school primarily, but if there are not enough students in one school, or it wasn’t listed on the form, teammates will be randomly assigned. If you have a team of 1 or 2 and do not wish to have additional teammates, send us an email. '
    },
    {
        question: 'Should parents be staying during the competition? ',
        answer: 'You are not required to stay during the competition, but we will be giving a presentation for interested parents about the summer math tutoring program we asked about on the registration form! Beyond that, you are welcome to volunteer to help us grade during the competition As for watching the competition, parents can watch their students compete in the final round of the competition. More information on that is below. '
    },
    {
        question: 'Will we be providing food? ',
        answer: 'We are happy to announce that we will be providing free pizza for all students attending, as well as any parent volunteers! We will however not be able to accommodate dietary restrictions, so we recommend you bring a bag lunch from home if needed. We also recommend bringing a snack and water, for during the rounds. '
    },
    {
        question: 'Does the competition cost any money? ',
        answer: 'Registration and food are completely free! However, this does mean the costs are coming out of club funds. For that reason, we ask that if you are willing, consider donating to our club! It will help us keep doing events like these annually. Please check the Information page for more details. '
    }
];



export default function Faq() {
    return (
        <div className="flex flex-col items-center">
            <div className='p-4 mt-8 max-w-3xl w-full'>
                <Typography variant="h4" component="h1" gutterBottom>
                    Frequently Asked Questions
                </Typography>
                <Divider sx={{ marginY: "8px" }} />
                <Typography>
                    These are common questions parents have had regarding competition logistics, content, and signups.
                    <br />
                    Email us at {' '}<Link href="mailto:lincolnmathclubseattle@gmail.com">lincolnmathclubseattle@gmail.com </Link>
                    if you have further inquiries!
                </Typography>
                <div className="h-8"></div>
                {faqItems.map((item, index) => (
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.answer}</Typography>
                            {/* Render the formatted_info component if it exists */}
                            {item.formatted_info && <item.formatted_info />}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}
