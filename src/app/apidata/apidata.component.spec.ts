import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APIdataComponent } from './apidata.component';

describe('APIdataComponent', () => {
  let component: APIdataComponent;
  let fixture: ComponentFixture<APIdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIdataComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
