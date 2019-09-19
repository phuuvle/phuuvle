import SkillBar from 'react-skillbars';
import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const skills = [
            {type: "JAVA", level: 80},
            {type: "FIREBASE", level: 65},
            {type: "PYTHON", level: 60},
            {type: "REACT", level: 55},
            {type: "HASKELL", level: 50},
            {type: "C", level: 40},
            {type: "HTML/CSS", level: 30},
            {type: "JAVASCRIPT", level: 30},
            {type: "VERILOG", level: 20}
        ]

        const colors = {
            bar: '#5da6e3',
            title: {
                text: 'black',
                background: 'white'
            }
        }

        return(
            <SkillBar height={25} colors={colors} skills={skills} />
        );
    }
}

export default Skills;