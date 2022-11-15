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
});
