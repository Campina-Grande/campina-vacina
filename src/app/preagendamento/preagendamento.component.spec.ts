import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreagendamentoComponent } from './preagendamento.component';

describe('PreagendamentoComponent', () => {
  let component: PreagendamentoComponent;
  let fixture: ComponentFixture<PreagendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreagendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreagendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
