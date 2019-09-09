import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TopicForRetrieval } from 'src/models/TopicForRetrieval';
import { TopicsService } from 'src/services/topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() topic: TopicForRetrieval;
  @Output() topicDeleted: EventEmitter<any> = new EventEmitter<any>();
  currentId: string;

  constructor(private topicsService: TopicsService) {
    // tslint:disable-next-line: no-string-literal
    this.currentId = JSON.parse(localStorage.getItem('userInfo'))['userId'];
  }

  ngOnInit() {
  }

  delete() {
    if (this.topic.createdById === this.currentId) {
      this.topicsService.deleteTopic(this.topic.id).subscribe(() => this.topicDeleted.emit());
    }
  }
}
