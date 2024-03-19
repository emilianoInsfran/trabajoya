import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `

  `,
  styleUrls: ['./warning-alert.component.scss'],
})
export class WarningAlertComponent {
  @Input() mensaje: string = '';
  @Output() aceptar = new EventEmitter<void>();
  @Output() cancelarAlerta = new EventEmitter<void>();

  constructor() {}

  onAceptarClick() {
    this.aceptar.emit();
  }

  cancelar() {
    this.cancelarAlerta.emit();
  }
}