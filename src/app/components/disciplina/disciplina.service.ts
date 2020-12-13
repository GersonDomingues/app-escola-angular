import { API_CONFIG } from './../../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DisciplinaDTO } from './disciplinaDTO.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { 
  }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }  
  readFindAll() : Observable<DisciplinaDTO[]>  {
    return this.http.get<DisciplinaDTO[]>(`${API_CONFIG.baseUrl}/disciplinas`);
  }

  create(obj: DisciplinaDTO): Observable<DisciplinaDTO> {
    return this.http.post<DisciplinaDTO>(`${API_CONFIG.baseUrl}/disciplinas`, obj);
  }
}