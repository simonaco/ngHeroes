import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes:FirebaseListObservable<any[]>;
  constructor(af:AngularFire){
    this.heroes = af.database.list("/heroes");
  }

  voteUp(hero):void {
    this.heroes.update(hero, {rating:hero.rating+1});
  }

  voteDown(hero):void {
    this.heroes.update(hero, {rating:hero.rating-1});
  }
}
