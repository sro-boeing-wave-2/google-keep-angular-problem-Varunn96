import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['../search/search.component.css']
})
export class LabelsComponent implements OnInit {

  givenlabel='';
  notes;
  onClick(label) {
    this.givenlabel = label;
    this.service.GetByLabel(this.givenlabel)
        .subscribe(data => this.notes = data);
  }
  constructor(private service: NotesService, private router: Router) { }

  ngOnInit() {

  }

  onClickEdit(note) {
    this.router.navigate(['/notes/edit', note.id]);
  }
  onClickDelete(note) {
    this.router.navigate(['/notes/delete', note.id]);
  }
}
