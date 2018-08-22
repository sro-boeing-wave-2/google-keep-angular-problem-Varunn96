import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotesService } from '../../notes.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})

export class EditNoteComponent implements OnInit {
  selectedId;
  note;
  noteForm = this.fb.group({
    Title: [''],
    PlainText: [''],
    PinStatus: [false],
    CheckList: this.fb.array([
       this.fb.group({
        CheckListData: [''],
        ChickListStatus: [false]
      })
    ]),
    Labels: this.fb.array([
      this.fb.group({
        LabelData: ['']
      })
    ])
  });

  formSubmittedValues;

  get CheckList() {
    return this.noteForm.get('CheckList') as FormArray;
  }

  get Labels() {
    return this.noteForm.get('Labels') as FormArray;
  }

  addCheckList() {
    this.CheckList.push(this.fb.group({
      CheckListData: [''],
      ChickListStatus: [false]
    }));
  }

  addLabel() {
    this.Labels.push(this.fb.group({
      LabelData: ['']
    }));
  }

  constructor(private router: Router, private activatedroute: ActivatedRoute, private _noteservice: NotesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
      //console.log(this.note);
    });
    this.GetNote(this.selectedId).then((data)=> {
      this.note = data;
      console.log(this.note);
    }
    );

  }

  GetNote(id: number) {
    return new Promise((resolve, reject) => {
      this._noteservice.GetById(id).subscribe(data => resolve(data))
    });
  }


}
