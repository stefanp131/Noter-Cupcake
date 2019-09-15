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
  topics: TopicForRetrieval[] = [];
  searchItemQuery = '';
  disabled = false;
  totalPages = 1;

  constructor(private topicsService: TopicsService) {}

  ngOnInit() {
    this.topicsService
      .getAll(this.currentPage, this.pageSize, this.searchItemQuery)
      .subscribe(response => {
        // tslint:disable-next-line: no-string-literal
        this.topics = response['topicsForRetrieval'];
        // tslint:disable-next-line: no-string-literal
        this.totalPages = response['totalPages'];
      });
  }

  previous() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.refreshList();
    }
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.refreshList();
    }
  }

  refreshList() {

    this.topicsService
      .getAll(this.currentPage, this.pageSize, this.searchItemQuery)
      .subscribe(response => {
        // tslint:disable-next-line: no-string-literal
        this.topics = response['topicsForRetrieval'];
        // tslint:disable-next-line: no-string-literal
        this.totalPages = response['totalPages'];
        console.log((this.totalPages));

        this.disabled = false;
      });
  }
}
