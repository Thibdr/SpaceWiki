import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarTrekComponent } from './star-trek.component';

describe('StarTrekComponent', () => {
  let component: StarTrekComponent;
  let fixture: ComponentFixture<StarTrekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarTrekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
