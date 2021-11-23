import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModscompoComponent } from './modscompo.component';

describe('ModscompoComponent', () => {
  let component: ModscompoComponent;
  let fixture: ComponentFixture<ModscompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModscompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModscompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
