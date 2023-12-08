import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbarmenu',
  standalone:true,
  templateUrl: './toolbarmenu.component.html',
  styleUrls: ['./toolbarmenu.component.css'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolbarmenuComponent {

}
