import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = "Sin Nombre";
  @Output() CambioNombreHijo = new EventEmitter<string>();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  cambiarNombre(){
    this.nombreHijo = "sebastian Londoño";
    this.CambioNombreHijo.emit(this.nombreHijo);
    this.dataService.nombreUsuario = this.nombreHijo;
  }

}
