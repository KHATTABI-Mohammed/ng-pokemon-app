import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:'app.component.html',
  imports: [RouterOutlet,
      FormsModule,
      HttpClientModule
      ]
})
export class AppComponent  {

}
