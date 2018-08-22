import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NotesService } from './notes.service';
import { HttpClientModule } from '@angular/common/http';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { DeleteNoteComponent } from './notes/delete-note/delete-note.component';
import { NewNoteComponent } from './Notes/new-note/new-note.component';
import { DisplayNotesComponent } from './Notes/display-notes/display-notes.component';
import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditNoteComponent,
    DeleteNoteComponent,
    NewNoteComponent,
    DisplayNotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
