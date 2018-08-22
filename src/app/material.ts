import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatDividerModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatGridListModule, MatMenuModule, MatCardModule],
  exports: [MatButtonModule, MatDividerModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatGridListModule, MatMenuModule, MatCardModule],
})
export class MaterialModule { }
