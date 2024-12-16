import { UpperCasePipe } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, updateDoc, getDocs, getDoc, query } from '@firebase/firestore';
import { doc } from '@firebase/firestore/lite';
import { catchError, Observable, throwError,tap } from 'rxjs';
import { authStateService } from '../../shared/data-acces/auth-state.service';
import { where } from '@firebase/firestore';
export interface Perfil{
  id: string; // ID único del documento
  nombres: string; // Nombres del usuario
  apellido: string; // Apellido del usuario
  escuelaProfesional: string; // Escuela profesional a la que pertenece
  anioCarrera: number; // Año de carrera (por ejemplo, 1, 2, 3)
  fotoUrl?: string; // URL de la foto de perfil (opcional)

}
export type PerfilCreate = Omit<Perfil, 'id'>

const PATH = 'perfil';

@Injectable()
export class PerfilService {

private _firestore = inject(Firestore);
private _collection = collection(this._firestore, PATH);
private _authState = inject(authStateService)
private _query =query(
  this._collection, 
  where('userId', '==',this._authState.currentUser?.uid)
);  
loading = signal<boolean>(true); 

getPerfil = toSignal(
  (collectionData(this._query, { idField: 'id' }) as Observable<Perfil[]>).pipe(
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


constructor(){
console.log(this._authState.currentUser);
}


getperfi(id: string)
{
  const docRef = doc(this._collection, id);
return getDoc(docRef);
}

create(perfil: PerfilCreate){
  return addDoc(this._collection, {...perfil, userId:this._authState.currentUser?.uid,});
}
update(perfil: PerfilCreate, id: string) {
  const docRef = doc(this._collection, id);
  return updateDoc(docRef, {
    ...perfil, userId: this._authState.currentUser?.uid, 
  });
}
//...task,
//userId: this._authState.currentUser?.uid,
//});
//}


}
