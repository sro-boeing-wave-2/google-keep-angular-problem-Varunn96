import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { INote } from '../interfaces/Note';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public _url: string = 'https://localhost:44381/api/notes';

  constructor(private http: HttpClient) { }

  GetAllNotes() {
    return this.http.get<INote[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  SearchByTitle(title) {
    return this.http.get<INote>((this._url) + '/title?title=' + title)
                    .pipe(catchError(this.errorHandler));
  }

  GetById(id) {
    console.log(id);
    return this.http.get<INote>((this._url) + '/' + id)
                    .pipe(catchError(this.errorHandler));
  }

  GetByLabel(label) {
    return this.http.get<INote[]>((this._url) + '/label?label=' + label)
                    .pipe(catchError(this.errorHandler));
  }

  GetPinnedNotes(pinStatus) {
    return this.http.get<INote[]>((this._url) + '/pinstatus?pinstatus=' + pinStatus)
                    .pipe(catchError(this.errorHandler));
  }

  AddNewNote(newNote) {
    console.log("post");
    return this.http.post(this._url, newNote)
                    .pipe(catchError(this.errorHandler));
  }

  EditExistingNote(id, editedNote) {
    return this.http.put((this._url + '/' + id), editedNote)
                    .pipe(catchError(this.errorHandler));
  }

  DeleteNote(id) {
    console.log("delete");
    return this.http.delete((this._url) + '/' + id)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
