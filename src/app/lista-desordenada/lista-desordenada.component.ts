import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona';
import { ServicioPersona } from '../Service/servicio-persona';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'lista-desordenada',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './lista-desordenada.component.html',
  styleUrl: './lista-desordenada.component.css'
})
export class ListaDesordenadaComponent {
  @ViewChild('lista')miLista!:ElementRef;
  public hide: boolean = false;
  public estilo: boolean =false;
  public copiaLista: Persona[];
  private servicio: ServicioPersona;

  constructor(){
    this.servicio = new ServicioPersona();
    this.copiaLista = this.servicio.getAllPersonas();
  }

  public toggle(){
    this.hide=!this.hide;
  }

  public cambioEstilo(){
    this.estilo=!this.estilo;

    if (this.estilo){
      this.miLista.nativeElement.classList.add('aplicar-estilo');
    }else{
      this.miLista.nativeElement.classList.remove('aplicar-estilo');
    }
    
  }

}
