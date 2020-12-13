import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { DisciplinaDTO } from '../disciplinaDTO.model';

@Component({
  selector: 'app-disciplina-create',
  templateUrl: './disciplina-create.component.html',
  styleUrls: ['./disciplina-create.component.css']
})
export class DisciplinaCreateComponent implements OnInit {

  obj: DisciplinaDTO = {
    nome: ""
  }
  constructor(private disciplinaService: DisciplinaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createDisciplina(): void {
    this.disciplinaService.create(this.obj).subscribe(() => {
      this.disciplinaService.showMessage('Disciplina Criada com Sucesso...')
      this.router.navigate(['/disciplinas'])
      
    }
    )
  }

  cancel(): void {
    this.router.navigate(['/disciplinas'])
  }

}
