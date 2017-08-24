import { Component } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from './hero';
import { HEROES } from './heroes';

@Component({
  selector: 'my-app',
  templateUrl: './heroMainTemplate.html',
  styleUrls: ['./heroDisplay.Style.css']
  // imports: [NgbModule]
  // template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent {
  name = 'Angular 4';
  title = 'Tour of Heroes';
  // hero = 'Mr White';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Mr White'
  // };
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
