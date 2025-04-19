import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UpdatePage } from './update.page';

describe('UpdatePage', () => {
  let component: UpdatePage;
  let fixture: ComponentFixture<UpdatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
