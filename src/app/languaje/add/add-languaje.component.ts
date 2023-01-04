import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-languaje',
  templateUrl: './add-languaje.component.html',
  styleUrls: ['./add-languaje.component.scss']
})
export class AddLanguajeComponent implements OnInit {
  web = '';
  movil = '';
  name = '';
  desktop = '';
  plataforma = "";
  pr = "";
  context = "";
  constructor() { }
  ngOnInit(): void {
  }

  add(): void {
    console.log(this.name)
    console.log(this.pr.valueOf())
    console.log(this.context)
    console.log(this.movil.valueOf())
  }
}
