import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ========================================
// CONCEPTOS BÁSICOS DE ANGULAR - COMPONENTE
// ========================================

// @Component es un DECORADOR que define metadatos del componente
// Los decoradores son funciones que modifican clases, propiedades o métodos
@Component({
  selector: 'app-root', // Selector CSS para usar este componente en otros templates
  imports: [CommonModule, FormsModule], // Módulos necesarios para las directivas
  templateUrl: './app.html', // Archivo HTML del template
  styleUrl: './app.css' // Archivo CSS para estilos
})
export class App {
  // ========================================
  // PROPIEDADES DEL COMPONENTE
  // Estas variables están disponibles en el template HTML
  // ========================================
  
  // 1. INTERPOLACIÓN: Esta propiedad se muestra en el template con {{saludo}}
  saludo = 'Holaaaa este es mi primer proyecto en Angular';
  
  // 2. PROPERTY BINDING: Estas propiedades se usan con [ngClass] y [ngStyle]
  // ngClass aplica clases CSS condicionalmente
  esActivo: boolean = true; // Si es true, aplica clase 'activo'
  tieneError: boolean = false; // Si es true, aplica clase 'error'
  
  // ngStyle aplica estilos CSS inline dinámicamente
  color: string = 'blue'; // Color del texto
  tamanoTexto: string = '20px'; // Tamaño de la fuente
  
  // 3. DIRECTIVAS ESTRUCTURALES: Para *ngIf y @if
  usuarioActivo: boolean = true; // Controla si el usuario está activo
}
