import { API_CONFIG } from './../../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DisciplinaDTO } from './disciplinaDTO.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient) { 
  }

  
  readFindAll() : Observable<DisciplinaDTO[]>  {
    return this.http.get<DisciplinaDTO[]>(`${API_CONFIG.baseUrl}/disciplinas`);
}
}
