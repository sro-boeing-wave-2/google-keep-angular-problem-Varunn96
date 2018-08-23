import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
import { INote } from '../../interfaces/Note';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  giventitle='';
  note;
  notenullcase=false;
  error;
  async onClick(title) {
    this.giventitle = title;
    await this.service.SearchByTitle(this.giventitle)
              .subscribe(data => this.note = data,
                         error => this.error = error)
    // if(this.error != null)
    // {
    //   this.notenullcase = true;
    //   console.log(this.error);
    // }
    // else
    // {
    //   this.notenullcase = false;
    //   console.log(this.notenullcase);
    // }
  }
  constructor(private router: Router, private service: NotesService) { }

  ngOnInit() {

  }

  onClickEdit(note) {
    this.router.navigate(['/notes/edit', note.id]);
  }
  onClickDelete(note) {
    this.router.navigate(['/notes/delete', note.id]);
  }

}
