import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';

// Routes Home Component
const contactRoutes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes),
    SharedModule
  ],
  exports: [],
  providers: []
})
export class ContactModule {}