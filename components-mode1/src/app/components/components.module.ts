import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeComComponent } from './mode-com/mode-com.component';
import { HijoComponent } from './hijo/hijo.component';
import { FilterPipe } from "../pipes/filter.pipe";
import { ImpuraPipe } from "../pipes/impura.pipe";




@NgModule({
  declarations: [
    ModeComComponent,
    HijoComponent,
  FilterPipe,
  ImpuraPipe
  ],
  imports: [
    CommonModule,
  
  ],
  exports: [
    ModeComComponent,
    HijoComponent,
   
  ]
})
export class ComponentsModule { }
