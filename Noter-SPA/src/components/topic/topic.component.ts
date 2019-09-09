import { Component, OnInit, Input } from '@angular/core';
import { TopicForRetrieval } from 'src/models/TopicForRetrieval';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() topic: TopicForRetrieval;
  constructor() { }

  ngOnInit() {
  }
}
