import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
    this.fixture = TestBed.createComponent(AppComponent);
  }));
  it('should create the app', async(() => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tour of Heroes'`, async(() => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));
  it('should have hero object, with id and name', async(() => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app.hero.id).toEqual(1);
    expect(app.hero.name).toEqual('Windstorm');
  }));
  it('should render Heroes details in labels', async(() => {
    this.fixture.detectChanges();
    this.fixture.whenStable().then(() => {
      const compiled = this.fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div').textContent).toContain('id: 1');
      expect(compiled.querySelector('input').value).toBe('Windstorm');
    });
  }));
  it('should have hero data-array, with ten heroes', async(() => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app.heroes.length).toEqual(10);
    expect(app.heroes[0].name).toEqual('Mr. Nice');
    expect(app.heroes[0].id).toEqual(11);
  }));
  it('should render heroes data in a list', async(() => {
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(11);
    expect(compiled.querySelector('li').textContent).toContain('Mr. Nice');
  }));
  it('should show selected hero\'s details', async(() => {
    const app = this.fixture.debugElement.componentInstance;
    app.selectedHero = {
      id: 11,
      name: 'Mr. Nice'
    };
    this.fixture.detectChanges();
    this.fixture.whenStable().then(() => {
      const compiled = this.fixture.debugElement.nativeElement;
      expect(compiled.querySelector('input').value).toBe('Mr. Nice');
    });
  }));
});
