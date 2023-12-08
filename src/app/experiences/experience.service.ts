// experience.service.ts
import { Injectable } from '@angular/core';
import { Experience } from './experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  getExperiences(): Experience[] {
    // Retournez ici la liste de vos expériences
     var experiencesold : Experience [] = [
        {
            date: "2023",
            role: "Data ingineer",
            location: "IFDis",
            logoUrl: "./assets/images/ifdis.png",
            description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            tasks: ["rask1","rask2"],
            technicalEnvironment: "HTML, CSS, JavaScript, React, Node.js",
            showDetails: true,
        },
        {
            date: "2022",
            role: "Data ingineer2",
            location: "IFDis",
            logoUrl: "./assets/images/ifdis.png",
            description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            tasks: ["rask1","rask2"],
            technicalEnvironment: "HTML, CSS, JavaScript, React, Node.js",
            showDetails: true,
        },
        {
            date: "2021",
            role: "Data ingineer3",
            location: "IFDis",
            logoUrl: "./assets/images/ifdis.png",
            description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            tasks: ["rask1","rask2"],
            technicalEnvironment: "HTML, CSS, JavaScript, React, Node.js",
            showDetails: true,
        },
        {
            date: "2020",
            role: "Data ingineer4",
            location: "IFDis",
            logoUrl: "./assets/images/ifdis.png",
            description: "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
            tasks: ["rask5","rask3"],
            technicalEnvironment: "javaTML, CSS, JavaScript, React, Node.js",
            showDetails: true,
        },
        {
            date: "2014",
            role: "consultant ingineer",
            location: "IFDis",
            logoUrl: "./assets/images/ifdis.png",
            description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            tasks: ["rasconsultantk1","raconsultantsk2"],
            technicalEnvironment: "HTML, CSS, JavaScript, React, Node.js",
            showDetails: true, 

        },
        {
            date: "2019",
            role: "dev ingineer",
            location: "IFDis",
            logoUrl: "./assets/images/ifdis.png",
            description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            tasks: ["devdevdevdevdevrask1","devdevdevdevdevrask2"],
            technicalEnvironment: "HTML, CSS, JavaScript, React, Node.js",
            showDetails: true,

        }
      ];
 return experiencesold;

  }
}
