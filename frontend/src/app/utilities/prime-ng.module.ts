// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    CalendarModule,
    ToolbarModule,
    TableModule,
    DropdownModule,
    DialogModule,
    InputNumberModule,
    EditorModule
  ],
})
export class PrimeNgModule { }
