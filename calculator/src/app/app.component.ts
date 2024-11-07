import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumPadComponent } from './num-pad/num-pad.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumPadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
