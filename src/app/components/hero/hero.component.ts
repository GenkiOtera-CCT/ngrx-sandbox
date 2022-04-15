import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  private heroService: EntityCollectionService<Hero>;
  loading$: Observable<boolean>;
  heroes$: Observable<Hero[]>;

  isEditing = false;
  hero: Hero;

  constructor(
    entityService: EntityServices
  ) {
    this.heroService = entityService.getEntityCollectionService<Hero>('Hero');
    this.heroes$ = this.heroService.entities$;
    this.loading$ = this.heroService.loading$;
  }

  ngOnInit(){
    this.heroService.getAll()
      .subscribe(
        () => console.log('Get Entity'),
        err => console.error(`Failed to get the entity: ${err}`)
      );
  }

  deleteHero(id: number){
    const hero = <Hero>{ id: id };

    this.heroService.delete(hero)
      .subscribe(
        () => console.log('Deleted entity'),
        err => console.error(`Failed to delete the entity: ${err}`)
      );
  }

  beginEdit(id?: number, name?: string) {
    this.isEditing = true;
    this.hero = <Hero>{ id, name };
  }

  endEdit() {
    this.isEditing = false;
    this.hero = <Hero>{}
  }

  addHero(hero: Hero) {
    this.heroService.add(hero)
      .subscribe(
        () => console.log('エンティティを追加しました'),
        err => console.error(`エンティティの追加に失敗しました: ${err}`),
        () => this.endEdit());
  }
}
