import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ToolbarmenuComponent } from './toolbarmenu/toolbarmenu.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone:true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule,RouterLink, RouterOutlet,ToolbarmenuComponent,FooterComponent],
})
export class AppComponent {
  title = 'hayari web';
}
