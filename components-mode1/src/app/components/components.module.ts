import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeComComponent } from './mode-com/mode-com.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    ModeComComponent,
    HijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModeComComponent,
    HijoComponent
  ]
})
export class ComponentsModule { }
