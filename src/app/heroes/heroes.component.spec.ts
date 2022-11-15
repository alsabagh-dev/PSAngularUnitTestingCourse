import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let Heroes;
  let mockHeroService;

  beforeEach(() => {
    Heroes = [
      { id: 1, name: "super aeeh", strength: 5 },
      { id: 2, name: "super henady", strength: 15 },
      { id: 3, name: "sal3at", strength: 35 },
    ];
    // we need to mock HeroService
    // (no two units - no http call)
    mockHeroService = jasmine.createSpyObj([
      "addHero",
      "getHeroes",
      "deleteHero",
    ]);

    component = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockHeroService.deleteHero.and.returnValue(of(true));
    });

    // state test
    it("should remove the hero from the heroes list", () => {
      // arrange

      component.heroes = Heroes;

      // act
      component.delete(Heroes[2]);

      // assert
      expect(component.heroes.length).toBe(2);
      expect(
        component.heroes.find((hero) => hero.id === Heroes[2].id)
      ).toBeUndefined();
    });

    // interaction test
    it("should call deleteHero with correct hero", () => {
      // arrange
      component.heroes = Heroes;
      // act
      component.delete(Heroes[2]);
      // assert
      expect(mockHeroService.deleteHero).toHaveBeenCalledOnceWith(Heroes[2]);
    });
  });

  describe("add", () => {
    const ELZoz = "El-zoz";
    beforeEach(() => {
      const Hero = { id: 3, name: ELZoz, strength: 11 };
      mockHeroService.addHero.and.returnValue(of(Hero));
    });

    // state test
    it("should add the hero to the heroes list", () => {
      // arrange
      component.heroes = Heroes;
      // act
      component.add(ELZoz);

      // assert
      expect(component.heroes.length).toBe(4);
      expect(component.heroes.find((hero) => hero.name === ELZoz).name).toEqual(
        ELZoz
      );
    });

    // interaction test
    it("should call addHero with correct hero", () => {
      // arrange
      component.heroes = Heroes;
      // act
      component.add(ELZoz);
      // assert
      expect(mockHeroService.addHero).toHaveBeenCalledOnceWith({
        name: ELZoz,
        strength: 11,
      });
    });
  });

  describe("getHeroes", () => {
    beforeEach(() => {
      // arrange
      mockHeroService.getHeroes.and.returnValue(of(Heroes));
    });

    it("should set heroes array", () => {
      // act
      component.getHeroes();
      // assert
      expect(component.heroes.length).toBe(3);
    });
    it("should call getHeros", () => {
      // act
      component.getHeroes();
      // assert
      expect(mockHeroService.getHeroes).toHaveBeenCalled();
    });
  });
});
