import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicForCreation } from 'src/models/TopicForCreation';
import { Observable } from 'rxjs';
import { TopicForRetrieval } from 'src/models/TopicForRetrieval';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private baseUrl = 'http://localhost:28924/api/topic';

  constructor(private http: HttpClient) {}

  createTopic(model: TopicForCreation) {
    return this.http.post(this.baseUrl, model);
  }

  getAll(): Observable<TopicForRetrieval[]> {
    return this.http.get<TopicForRetrieval[]>(this.baseUrl);
  }

  deleteTopic(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
