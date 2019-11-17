import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseEventSpacesComponent } from './browse-event-spaces.component';

describe('BrowseEventSpacesComponent', () => {
  let component: BrowseEventSpacesComponent;
  let fixture: ComponentFixture<BrowseEventSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseEventSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseEventSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
