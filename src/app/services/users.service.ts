import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import UserResponseInterface, { User } from '@interfaces/request-response.interface';
import { Observable, delay, map } from 'rxjs';

interface State {
  users : User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  #state = signal<State>({
    loading: true,
    users: []
  });
  private usersUrl : string = "https://reqres.in/api/users";
  public users              = computed(() => this.#state().users);
  public loading            = computed(() => this.#state().loading);

  constructor() {
    this.http.get<UserResponseInterface>(this.usersUrl)
      .pipe( delay(1500) )
      .subscribe( res => {
        this.#state.set({
          loading: false,
          users: res.data
        });
      });
  }

  public getUserById(id : string) : any {
    return this.http.get<UserResponseInterface>(`${this.usersUrl}/${id}`)
      .pipe( 
        delay(1500),
        map( res => res.data )
       );
  }

}
