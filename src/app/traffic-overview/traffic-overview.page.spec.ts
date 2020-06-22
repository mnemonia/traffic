import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrafficOverviewPage } from './traffic-overview.page';

describe('TrafficOverviewPage', () => {
  let component: TrafficOverviewPage;
  let fixture: ComponentFixture<TrafficOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrafficOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
