import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaReadComponent } from './disciplina-read.component';

describe('DisciplinaReadComponent', () => {
  let component: DisciplinaReadComponent;
  let fixture: ComponentFixture<DisciplinaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
