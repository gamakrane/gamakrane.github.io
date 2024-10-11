import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Experience = () => {
  const LOCACOEUR_Tasks_Alternanace = [
    "Creation of dynamic dashboards",
    "Development of a mobile application",
    "Implementation of a PDF file comparator"
  ];

  const LOCACOEUR_Tasks_Stage = [
    "Réalistaion d'un cahier de charges d'une application mobile",
    "Création de tableau de bord dynamiques",
    "Benchmark et étude de marché"
  ];

  const ECM_project = [
    "Préaparation du Dataset",
    "Entraînement du modèle",
    "Déploiement"
  ];

  return (
    <section id="experience">
        <div className='timeline-title'>
          <h2>Experience</h2>
        </div>
          <VerticalTimeline>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#23337f', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '2px solid  rgb(33, 150, 243)' }}
                  date="SEPT 2023 -  AUG 2024 (12 MONTHS) "
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#23337f' }}
              >
                  <h3 className="vertical-timeline-element-title">LOCACOEUR</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "10px" }}>
                      <h4 className="vertical-timeline-element-title">Apprenticeship, R&D</h4>
                      <h3 className="vertical-timeline-element-subtitle">Marseille, France</h3>
                  </div>

                  <ul>
                    {LOCACOEUR_Tasks_Alternanace.map((competence, index) => (
                      <li key={index}>{competence}</li>
                    ))}
                  </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#23337f', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '2px solid  rgb(33, 150, 243)' }}
                  date="JUN 2023 -  AUG 2023 (3 MONTHS) "
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#23337f' }}
              >
                  <h3 className="vertical-timeline-element-title">LOCACOEUR</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "10px" }}>
                      <h4 className="vertical-timeline-element-title">Internship</h4>
                      <h3 className="vertical-timeline-element-subtitle">Marseille, France</h3>
                  </div>

                  <ul>
                    {LOCACOEUR_Tasks_Stage.map((competence, index) => (
                      <li key={index}>{competence}</li>
                    ))}
                  </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#23337f', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '2px solid  rgb(33, 150, 243)' }}
                  date="FEB 2023 -  JUN 2023 (4 MONTHS) "
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#23337f' }}
              >
                  <h3 className="vertical-timeline-element-title">AXYN Robotiques & ECM</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "10px" }}>
                      <h4 className="vertical-timeline-element-title">Projet Innovation</h4>
                      <h3 className="vertical-timeline-element-subtitle">Marseille, France</h3>
                  </div>

                  <ul>
                    {ECM_project.map((competence, index) => (
                      <li key={index}>{competence}</li>
                    ))}
                  </ul>
              </VerticalTimelineElement>
          </VerticalTimeline>
    </section>
  );
};


