import { Component,  } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  model = new User('Johan','Paniagua',1234,'algo','algo2','epa',123, 'pending');
  submitted = false;
  onSubmit(){ this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
