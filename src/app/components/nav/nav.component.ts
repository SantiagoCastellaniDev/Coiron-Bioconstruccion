import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  navegar(seccion: string) {
    window.location.hash = '';
    window.location.hash = seccion;   
  }


}
