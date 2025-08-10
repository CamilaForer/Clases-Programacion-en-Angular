import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from '../hijo/hijo';

// ========================================
// COMPONENTE PADRE - Ejemplo Simple
// ========================================

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [CommonModule, FormsModule, HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class PadreComponent {
  // ========================================
  // @Input: Datos que se envían al hijo
  // ========================================
  
  mensajeParaElHijo: string = '¡Hola hijo!';
  contadorDelPadre: number = 0;
  
  // ========================================
  // @Output: Datos que recibe del hijo
  // ========================================
  
  mensajeDelHijo: string = 'Esperando mensaje...';
  
  // ========================================
  // MÉTODOS: Manejan eventos del hijo
  // ========================================
  
  recibirMensajeDelHijo(mensaje: string) {
    this.mensajeDelHijo = mensaje;
  }
  
  incrementarContador() {
    this.contadorDelPadre++;
  }
}
