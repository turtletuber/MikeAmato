import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from "./MediaCard";
import "./Gallery.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function AutoGrid() {
    const classes = useStyles();
    const gallery_css = {

    }

    return (

        <div className='Gallery' style={gallery_css}>
            <h2> Technical </h2>
            <Grid container spacing={6} justifyContent = {'center'}>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        title={'Introducing Annotations | InfluxData'}
                        subtitle={'a cloud database startup'}
                        desc={'Demonstrating InfluxData’s new annotations feature and wrapping the week up with a laugh. '}
                        image_link={'https://via.placeholder.com/150'}
                        video_link={'https://youtube.com'}
                    />

                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        title={'Open Source Project | Product Manager'}
                        subtitle={'a ReactJs web app'}
                        desc={'Produced a review of my work managing an open source software product for an EdTech startup.'}
                        image_link={'https://via.placeholder.com/150'}
                    />
                </Grid>
            </Grid>

            <h2> Educational </h2>
            <Grid container spacing={6} justifyContent = {'center'}>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        title={'What is Innovation?'}
                        subtitle={'a revamp of 2018 release'}
                        desc={'Explored modern examples, visuals, and delivery to maintain student engagement.'}
                        image_link={'https://via.placeholder.com/150'}
                    />

                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        title={'What does traction look like?'}
                        subtitle={'a revamp of 2015 release'}
                        desc={'Tested an interview-style video format with a professor delivering the majority of learning content.'}
                        image_link={'https://via.placeholder.com/150'}
                    />
                </Grid>
            </Grid>
            <h2> Creative </h2>

            <Grid container spacing={6} justifyContent = {'center'}>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        title={'Type 1 or Type 2 fun?'}
                        subtitle={'edited with an iPhone'}
                        desc={'While on the road during a backpacking trip, I tell a story in 1 minute. Constructed a 3 act story and used iMovie on an iPhone 8 to edit. '}
                        image_link={'https://via.placeholder.com/150'}
                    />

                </Grid>
            </Grid>
        </div>

    );
}
