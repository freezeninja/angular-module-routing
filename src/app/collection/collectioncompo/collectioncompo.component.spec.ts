import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectioncompoComponent } from './collectioncompo.component';

describe('CollectioncompoComponent', () => {
  let component: CollectioncompoComponent;
  let fixture: ComponentFixture<CollectioncompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectioncompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectioncompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
