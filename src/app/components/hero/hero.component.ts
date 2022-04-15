import { Component } from '@angular/core';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  private heroService: EntityCollectionService<Hero>;

  constructor(
    entityService: EntityServices
    ) {
      this.heroService = entityService.getEntityCollectionService<Hero>('Hero');
    }

}
