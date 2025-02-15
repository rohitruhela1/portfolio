import React from 'react';

const projects = [
    {
        title: 'Ecom',
        role: 'Full-Stack Developer',
        description: [
            'Developed a full-fledged eCommerce platform with a user-friendly interface.',
            'Implemented cart management, product filtering, and user authentication features.',
            'Integrated a secure payment gateway for seamless transactions.'
        ],
        link: 'https://github.com/rohitruhela1/Ecom'
    },
    {
        title: 'FoodApp',
        role: 'Full-Stack Developer',
        description: [
            'Built an online food ordering platform with a dynamic menu and order tracking.',
            'Integrated user authentication and real-time cart updates.',
            'Optimized UI for a responsive, mobile-friendly experience.'
        ],
        link: 'https://github.com/rohitruhela1/Foodapp'
    },
    {
        title: 'Image Generator',
        role: 'Frontend Developer',
        description: [
            'Created an AI-powered image generator that produces unique visuals based on user input.',
            'Implemented a clean and intuitive UI with real-time preview functionality.',
            'Utilized APIs and advanced JavaScript techniques for seamless image processing.'
        ],
        link: 'https://github.com/rohitruhela1/imagegenerator'
    },
    {
        title: 'Netflix Clone',
        role: 'Full-Stack Developer',
        description: [
            'Developed a Netflix-inspired streaming platform with authentication.',
            'Integrated a movie database API for fetching and displaying content.',
            'Designed an engaging UI with Tailwind CSS and React.js.'
        ],
        link: 'https://github.com/rohitruhela1/netflixclone'
    },
    {
        title: 'Portfolio',
        role: 'Frontend Developer',
        description: [
            'Designed and built a personal portfolio website to showcase projects and skills.',
            'Implemented responsive design for seamless viewing on all devices.',
            'Integrated dynamic animations and interactive elements.'
        ],
        link: 'https://github.com/rohitruhela1/portfolio'
    },
    {
        title: 'To-Do List (Task2)',
        role: 'Frontend Developer',
        description: [
            'Built a simple and efficient to-do list app for task management.',
            'Implemented local storage to save tasks persistently.',
            'Designed a minimal and user-friendly UI using React.js.'
        ],
        link: 'https://github.com/rohitruhela1/RohitRuhelaNaCoFrontend/tree/main/Task2-To-Do_List'
    },
    {
        title: 'Quiz App (Task3)',
        role: 'Frontend Developer',
        description: [
            'Developed an interactive quiz application with multiple-choice questions.',
            'Implemented score tracking and real-time answer validation.',
            'Optimized for performance and responsiveness across devices.'
        ],
        link: 'https://github.com/rohitruhela1/RohitRuhelaNaCoFrontend/tree/main/Task3-Quiz'
    },
    {
        title: 'Random Color Generator (Task4)',
        role: 'Frontend Developer',
        description: [
            'Created a random color generator that provides unique color codes on click.',
            'Implemented copy-to-clipboard functionality for easy use.',
            'Designed a simple and visually appealing UI.'
        ],
        link: 'https://github.com/rohitruhela1/RohitRuhelaNaCoFrontend/tree/main/Task4-Generate_Random_Color'
    },
    {
        title: 'Soil Care',
        role: 'Frontend Developer',
        description: [
            'Developed an agriculture-focused platform to help farmers with soil health management.',
            'Integrated tools for soil testing and water management.',
            'Provided customized recommendations for fertilizers and pesticides.'
        ],
        link: 'https://github.com/rohitruhela1/soil-care'
    }
];

export default function Project() {
    return (
        <div className="relative min-h-screen text-white flex flex-col items-center p-10">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-12 text-left">Projects</h1>

            {/* Timeline Container */}
            <div className="relative w-full max-w-5xl">
                {/* Vertical Line (Only for Desktop) */}
                <div className="absolute top-0 left-[32px] md:left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full"></div>

                {/* Project Nodes */}
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col md:flex-row items-start md:items-center w-full mb-10"
                    >
                        {/* Connector Circle */}
                        <div className="absolute left-[32px] md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-400 rounded-full border-2 border-white"></div>

                        {/* Project Card */}
                        <div 
                            className={`relative w-[90%] sm:w-[80%] md:w-[50%] bg-white/10 backdrop-blur-md p-12 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 
                            mx-4 sm:mx-8 ml-12 sm:ml-16 md:ml-0
                            ${index % 2 === 0 ? 'md:-translate-x-[5%]' : 'md:translate-x-[105%]'}`}
                        >
                            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                            <ul className="text-base text-gray-300 list-disc pl-5 space-y-2">
                                {project.description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                GitHub Link →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
