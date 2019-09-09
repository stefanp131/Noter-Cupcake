import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { NoteForRetrieval } from 'src/models/NoteForRetrieval';

@Component({
  selector: 'app-topic-content',
  templateUrl: './topic-content.component.html',
  styleUrls: ['./topic-content.component.scss']
})
export class TopicContentComponent implements OnInit {
  topicId: string;
  notes: NoteForRetrieval[];

  constructor(private notesService: NotesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.topicId = this.route.snapshot.paramMap.get('id');
    this.notesService.getNotesForTopic(this.topicId).subscribe(response => this.notes = response);
  }

  refresh() {
    this.notesService.getNotesForTopic(this.topicId).subscribe(response => this.notes = response);
  }
}
