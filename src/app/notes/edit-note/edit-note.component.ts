import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotesService } from '../../notes.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['../new-note/new-note.component.css']
})

export class EditNoteComponent implements OnInit {
  selectedId;
  note;
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

  recievedNote;

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

  preProcessData(jsonObject) {
    let copy = jsonObject;
    if(copy["Title"] == ""){
      console.log("HHHHHH");
      delete copy["Title"];
    }
    if(copy["Text"] == ""){
      delete copy["Text"];
    }
    if(copy["isPinned"] == false){
      delete copy["isPinned"];
    }
    if(copy['CheckList'][0]['checkListTitle'] == ""){
      delete copy['CheckList'];
    }
    if(copy['Labels'][0]['labelName'] == ""){
      delete copy['Labels'];
    }

    return copy;
  }

  onSubmit() {
    //console.log(JSON.stringify(this.noteForm.value));
    this.noteForm.value['id'] = this.selectedId;
    this.recievedNote = this.noteForm.value;
    let copy = this.preProcessData(this.noteForm.value);
    console.log(copy);
    this._noteservice.EditExistingNote(this.selectedId, copy).subscribe();
    this.router.navigate(["/notes"]);
  }
}
