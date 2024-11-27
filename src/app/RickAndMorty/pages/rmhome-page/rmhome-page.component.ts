import { Component, inject } from '@angular/core';
import { RmserviceService } from '../../services/rmservice.service';
import { HttpClientModule } from '@angular/common/http';
import { NextButtonComponent } from "../../components/next-button/next-button.component";
import { PreviousButtonComponent } from "../../components/previous-button/previous-button.component";
import { InputFieldComponent } from "../../components/input-field/input-field.component";
import { PcardComponent } from "../../components/pcard/pcard.component";
import { Character } from '../../interfaces/character';
import { Result } from '../../interfaces/ApiResponse';

@Component({
  selector: 'app-rmhome-page',
  standalone: true,
  imports: [HttpClientModule, NextButtonComponent, PreviousButtonComponent, InputFieldComponent, PcardComponent],
  providers: [RmserviceService],
  templateUrl: './rmhome-page.component.html',
  styleUrl: './rmhome-page.component.css'
})
export class RMhomePageComponent {

  private rmservice = inject(RmserviceService);

  private nextPageCharactersUrl: string = '';

  private previousPageCharactersUrl: string = '';

  datos: Character[] = [];

  constructor()
  {
    this.obtainCharacters();
  }

  obtainCharacters(){
    this.datos = [];
    this.rmservice.getCharacters().then((response) => {
      console.log(response); 
      this.nextPageCharactersUrl = response.info.next;
      this.previousPageCharactersUrl = response.info.prev ?? '';
      response.results.forEach((element: Result) => {
        this.datos.push({image: element.image, name: element.name, status: element.status, specie: element.species, location: element.location.name});
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  pageNavegation(url: string){
    this.datos = [];
    this.rmservice.loadPage(url).then((response) => {
      console.log(response);
      this.nextPageCharactersUrl = response.info.next;
      this.previousPageCharactersUrl = response.info.prev ?? '';
      response.results.forEach((element: Result) => {
        this.datos.push({image: element.image, name: element.name, status: element.status, specie: element.species, location: element.location.name});
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  onNextButtonClick() {
    if (this.nextPageCharactersUrl) {
      this.pageNavegation(this.nextPageCharactersUrl);
    }
  }

  onPreviousButtonClick() {
    if (this.previousPageCharactersUrl) {
      this.pageNavegation(this.previousPageCharactersUrl);
    }
  }

  onSearchButtonClick(name: string) {
    this.datos = [];
    this.rmservice.getCharacterByName(name).then((response) => {
      console.log(response);
      this.nextPageCharactersUrl = response.info.next;
      this.previousPageCharactersUrl = response.info.prev ?? '';
      response.results.forEach((element: Result) => {
        this.datos.push({image: element.image, name: element.name, status: element.status, specie: element.species, location: element.location.name});
      });
    }).catch((error) => {
      console.error(error);
    });
  }

}
