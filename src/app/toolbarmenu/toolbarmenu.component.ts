import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { PdfDownloadComponent } from '../pdf-download/pdf-download.component';

@Component({
  selector: 'app-toolbarmenu',
  standalone:true,
  templateUrl: './toolbarmenu.component.html',
  styleUrls: ['./toolbarmenu.component.css'],
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,PdfDownloadComponent],
})
export class ToolbarmenuComponent {

}
