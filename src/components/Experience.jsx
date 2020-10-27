import React from 'react';


const Experience = ({experience}) => {
    return (
        <div>
            <h2>{experience.year}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.tasks}</p>
        </div>
    )
}






export default Experience;