import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesordenadaComponent } from './lista-desordenada.component';

describe('ListaDesordenadaComponent', () => {
  let component: ListaDesordenadaComponent;
  let fixture: ComponentFixture<ListaDesordenadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDesordenadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDesordenadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
