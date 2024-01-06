import { ActivatedRoute } from '@angular/router';
import { Component, inject, signal, computed } from '@angular/core';
import { switchMap } from 'rxjs';
import { toSignal } from "@angular/core/rxjs-interop"

import { SinglUserResponseInterface, User } from '@interfaces/request-response.interface';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <shared-title [title]="titleLabel()" />
    
    @if (user()) {
      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

        <div>
          <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
          <p>{{ user()?.email }}</p>
        </div>
      </section>
    } @else {
      <p class="font-bold text-3xl text-center">Cargando información...</p>
    }
  `
})
export default class UserComponent {
  
  public pageTitle : string = "Single User Page"
  private route             = inject( ActivatedRoute );
  private userService       = inject( UsersService );
  //public user               = signal<User | undefined>(undefined);
  public user               = toSignal<any>(
                                        this.route.params.pipe<any>(
                                          switchMap( ({ id }) => this.userService.getUserById(id))
                                        )
                                      );
  public titleLabel         = computed(() => {
    if(this.user()) {
      return `Información del usuario: ${this.user()!.first_name} ${this.user()?.last_name}`
    }

    return 'Información del usuario';
  })

  constructor() {
    this.route.params.subscribe( params => {
      console.log({ params });
    });
    console.log({user: this.user()})
  }
}
