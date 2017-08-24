"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var heroes_1 = require("./heroes");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 4';
        this.title = 'Tour of Heroes';
        // hero = 'Mr White';
        // hero: Hero = {
        //   id: 1,
        //   name: 'Mr White'
        // };
        this.heroes = heroes_1.HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './heroMainTemplate.html',
        styleUrls: ['./heroDisplay.Style.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map