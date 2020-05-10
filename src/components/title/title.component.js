import React from 'react';
import './title.style.css';

class Title extends React.Component{
    render(){
        return(
        <h1>{this.props.titleApp}</h1>
        )
    }
}

export default Title;

