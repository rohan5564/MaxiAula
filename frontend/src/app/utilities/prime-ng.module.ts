import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    CalendarModule
    
  ],
})
export class PrimeNgModule { }
