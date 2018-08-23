import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  noteForm = this.fb.group({
    Title: [''],
    Text: [''],
    isPinned: [false],
    CheckList: this.fb.array([
      this.fb.group({
        checkListTitle: [''],
        checkListStatus: [false]
      })
    ]),
    Labels: this.fb.array([
      this.fb.group({
        labelName: ['']
      })
    ])
  });

  get CheckList() {
    return this.noteForm.get('CheckList') as FormArray;
  }

  get Labels() {
    return this.noteForm.get('Labels') as FormArray;
  }

  addCheckList() {
    this.CheckList.push(this.fb.group({
      checkListTitle: [''],
      checkListStatus: [false]
    }));
  }

  addLabel() {
    this.Labels.push(this.fb.group({
      labelName: ['']
    }));
  }

  async onSubmit() {
    console.log("I'm here");
    await this.service.AddNewNote(this.noteForm.value).subscribe();
  }


  constructor(private fb: FormBuilder, private service: NotesService) { }

  ngOnInit() {
  }

}
