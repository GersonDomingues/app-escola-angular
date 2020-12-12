import { Component,  OnInit, ViewChild  } from '@angular/core';
import { DisciplinaService } from './../disciplina.service';
import { DisciplinaDTO } from '../disciplinaDTO.model';
import {MatTableDataSource} from '@angular/material/table';





@Component({
  selector: 'app-disciplina-read',
  templateUrl: './disciplina-read.component.html',
  styleUrls: ['./disciplina-read.component.css']
})
export class DisciplinaReadComponent implements OnInit {
  disposicao: DisciplinaDTO[];
  displayedColumns: string[] = ['id', 'nome'];
  dataSource = new MatTableDataSource<DisciplinaDTO>();

  
   constructor(private disciplinaService: DisciplinaService) {
  }

  

  ngOnInit(): void{
    
    this.readFindAll();
    
  }

  public readFindAll(){
    let resp = this.disciplinaService.readFindAll();
    resp.subscribe(response=>this.dataSource.data=response as DisciplinaDTO[])
  }
    
}
