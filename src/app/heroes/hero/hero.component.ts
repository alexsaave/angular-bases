import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 22;

  get CapitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name}  -  ${this.age}`;
  }

  changeHeroe(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 50;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 22;
  }
}
