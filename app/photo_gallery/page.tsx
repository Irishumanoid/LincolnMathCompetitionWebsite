import { Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";

//default for testing: 
const itemData = [
    {
        img: '/imgs/comp1.jpg',
        title: 'competitors taking a lunchtime break',
        rows: 4,
        cols: 2,
    },
    {
        img: '/imgs/comp2.jpg',
        title: 'our Excel graders hard at work',
        rows: 3,
        cols: 1,
    },
    {
        img: '/imgs/comp3.jpg',
        title: 'Super Sprint grading',
        rows: 2,
        cols: 1,
    },
    {
        img: '/imgs/comp4.jpg',
        title: 'hallway fun',
        rows: 3,
        cols: 1,
    },
    {
        img: '/imgs/comp5.jpg',
        title: 'back to work!',
        rows: 2,
        cols: 1,
    },
    {
        img: '/imgs/comp6.jpg',
        title: 'paper airplane break!',
        rows: 3,
        cols: 2,
    },
    {
        img: '/imgs/comp7.jpg',
        title: 'competitors and their parents',
        rows: 4,
        cols: 2,
    },
    {
        img: '/imgs/comp8.jpg',
        title: 'getting ready to compete...',
        rows: 2,
        cols: 2,
    },
    {
        img: '/imgs/comp9.jpg',
        title: 'exploring the Lincoln courtyard',
        rows: 3,
        cols: 2,
    },
    {
        img: '/imgs/comp11.jpg',
        title: 'a proctor taking a selfie with the children',
        rows: 3,
        cols: 2,
    },
    {
        img: '/imgs/comp10.jpg',
        title: 'kids socializing (and napping) during a break',
        rows: 5,
        cols: 4,
    },
]

//dimension specifications
function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function photo_gallery() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className='p-4 mt-8 w-full'>
                <Typography variant="h4" component="h1" gutterBottom>
                    Competition Photos
                </Typography>
                <Divider sx={{ width: "90%", marginY: "8px" }} />
                <ImageList
                    sx={{ width: '100%', height: 700 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        //min dimensions
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
}
