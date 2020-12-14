import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';
import { DisciplinaDTO } from '../disciplinaDTO.model';

@Component({
  selector: 'app-disciplina-update',
  templateUrl: './disciplina-update.component.html',
  styleUrls: ['./disciplina-update.component.css']
})
export class DisciplinaUpdateComponent implements OnInit {

  obj: DisciplinaDTO= {
    nome: ""
  }

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router,
     private route: ActivatedRoute
     ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.disciplinaService.readById(id).subscribe(obj => {
      this.obj = obj;
      console.log(obj);
    });
  }

  updateDisciplina(): void {
    this.disciplinaService.update(this.obj).subscribe(() => {
      this.disciplinaService.showMessage("Disciplina atualizada com sucesso..")
      this.router.navigate(['/disciplinas'])
    });
    
  }

  
  cancel(): void {
    this.router.navigate(['/disciplinas'])
  }

}
