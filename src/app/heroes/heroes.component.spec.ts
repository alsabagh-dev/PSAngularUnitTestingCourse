import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "super eeeh", strength: 5 },
      { id: 2, name: "super henady", strength: 15 },
      { id: 3, name: "sal3at", strength: 35 },
    ];

    mockHeroService = jasmine.createSpyObj([
      "deleteHero",
      "addHero",
      "getHeroes",
    ]);
    component = new HeroesComponent(mockHeroService);
    component.heroes = HEROES;
  });

  describe("delete", () => {
    beforeEach(() => {
      mockHeroService.deleteHero.and.returnValue(of(true));
    });

    // state test
    it("should remove the hero from the heroes list", () => {
      // act
      component.delete(HEROES[2]);

      // assert
      expect(component.heroes.length).toEqual(2);
      expect(
        component.heroes.find((hero) => hero.id === HEROES[2].id)
      ).toBeUndefined();
    });

    // interaction test
    it("should call deleteHero with correct hero", () => {
      // act
      component.delete(HEROES[2]);
      //assert
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });

  describe("add", () => {
    let Elzoz = "Abo El-zoz";

    beforeEach(() => {
      const hero = { id: 25, name: Elzoz, strength: 11 };
      mockHeroService.addHero.and.returnValue(of(hero));
    });

    // state test
    it("should add the hero to the heroes list", () => {
      // act
      component.add(Elzoz);
      //assert
      expect(component.heroes.length).toBe(4);
      expect(component.heroes.find((hero) => hero.name === Elzoz).name).toEqual(
        Elzoz
      );
    });

    // interaction test
    it("should call addHero with correct hero", () => {
      // act
      component.add(Elzoz);
      //assert
      expect(mockHeroService.addHero).toHaveBeenCalledWith({name:Elzoz, strength:11});
    });
  });

  // Home work
  // test getHeros
});
