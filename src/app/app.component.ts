import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDesordenadaComponent } from './lista-desordenada/lista-desordenada.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListaDesordenadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListaPersona';
}
