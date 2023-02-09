import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  constructor() { }

  ngOnInit(): void {
  }

  public login(){
    console.log('LOGIN');
  }

  public logout(){
    console.log('LOGOUT');
  }

}
