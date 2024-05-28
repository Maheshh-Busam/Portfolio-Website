import Java from '../../img/java.png'
import JavaScript from '../../img/javascript.png'
import SQL from '../../img/sql.png'
import NoSQL from '../../img/nosql.png'
import React from '../../img/react.png'
import SpringBoot from '../../img/spring-boot.png'
import Microservices from '../../img/microservices.png'
import Api from '../../img/api.png'
import HTML from '../../img/html.png'
import CSS from '../../img/css.png'
import Redux from '../../img/redux.png'
import Tailwind from '../../img/tailwind.png'
import MySQL from '../../img/mysql.png'
import MongoDB from '../../img/mongodb.png'
import AWS from '../../img/aws.png'
import Git from '../../img/git.png'
import Jenkins from '../../img/jenkins.png'
import Eclipse from '../../img/eclipse.png'
import VSCode from '../../img/vs-code.png'

export const allTabs = [
    { label: "Languages", skills: ["Java", "JavaScript", "SQL", "NoSQL"], icons: [Java, JavaScript, SQL, NoSQL] },
    { label: "Full-stack", skills: ["React", "Spring Boot", "Micro-services", "REST API", "MySQL"], icons: [React, SpringBoot, Microservices, Api, MySQL] },
    { label: "Front-end", skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS"], icons: [HTML, CSS, JavaScript, React, Redux, Tailwind] },
    { label: "Back-end", skills: ["Spring Boot", "Micro-services", "REST API","MySQL", "MongoDB", "AWS"], icons: [SpringBoot, Microservices, Api, MySQL, MongoDB, AWS] },
    { label: "Others", skills: ["Git", "Jenkins", "Eclipse", "VS Code"], icons: [Git, Jenkins, Eclipse, VSCode] }
  ];
  
  const [languages, fullStack, frontEnd, backEnd, others] = allTabs;
  export const initialTabs = [languages, fullStack, frontEnd, backEnd, others];
  
  export function getNextTab(tabs) {
    const existing = new Set(tabs);
    return allTabs.find((tab) => !existing.has(tab));
  }
  