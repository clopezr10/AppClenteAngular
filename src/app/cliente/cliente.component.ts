import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  crearCliente: boolean = false;
  cliente: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
