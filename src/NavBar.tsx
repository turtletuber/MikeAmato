import React from "react";
import "./NavBar.css";

export default class NavBar extends React.Component{
    render() {
        return <>
            <h1 className={'NavBar'}> Mike Amato</h1>
            <h2 className={'NavBar'} style={{color: '#818181'}}>a content portfolio</h2>

        </>;
    }
}