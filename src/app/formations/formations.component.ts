import { Component, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

export interface FormationsElement {
  date: string;
  formation: string;
  lieu: string;
}

const ELEMENT_DATA: FormationsElement[] = [
{date: '2012', formation: 'Développeur en environnement Microsoft .NET / SHAREPOINT (45 jours)', lieu:'FITEC, Paris'},
{date: '2007 - 2008', formation: 'Développeur JAVA/J2EE (4 mois)', lieu:'Cyberlog, Paris'},
{date: '2006', formation: 'Doctorat en Informatique/mathématiques appliquées :Cartes auto-organisatrices et approche évolutionniste pour les problèmes de tournées de véhicules avec regroupements Réf:https://www.theses.fr/2005BESA2012', lieu:'UTBM, Belfort'},
{date: '2005', formation: 'Master Sciences, mention Mathématiques à finalité professionnelle', lieu:'ULP, Strasbourg'},
{date: '2000', formation: 'DEA recherche opérationnelle, combinatoire et optimisation', lieu:'INPG, Grenoble'},
];
@Component({
  selector: 'app-formations',
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatIconModule],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css'],
  /*encapsulation: ViewEncapsulation.None,*/
})
export class FormationsComponent {
  displayedColumns: string[] = ['date', 'formation', 'lieu'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




