import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {

  noteid;
  constructor(private service: NotesService, private route : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.noteid = id;
    this.service.DeleteNote(this.noteid).subscribe();
  }

}
