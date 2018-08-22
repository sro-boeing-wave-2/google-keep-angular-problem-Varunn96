import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinned-notes',
  templateUrl: '../notes/display-notes/display-notes.component.html',
  styleUrls: ['../notes/display-notes/display-notes.component.css']
})
export class PinnedNotesComponent implements OnInit {

  notes;

  constructor(private router: Router, private service: NotesService) { }

  ngOnInit() {
    return this.service.GetPinnedNotes(true).subscribe(data => this.notes = data)
  }

  onClickEdit(note) {
    this.router.navigate(['/notes/edit', note.id]);
  }

  onClickDelete(note) {
    this.router.navigate(['/notes/delete', note.id]);
  }

}
