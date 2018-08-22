import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  givenlabel='';
  note;
  onClick(label) {
    this.givenlabel = label;
    this.service.SearchByTitle(this.givenlabel)
        .subscribe(data => this.note = data);
  }
  constructor(private service: NotesService) { }

  ngOnInit() {

  }
}
