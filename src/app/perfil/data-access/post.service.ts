import { UpperCasePipe } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, updateDoc, getDocs, getDoc, query } from '@firebase/firestore';
import { doc } from '@firebase/firestore/lite';
import { catchError, Observable, throwError,tap } from 'rxjs';
import { authStateService } from '../../shared/data-acces/auth-state.service';
import { where } from '@firebase/firestore';
export interface Post{
  id: string; // ID único del documento
  titulo: string;
 texto: string;
 foto: string;

}
export type PostCreate = Omit<Post, 'id'>

const PATH = 'posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {

private _firestore = inject(Firestore);
private _collection = collection(this._firestore, PATH);

 
loading = signal<boolean>(true); 

getPosts = toSignal(
  (collectionData(this._collection, { idField: 'id' }) as Observable<Post[]>).pipe(
    tap(() => {
      this.loading.set(false);
    }),
    catchError((error) => {
      this.loading.set(false);
      return throwError(() => error);
    })
  ),
  {
    initialValue: [],
  }
);




create(post: PostCreate){
  return addDoc(this._collection, post);
}


  

}
