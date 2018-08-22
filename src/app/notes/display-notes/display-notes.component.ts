import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { INote } from '../../../interfaces/Note';
import { NotesService } from '../../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  notes: INote[];

  constructor(private service: NotesService, private router: Router) { }

  ngOnInit() {
    return this.service.GetAllNotes()
               .subscribe(data => this.notes = data);
  }

  onClickEdit(note) {
    this.router.navigate(['/notes/edit', note.id]);
  }
  onClickDelete(note) {
    this.router.navigate(['/notes/delete', note.id]);
  }

}
