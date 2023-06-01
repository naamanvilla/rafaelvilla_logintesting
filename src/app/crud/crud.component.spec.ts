import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CRUDComponent } from './crud.component';

describe('CRUDComponent', () => {
  let component: CRUDComponent;
  let fixture: ComponentFixture<CRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
