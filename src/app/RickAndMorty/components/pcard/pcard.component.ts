import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pcard',
  standalone: true,
  imports: [],
  templateUrl: './pcard.component.html',
  styleUrl: './pcard.component.css'
})
export class PcardComponent {

  @Input() characterInfo: any;
  
  constructor() {}

}

