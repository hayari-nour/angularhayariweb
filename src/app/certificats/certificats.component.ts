import { Component, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface CertificatsElement {
  date: string;
  certificat: string;
}

const ELEMENT_DATA: CertificatsElement[] = [
{date: '2023', certificat: 'Microsoft Certified DP-203 : Azure Data Engineer'},
{date: '2022', certificat: 'Microsoft Certified AI-900 : Azure AI fundamentals'},
{date: '2022', certificat: 'Microsoft Certified DP-900 : Azure Data Fundamentals'},

];

@Component({
  selector: 'app-certificats',
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './certificats.component.html',
  styleUrls: ['./certificats.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CertificatsComponent {

  displayedColumns: string[] = ['date', 'certificat'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}