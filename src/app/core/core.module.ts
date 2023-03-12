import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    // SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    // SidebarComponent,
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class CoreModule { }
