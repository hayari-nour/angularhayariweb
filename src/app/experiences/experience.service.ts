// experience.service.ts
import { Injectable } from '@angular/core';
import { Experience } from './experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  getExperiences(): Experience[] {

     var experiencesold : Experience [] = [
        {                      
        date: "2022 - 2023",
        role: "Data Ingénieur",
        lieu: "IFDIS",
        logoUrl: "./assets/images/ifdis.png",
        description:"La mise en place d'un data hub sport permettant de collecter, traiter et analyser des données sportives afin d'identifier les facteurs clés influençant les performances et la sécurité des sportifs. Les objectifs principaux :        - Aider les entraîneurs, les gestionnaires et les sportifs à prendre des décisions éclairées. - Améliorer les performances et la sécurité des sportifs.",
        tasks: ["Collecter des données provenant de diverses sources, telles que les capteurs IoT, les plateformes de sport","Identifier les facteurs clés influençant les performances et la sécurité des sportifs","Prédire les performances et la sécurité des sportifs à l'aide de l'apprentissage automatique"],
        technicalEnvironment: "Spring boot , React Js, PostgreSQL, docker, Kubernetes, GitLab (CI/CD), Trello(Agile), AWS (S3), ML(Amazon SageMaker), Selenium IDE (test IHM)",
        showDetails: true,
        },
        { 
        date: "2021",
        role: "Développeur Senior",
        lieu: "General-carpentry",
        logoUrl: "./assets/images/gcn.png",
        description: "Réalisation d'un projet en autonomie avec développement d'une application web SPA dynamique adaptée aux mobiles",
        tasks: ["Création des bases de données de l'application", "Développements de la partie back-end avec Spring Boot","Développements de la partie front-end avec React JS", "Déploiement de l'application"],
        technicalEnvironment: "Spring Boot, React JS, HTML5, Bootstrap 4, Jenkins, Git, Jira,  PostgreSQL",
        showDetails: true,
        },
        {
        date: "Avril 2019 - Janvier 2020",
        role: "Consultant Big Data",
        lieu: "EDF",
        logoUrl: "./assets/images/edf.png",
        description:"Mise en place en place des traitements pour l'ingestion des données dans un Datalake : collecte, transformation, ingestion, suivi, alerting.",
        tasks: ["Extraction des données de facturation depuis oracle et insertion dans Hive", "Exportation des données INSEE et préparation des datatables/ dataview en Hive","Transformation de données de différents flux et formats (xml, csv, json) et insertion dans Hive et/ou HBase","Suivi des traitements via une application de monitoring et ElasticSearch"],
        technicalEnvironment: "Agile, Spark, Java, Scala, Hive, HBase, zeppelin, ElasticSearch, Kafka, Jenkins, Git, Jira, Cucumber, Python 3, sqoop, Spring Boot , Oracle, Control-M (ordonnanceur)",
        showDetails: true,
        },
        { 
        date: "Avril 2018 - Mars 2019",
        role: "Big Data Ingénieur",
        lieu: "Poclain",
        logoUrl: "./assets/images/poclain.png",
        description:"Système de collecte des données depuis des capteurs installés sur des moteurs",
        tasks: ["Participation à la mise en place de l'architecture fonctionnelle", "Participation à la mise en place de l'architecture physique", "Participation à la mise en place de l'architecture technique.", "Adoption de l'architecture Lambda pour l'ingestion, la transformation et le stockage des données"], 
        technicalEnvironment: "MQTT, Kafka Confluent, Spark, ElasticSearch (ELK), Tableau",
        showDetails: true,
        },
        {                      
        date : "Déc 2017 - Mars 2018",
        role: "Big Data Ingénieur",
        lieu: "RADIOACTIV'IT",
        logoUrl: "./assets/images/radioactivitsmall.png",
        description: "Système de prédiction des datasets provenant de GitHub - Datalake.",
        tasks: ["Construction d'un générateur de commit et de fichiers aléatoires de GitHub","Mise en place d'un moteur de recherche pour les datasets","Mise en place d'un système de recommandation pour les repositories","Machine learning : Prédire qu'un repository serait massivement adopté par les développeurs"],
        technicalEnvironment: "Gougle cloud Platefrorm, Google Big Query, cloudera, apache Kafka, MongoDB, ElasticSearch, Neo4j, Docker, Java, Python 3",
        showDetails: true,
        },
        {
        date: "Juil 2016 - Nov 2017",
        role: "Développeur JAVA/JEE",
        lieu: "Altice",
        logoUrl: "./assets/images/altice.png",
        description:"Portail de prise de commandes et de gestion des interventions en JEE. Au sein de 2 équipes collaborant à distance.",
        tasks: ["Développement d'un nouveau portail pour les chargés de productions"],
        technicalEnvironment: "Agile, java 8, Maven 3, Spring Boot, AngularJS, REST, mongodb, Jira, SVN",
        showDetails: true,
        },
        { 
        date: "Sept 2015 - Juin 2016",
        role: "Développeur JAVA/JEE",
        lieu: "SFR",
        logoUrl: "./assets/images/sfr.png",
        description:"Un portail de prise de commandes par des ingénieurs commerciaux ciblant les entreprises et grands comptes. Il propose un catalogue exhaustif des offres et des coûts et met à disposition des commerciaux un plan de suivi des commandes. Méthode Agile-SCRUM- dans une équipe de 6 personnes",
        tasks: ["développement des évolutions en Java/J2ee","TMA"],
        technicalEnvironment: "Java, Maven 3, JSF2, primefaces, Jasper 6, ehCache 3, EJB3, Junit4, Axis 1.4, JPA2, Hibernate4, dozer 5.5, Oracle, sqlServer 2005, Mysql 5.6, Eclipse, Apache2.2, Jboss7",
        showDetails: true,
        },
        {
        date: "Mars 2015 - Juil 2015",
        role: "Consultant JAVA/JEE",
        lieu: "Speedy",
        logoUrl: "./assets/images/speedy.png",
        description:"Application Web en Jee & angularJS destinée aux clients  de Speedy (particuliers et/ou entreprises), leur permettant la gestion des utilisateurs, des véhicules et des différentes demandes liées aux réparations et maintenances des véhicules.",
        tasks: ["Correction des bugs", "amélioration des batchs de synchronisation entre les bases de données mysql et Hyper files c/s (intermédiaire avec AS400)","Stabilisation de l'application"],
        technicalEnvironment: "Java, AngularJS, REST, debian, windows Hyper files c/s, Mysql5, tomcat, Hibernate4",
        showDetails: true,
        },
        { 
        date: "Juin 2013 - Fév 2015",
        role: "Ing. étude et développement JAVA/JEE",
        lieu: "SFR",
        logoUrl: "./assets/images/sfr.png",
        description: "Intervenant sur plusieurs projets : Sigma, Vegas, Autorepair, Prediag :\n- Sigma : application web de diagnostic à distance des modems sfr, destinée aux conseillers sfr.\n- Vegas : applications web de gestion des demandes clients destinée aussi aux conseillers sfr.\n - Prediag : web service consommé par plusieurs applications internes.\n - AutoRepair : api mobile qui est une adaptation de l'application sigma aux mobiles.",
        tasks: ["Chiffrage et rédaction des STD et développement des évolutions en Java/Jee pour les 4 projets.","Installation des serveurs Tomcat.","Correction des anomalies et des bugs des différentes applications et des batches associés.","Réalisation de Scripts Shell et SQL pour la mise en production des 4 applications.","Mise en production des projets avec astreintes."],
        technicalEnvironment: "Maven 3, Spring, Hibernate, JPA, Oracle, SOAP,  Eclipse, Apache2.2, Tomcat, Solaris",
        showDetails: true,
        },
        { 
        date: "Oct 2012 - Mai 2013",
        role: "Développeur .NET c#",
        lieu: "Total",
        logoUrl: "./assets/images/totalt.jpg",
        description:"Application web pour la gestion et délégations des pouvoirs au sein du holding Total avec ses filiales",
        tasks: ["Analyse et chiffrage des évolutions","Conception d'algorithmes d'optimisation pour la délégation des pouvoirs","Amélioration des interfaces graphiques avec Internationalisation","Réalisation de scripts pour les bases de données Oracle", "Migration du serveur IIS 6 vers le serveur 7.5","Livraison sur les différentes plateformes : recettes, préproduction et production", "Assistances aux utilisateurs du système"],
        technicalEnvironment: "Visual studio 2008 .net (c#), Nhibernate, Windows server (2003 avec IIS 6 & 2008 avec IIS 7.5), AjaxUploader (outils de chargement de fichiers)",
        showDetails: true,
        },
        {
        date: "Fév 2008 - Juin 2012",
        role: "Ingénieur étude & développement",
        lieu: "Enerdis",
        logoUrl: "./assets/images/enerdis.jpg",
        description:"Logiciel E-online de gestion des énergies et de supervision à distance de points de comptage. L'objectif est l'optimisation des énergies consommées, s'inscrivant dans une démarche de respect de l'environnement.",
        tasks: ["Migration vers de nouvelles versions de la technologie java/j2ee","Gestion de la communication entre la couche web et les  points de comptages via le protocole XML-RPC.", "Évolution de la partie web avec Ajax.","Migration  et optimisation de la base de données Mysql.","Intégration des représentations graphiques via des librairies basées sur flash"],
        technicalEnvironment: "Eclipse, Hibernate 3, Struts 1.2, Ajax, JSTL, Tomcat 6, Log4j, Mysql, Oracle9i, SVN, Vmware, Open Flash Chart, JSON",
        showDetails: true,
        },
        { 
        date: "Juin 2007 - Oct 2007",
        role: "Ingénieur recherche opérationnelle",
        lieu: "Impact-Web",
        logoUrl: "./assets/images/impactweb.png",
        description:"Optimisation d'un logiciel d'aide au dessin et à la conception en ligne de terrasses en bois.",
        tasks: ["Modélisation mathématiques d'un problème de découpe de bois.","Implémentation d'un modèle mathématique d'optimisation, permettant un gain de plus de 10%."],
        technicalEnvironment: "Java, Netbeans, optimisation linéaire",
        showDetails: true,
        },
        { 
        date: "Sept 2002 - Août 2004",
        role: "Enseignant-Chercheur A.T.E.R",
        lieu: "UTBM",
        logoUrl: "./assets/images/utbm.png",
        description:"Chargé des travaux pratiques en c/c++, Java, gestion de projet (méthode PERT)",
        tasks: ["Propositions de projets d'optimisation et d'ordonnancement aux élèves ingénieurs","Encadrement  des élèves ingénieurs","participation en tant que membre du jury lors de l'évaluation des soutenances"],
        technicalEnvironment: "Java, C/c++, Pert",
        showDetails: true,
        }
    ];
 return experiencesold;

  }
}
