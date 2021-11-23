import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewscompoComponent } from './viewscompo.component';

describe('ViewscompoComponent', () => {
  let component: ViewscompoComponent;
  let fixture: ComponentFixture<ViewscompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewscompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewscompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
