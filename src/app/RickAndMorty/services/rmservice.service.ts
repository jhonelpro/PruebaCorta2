import { HttpClient } from '@angular/common/http';
import { EventEmitter, inject, Injectable, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ResponseAPIGetAll } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class RmserviceService {
  
  private baseUrl: string = 'https://rickandmortyapi.com/api';
  private http = inject(HttpClient);

  constructor() { 

  }

  async getCharacters(): Promise<ResponseAPIGetAll> {
    try {
      const response = await firstValueFrom(this.http.get<ResponseAPIGetAll>(`${this.baseUrl}/character`));
      return Promise.resolve(response);
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  async loadPage(url: string): Promise<ResponseAPIGetAll> {
    try {
      const response = await firstValueFrom(this.http.get<ResponseAPIGetAll>(url));
      return Promise.resolve(response);
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  async getCharacterByName(name: string): Promise<ResponseAPIGetAll> {
    try {
      if (name === '') {
        return this.getCharacters();
      }
      const response = await firstValueFrom(this.http.get<ResponseAPIGetAll>(`${this.baseUrl}/character/?name=${name}`));
      return Promise.resolve(response);
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

}
