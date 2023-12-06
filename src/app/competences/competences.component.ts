import { Component, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  domaine: string;
  technologie: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{domaine: 'Développement', technologie: 'JAVA/JEE, Scala, Python, ReactJS, AngularJS,  REST, SOAP'},
{domaine: 'Cloud / Big Data', technologie: 'Azure, AWS, Hortonworks, MapR'},
{domaine: 'NoSql  moteurs recherche', technologie: 'Hbase, Hive, Cassandra, MongoDB, Neo4j, ElasticSearch, Solr'},
{domaine: 'Bases de données SQL', technologie: 'Oracle, MYSQL, SQL Server, PostgreSQL'},
{domaine: 'Serveurs', technologie: 'Tomcat, Jboss, GlassFish, Windows server (IIS 6 & IIS 7.5)'},
{domaine: 'Intégration, packaging', technologie: 'Jenkins, GIT, Ant, Maven, SVN, CVS'},
{domaine: 'Outils - Framework', technologie: 'JIRA, Gitlab, Hadoop, Spark, Docker, Eclipse, Netbeans, Spring, SoapUI, JPA/Hibernate,  Mantis, sqlDeveloper'},
];

@Component({
  selector: 'app-competences',
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CompetencesComponent {

  displayedColumns: string[] = ['domaine', 'technologie'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




