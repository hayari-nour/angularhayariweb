import {CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';


/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  /*encapsulation: ViewEncapsulation.None,*/
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
})
export class ExperienceComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion= new MatAccordion();

  experiences = [
    {
      title: "Développeur web",
      subtitle: "2022 - Present",
      content: "Développement de sites web et d'applications web",
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      title: 'Ingénieur logiciel',
      subtitle: '2020 - 2022',
      content: 'Développement de logiciels embarqués',
      technologies: ['C', 'C++', 'Microcontrôleurs']
    }
  ];

}
