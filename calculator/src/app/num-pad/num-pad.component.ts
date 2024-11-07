import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-num-pad',
  standalone: true,
  imports: [],
  templateUrl: './num-pad.component.html',
  styleUrl: './num-pad.component.css'
})
export class NumPadComponent implements OnInit {
  title: string = "Calculator";
  display: string = "0";
  
  displayValue(event: Event) {
    let target = event.target as HTMLInputElement;
    if (this.display.length < 10) {
      this.display === "0" ? this.display = target.value : this.display += target.value;
    }
  }
  
  clearDisplay() {
    this.display = "0";
  }
  
  calculateDisplay() {
    let result;
    try {
      "use strict";
      result = eval(this.display);
      this.display = result;
    } catch (e) {
      this.clearDisplay();
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
