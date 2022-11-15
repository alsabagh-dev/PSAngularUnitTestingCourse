// import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component";

describe('HeroComponent (shallow tests)', () => {
  // a wrapper of a component that has more properties.
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(() => {
    // create special module to our component testing
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      // schemas: [NO_ERRORS_SCHEMA]
    });
    // use and construct the HeroComponent
    fixture = TestBed.createComponent(HeroComponent);
  })
  it('should have the correct hero', ()=> {
    fixture.componentInstance.hero = { id: 101, name:'Adham sabry', strength: 2000 };

    expect(fixture.componentInstance.hero.name).toEqual('Adham sabry');
  })
  it('should render our hero name in an anchor tag',()=>{
    fixture.componentInstance.hero = { id: 101, name:'Adham sabry', strength: 2000 };
    console.log(fixture.nativeElement.querySelector('span'));

    // important
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('span').textContent).toContain('101');
    // debug element is a wrapper has more options
    expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('Adham');
  })
});
