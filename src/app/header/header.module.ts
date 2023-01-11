import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavartComponent } from './navart/navart.component';
import { BodyModule } from '../body/body.module';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    NavartComponent
  ],
  imports: [
    CommonModule,
    BodyModule,
    RouterLink,
    RouterLinkActive
   
  ],
  exports:[
    NavartComponent
  ]
})
export class HeaderModule { }
