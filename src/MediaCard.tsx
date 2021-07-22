import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


type GalleryCardProps = {
    title: string;
    subtitle: string;
    image_link: string;
    desc: string;
    video_link?: string
    // section: string;


}
// export default function GalleryCard (props : GalleryCardProps){
//     const classes = useStyles();
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props : GalleryCardProps){
        const classes = useStyles();

        return (

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.image_link}
                    />
                    <CardContent>
                       <h3>{props.title}</h3>
                        <h4 style={{color: '#818181'}}>{props.subtitle}</h4>
                       <p>{props.desc}</p>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"
                    onClick={() => {window.open(props.video_link)}}>
                        Watch
                    </Button>
                </CardActions>
            </Card>
        );
    }