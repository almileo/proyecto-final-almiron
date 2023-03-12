import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';


@NgModule({
  declarations: [  
    HomeComponent, 
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HomeComponent, 
    NotFoundComponent
  ]
})
export class SharedModule { }
