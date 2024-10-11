import React from 'react';
import SchoolCard from './SchoolCard';
import Logo_ECM from "../assets/img/Logo_ECM.png";
import Logo_AIAC from "../assets/img/Logo_AIAC.png";

export const Education = () => {
  return (
    <section  id="education">
        <div className="experience-container">
            <h1>Education</h1>
            <div className="schools-columns">
                <SchoolCard 
                logo={Logo_ECM}
                name="Centrale Méditerranée "
                years="(2022 - 2025)"
                major="Mathematics, Computing, Economics"
                city="Marseille, France" 
                />
                <SchoolCard 
                logo={Logo_AIAC}
                name="Mohammed VI International Academy of Civil Aviation"
                years="(2021 - 2025)"
                major="Master of Siences"
                city="Nouacer, Maroc"
                />
            </div>
        </div>

    </section>
    
  );
};


