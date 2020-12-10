import { DisciplinaService } from './../disciplina.service';
import { Component, OnInit } from '@angular/core';
import { DisciplinaDTO } from '../disciplinaDTO.model';

@Component({
  selector: 'app-disciplina-read',
  templateUrl: './disciplina-read.component.html',
  styleUrls: ['./disciplina-read.component.css']
})
export class DisciplinaReadComponent implements OnInit {
  
  disciplinas: DisciplinaDTO[];

  constructor(
    private disciplinaService: DisciplinaService
  ) {
  }

  ngOnInit(): void {
    this.disciplinaService.readFindAll()
    .subscribe(response => {
      this.disciplinas = response;
      console.log(response);
    },
    error => {});
    
  }
}
