import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TruncatePipe } from "./truncate.pipe";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TruncatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ec2';
}
