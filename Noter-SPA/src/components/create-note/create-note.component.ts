import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotesService } from 'src/services/notes.service';
import { Route, ActivatedRoute } from '@angular/router';
import { NoteForCreation } from 'src/models/NoteForCreation';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  error: string;
  title: string;
  description: string;
  topicId: string;

  @Output() noteCreated: EventEmitter<any> = new EventEmitter<any>();

  constructor(private notesService: NotesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.topicId = this.route.snapshot.paramMap.get('id');
  }

  create() {
    const userInfoString = localStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoString);
    const model: NoteForCreation = {
      title: this.title,
      description: this.description,
      // tslint:disable-next-line: no-string-literal
      createdById: userInfo['userId']
    };

    this.notesService.createNote(this.topicId, model).subscribe(() => {
      this.error = '';
      this.noteCreated.emit();
    });
  }

}
