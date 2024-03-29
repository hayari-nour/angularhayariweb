import {CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { ViewChild } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.model';

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
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }

  toggleDetails(experience: Experience): void {
    experience.showDetails = !experience.showDetails;
  }


}
