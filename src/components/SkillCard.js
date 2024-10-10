import React from 'react';
import { Icon } from '@iconify/react'; 

const SkillCard = ({ skill }) => {
    const { name } = skill;
    
    const skillIcons = {
        'HTML': 'vscode-icons:file-type-html',
        'CSS': 'vscode-icons:file-type-css',
        'SQL': 'vscode-icons:file-type-sql',
        'Python': 'logos:python',
        'C/C++': 'logos:c',
        'Java': 'logos:java',
        'JavaScript': 'logos:javascript',
        'R': 'logos:r-lang',
        'Node.js': 'logos:nodejs',
        'React': 'logos:react', 
        'Matplotlib': 'logos:matplotlib-icon', 
        'Seaborn': 'logos:seaborn-icon', 
        'Pandas': 'simple-icons:pandas', 
        'TensorFlow': 'logos:tensorflow',
        'Power Bi': 'logos:microsoft-power-bi',
        'Git': 'logos:git-icon'

    };
    
    return (
        <div className='skill-card'>
            <div className="icon-container">
                <Icon icon={skillIcons[name]} width="40" height="40" />
            </div>
            <h5>{name}</h5>
        </div>
    );
};

export default SkillCard;
