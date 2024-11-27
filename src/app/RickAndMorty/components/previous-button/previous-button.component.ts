import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-previous-button',
  standalone: true,
  imports: [],
  templateUrl: './previous-button.component.html',
  styleUrl: './previous-button.component.css'
})
export class PreviousButtonComponent {

  @Output() previousButtonClicked = new EventEmitter<void>();

  previousButton(){
    this.previousButtonClicked.emit();
  }
}
