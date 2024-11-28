import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {

  inputTextChange: string = '';

  @Output() inputSubmitted = new EventEmitter<string>();
  
  sendInput(){
    this.inputSubmitted.emit(this.inputTextChange.trim());
    this.inputTextChange = '';
  }
}
