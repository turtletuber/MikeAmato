import React from "react";
import hero from './hero.mp4';
import "./Body.css";
import {inspect} from "util";



export default class Body extends React.Component{
    render() {
        return <>

            <h2 className= 'subtitle'> Using communication and context to reduce friction between different domains. Context over control. </h2>
            <div className='Body'>
             <video className='videoTag' autoPlay loop muted>
                <source src={hero} type='video/mp4' />
                </video>
            </div>


        </>;
    }
}