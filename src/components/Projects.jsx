import React from 'react';

const projects = [
    {
        title: 'Music App',
        role: 'Frontend Developer',
        description: 'Built a music streaming application using React, Tailwind CSS, Redux, and AWS Amplify, enabling users to discover and stream music from various genres, artists, and playlists.'
    },
    {
        title: 'Portfolio',
        role: 'Frontend Developer',
        description: 'Built a responsive and user-friendly portfolio website using React, Tailwind CSS.'
    },
    {
        title: 'Soil-care',
        role: 'Frontend Developer',
        description: 'Spearheaded the development and launch of an innovative online platform catering to farmers\' needs, offering services such as soil testing, water management tools, and customized fertilizers and pesticides.\n Using HTML, CSS, JS.'
    },
    {
        title: 'Arduino Servo Motor Control',
        role: 'Developer',
        description: 'Developed and programmed an Arduino-controlled servo motor system for 180-degree rotation, implementing advanced hardware setup and software integration.'
    },
    {
        title: 'Printed Circuit Board design',
        role: 'Designer',
        description: 'Designed and developed a PCB for an adder circuit using operational amplifiers (OPM), including schematic design, layout, and testing. Ensured accurate signal processing and optimized the board for performance and reliability.'
    }
];

export default function Project() {
    return (
        <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center ">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Project Content */}
            <div className="relative z-10 w-full max-w-4xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">{project.title} | {project.role}</h2>
                            <p className="mt-2">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
