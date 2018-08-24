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
  recievedId;
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
      this.recievedId = parseInt(params.get('id'));
      //console.log(this.note);
    });
    this.GetNote(this.recievedId).then((data)=> {
      this.note = data;
      console.log(this.note);
      console.log('hi');
    }
    );

  }

  GetNote(id: number) {
    return new Promise((resolve, reject) => {
      this._noteservice.GetById(id).subscribe(data => resolve(data))
    });
  }

  preProcessData(jsonObject) {
    let temp = jsonObject;
    if(temp["title"] == ""){
      temp["title"] = this.note['title'];
    }
    if(temp["text"] == ""){
      temp["text"] = this.note['text'];
    }
    if(temp["isPinned"] == false){
      temp["isPinned"] = this.note['isPinned'];
    }
    if(temp['CheckList'][0]['checkListTitle'] == ""){
      delete temp['CheckList'];
    }
    if(temp['Labels'][0]['labelName'] == ""){
      delete temp['Labels'];
    }

    return temp;
  }

  onSubmit() {
    //console.log(JSON.stringify(this.noteForm.value));
    this.noteForm.value['id'] = this.recievedId;
    this.recievedNote = this.noteForm.value;
    let temp = this.preProcessData(this.noteForm.value);
    console.log('work');
    this._noteservice.EditExistingNote(this.recievedId, temp).subscribe(() => this.router.navigate(["/notes"])
  );

  }
}

