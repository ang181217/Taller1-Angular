import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './capicua.component.html',
  styleUrls: ['./capicua.component.scss']
})
export class CapicuaComponent {
  texto!: string;
  resultado!: string;

  verificarCapicua() {
    if (this.texto !== undefined) {
      const texto = this.texto.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
      const reversedTexto = texto.split('').reverse().join('');
      if (texto === reversedTexto) {
        this.resultado = `"${this.texto}" es capicúa.`;
      } else {
        this.resultado = `"${this.texto}" no es capicúa.`;
      }
    } else {
      this.resultado = 'Ingrese un número o texto para verificar.';
    }
  }
}
