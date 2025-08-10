import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ========================================
// COMPONENTE HIJO - Ejemplo Simple
// ========================================

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class HijoComponent {
  // ========================================
  // @Input: Recibe datos del padre
  // ========================================
  
  @Input() mensajeDelPadre: string = 'Mensaje por defecto';
  @Input() contadorDelPadre: number = 0;
  
  // ========================================
  // @Output: Envía eventos al padre
  // ========================================
  
  @Output() mensajeParaElPadre = new EventEmitter<string>();
  
  // ========================================
  // Propiedades locales
  // ========================================
  
  nuevoMensaje: string = '';
  
  // ========================================
  // MÉTODOS
  // ========================================
  
  enviarMensajeAlPadre() {
    if (this.nuevoMensaje.trim()) {
      this.mensajeParaElPadre.emit(this.nuevoMensaje);
      this.nuevoMensaje = '';
    }
  }
}
