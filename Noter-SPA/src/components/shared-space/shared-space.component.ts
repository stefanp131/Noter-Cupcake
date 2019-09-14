import { Component, OnInit } from '@angular/core';
import { TopicForRetrieval } from 'src/models/TopicForRetrieval';
import { TopicsService } from 'src/services/topics.service';

@Component({
  selector: 'app-shared-space',
  templateUrl: './shared-space.component.html',
  styleUrls: ['./shared-space.component.scss']
})
export class SharedSpaceComponent implements OnInit {
  currentPage = 1;
  pageSize = 12;
  topics: TopicForRetrieval[];
  searchItemQuery = '';
  disabled = false;

  constructor(private topicsService: TopicsService) {}

  ngOnInit() {
    this.topicsService
      .getAll(this.currentPage, this.pageSize, this.searchItemQuery)
      .subscribe(response => (this.topics = response));
  }

  previous() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.refreshList();
    }
  }

  next() {
    if (this.topics.length === this.pageSize) {
      this.currentPage++;
      this.refreshList();
    }
  }

  refreshList() {
    this.topicsService
      .getAll(this.currentPage, this.pageSize, this.searchItemQuery)
      .subscribe(response => {
        this.topics = response;
        this.disabled = false;
      });
  }
}
