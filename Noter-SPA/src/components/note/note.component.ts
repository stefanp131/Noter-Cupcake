import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteForRetrieval } from 'src/models/NoteForRetrieval';
import { NotesService } from 'src/services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  currentId: string;

  @Input() note: NoteForRetrieval;
  @Output() noteDeleted: EventEmitter<any> = new EventEmitter<any>();
  constructor(private notesService: NotesService) {
    // tslint:disable-next-line: no-string-literal
    this.currentId = JSON.parse(localStorage.getItem('userInfo'))['userId'];
  }

  ngOnInit() {
  }

  delete() {
    if (this.note.createdById === this.currentId) {
      this.notesService.deleteNote(this.note.topicId, this.note.id).subscribe(() => this.noteDeleted.emit());
    }
  }
}
