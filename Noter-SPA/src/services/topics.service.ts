import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicForCreation } from 'src/models/TopicForCreation';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private baseUrl = 'http://localhost:28924/api/topic';

  constructor(private http: HttpClient) {}

  createTopic(model: TopicForCreation) {
    return this.http.post(this.baseUrl, model);
  }
}
