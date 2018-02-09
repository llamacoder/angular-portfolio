import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/Project';

@Injectable()
export class ProjectService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  projects: Observable<Project[]>;
  project: Observable<Project>;

  constructor(private afs: AngularFirestore) {
    this.projectsCollection = this.afs.collection('projects', ref => ref.orderBy('order', 'asc'));
  }

  getProjects(): Observable<Project[]> {
    this.projects = this.projectsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Project;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.projects;
  }

  getProject(id: string): Observable<Project> {
    this.projectDoc = this.afs.doc<Project>(`projects/${id}`);
    this.project = this.projectDoc.snapshotChanges().map(action => {
      if(action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Project;
        data.id = action.payload.id;
        return data;
      }
    });

    return this.project;
  }


}
