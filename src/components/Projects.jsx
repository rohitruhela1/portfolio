import React from 'react';

const projects = [
    {
        title:'Music App',
        role:'Frontend Developer',
        description: 'Built a music streaming application using React, Tailwind CSS, Redux, and AWS Amplify, enabling users to discover and stream music from various genres, artists, and playlists.'
    },
    {
        title:'Portfolio',
        role: 'Frontend Developer',
        description: 'Built a responsive and user-friendly portfolio website using React, Tailwind CSS .'
    },
    {
        title: 'Soil-care',
        role: 'Frontend Developer',
        description: 'Spearheaded the development and launch of an innovative online platform catering to farmers\' needs, offering services such as soil testing, water management tools, and customized fertilizers and pesticides.\n Using HTML,CSS,JS.'
    },
    {
        title: 'Arduino Servo Motor Control',
        role: 'Developer',
        description: 'Developed and programmed an Arduino-controlled servo motor system for 180-degree rotation, implementing advanced hardware setup and software integration.'
    },
    {
        title: 'Printed Circuit Board design',
        role: 'Designer ',
        description: 'Designed and developed a PCB for an adder circuit using operational amplifiers (OPM), including schematic design, layout, and testing. Ensured accurate signal processing and optimized the board for performance and reliability.'
    }
];

export default function Project({ mode }) {
    return (
        <div className={`min-h-screen p-8 ${mode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <ul className="list-disc pl-5">
                {projects.map((project, index) => (
                    <li key={index} className="mb-6 p-4">
                        <h2 className="text-xl font-semibold">{project.title} | {project.role} </h2>
                        <p className="mt-1">{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
