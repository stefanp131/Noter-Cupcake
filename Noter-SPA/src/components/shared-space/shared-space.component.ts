import { Component, OnInit } from '@angular/core';
import { TopicForRetrieval } from 'src/models/TopicForRetrieval';
import { TopicsService } from 'src/services/topics.service';

@Component({
  selector: 'app-shared-space',
  templateUrl: './shared-space.component.html',
  styleUrls: ['./shared-space.component.scss']
})
export class SharedSpaceComponent implements OnInit {
  topics: TopicForRetrieval[];

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topicsService.getAll().subscribe(response => this.topics = response);
  }

  refreshList() {
    this.topicsService.getAll().subscribe(response => this.topics = response);
  }
}
