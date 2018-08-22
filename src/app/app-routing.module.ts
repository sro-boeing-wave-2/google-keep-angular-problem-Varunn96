import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { DeleteNoteComponent } from './notes/delete-note/delete-note.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { PinnedNotesComponent } from './pinned-notes/pinned-notes.component';
import { LabelsComponent } from './labels/labels.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full'},
  { path: 'notes', component: NotesComponent},
  { path: 'notes/delete/:id', component: DeleteNoteComponent},
  { path: 'notes/edit/:id', component: EditNoteComponent},
  { path: 'pinnednotes', component: PinnedNotesComponent},
  { path: 'labels', component: LabelsComponent},
  { path: 'search', component: SearchComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NotesComponent, EditNoteComponent, PinnedNotesComponent, LabelsComponent, SearchComponent, PageNotFoundComponent, DeleteNoteComponent]
