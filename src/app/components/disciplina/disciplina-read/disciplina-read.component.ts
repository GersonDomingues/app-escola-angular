import { Component,  OnInit, ViewChild  } from '@angular/core';
import { DisciplinaService } from './../disciplina.service';
import { DisciplinaDTO } from '../disciplinaDTO.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-disciplina-read',
  templateUrl: './disciplina-read.component.html',
  styleUrls: ['./disciplina-read.component.css']
})
export class DisciplinaReadComponent implements OnInit {
  disposicao: DisciplinaDTO[];
  displayedColumns: string[] = ['id', 'nome', 'action'];
  dataSource = new MatTableDataSource<DisciplinaDTO>();

  
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;
   constructor(private disciplinaService: DisciplinaService) {
  }

  

  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.readFindAll();
    
  }

  public readFindAll(){
    let resp = this.disciplinaService.readFindAll();
    resp.subscribe(response=>this.dataSource.data=response as DisciplinaDTO[])
  }
      
}
