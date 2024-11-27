import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-next-button',
  standalone: true,
  imports: [],
  templateUrl: './next-button.component.html',
  styleUrl: './next-button.component.css'
})
export class NextButtonComponent {
  
  @Output() nextButtonClicked = new EventEmitter<void>();

  nextButton(){
    this.nextButtonClicked.emit();
  }
}
