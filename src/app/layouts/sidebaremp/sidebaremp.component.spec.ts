import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEmpComponent } from './sidebaremp.component';

describe('SidebarComponent', () => {
  let component: SidebarEmpComponent;
  let fixture: ComponentFixture<SidebarEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
