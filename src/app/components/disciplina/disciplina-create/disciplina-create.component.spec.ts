import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaCreateComponent } from './disciplina-create.component';

describe('DisciplinaCreateComponent', () => {
  let component: DisciplinaCreateComponent;
  let fixture: ComponentFixture<DisciplinaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
