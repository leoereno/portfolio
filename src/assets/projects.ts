import { Project } from "../types/types";



export const projects: Project[] = [
    {
        title: "Emojify",
        description: "Manipulação do input do usuário para a inserção de emojis aleatórios no texto.",
        descriptionEn: "Random emoji placement on user input string.",
        projectUrl: "https://emojify-ten.vercel.app/",
        githubUrl: "https://github.com/leoereno/emojify",
        tools: [
            "HTML", 
            "CSS", 
            "React", 
            "TypeScript", 
            "External API integration", 
            "Responsive Design"
        ],
        imageUrl: require('./img/emojify.png')
    },
    {
        title: "Weather App",
        description: "SPA para previsão do tempo baseado em input do usuário ou geolocalização.",
        descriptionEn: "Forecast SPA based on user input region and geolocation browser API.",
        projectUrl: "https://weather-app-zeta-one-20.vercel.app/",
        githubUrl: "https://github.com/leoereno/weather-app",
        tools: ["HTML", "CSS", "React", "TypeScript", "External API integration", "React Hooks", "Responsive Design",
            "Tailwind"
        ],
        imageUrl: require('./img/weather-app.png')
    }
]


