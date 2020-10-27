import React from 'react';
import Experience from './components/Experience';

const tabExperiences = [
  {
    year: "2016-2018",
    company: "Agricool",
    tasks: "Chief Operator"
  },
  {
    year: "2018-2019",
    company: "Ferme de la Chebuette",
    tasks: "Chief Operator"
  }
]

const App = () => {
  return (
    <div>
      {tabExperiences.map((experience) => 
      <Experience experience={experience} 
      />)}
    </div>
  );       
        
}

export default App;
