import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { TextInputComponent } from './textinput/textinput.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    TableComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    TableComponent,
    TextInputComponent
  ]
})
export class ComponentModule { }