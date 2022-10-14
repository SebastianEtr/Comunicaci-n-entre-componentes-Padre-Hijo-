import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeComComponent } from './mode-com.component';

describe('ModeComComponent', () => {
  let component: ModeComComponent;
  let fixture: ComponentFixture<ModeComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
