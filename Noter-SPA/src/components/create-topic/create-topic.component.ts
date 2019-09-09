import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TopicsService } from 'src/services/topics.service';
import { TopicForCreation } from 'src/models/TopicForCreation';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  error: string;
  title: string;
  description: string;

  @Output() topicCreated: EventEmitter<any> = new EventEmitter<any>();

  constructor(private topicsService: TopicsService) {}

  ngOnInit() {}

  create() {
    const userInfoString = localStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoString);
    const topic: TopicForCreation = {
      title: this.title,
      description: this.description,
      // tslint:disable-next-line: no-string-literal
      createdById: userInfo['userId']
    };

    this.topicsService.createTopic(topic).subscribe(() => this.topicCreated.emit());
  }
}
