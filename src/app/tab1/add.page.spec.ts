import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AddPage } from './tab1.page'; // 修改导入名称

describe('AddPage', () => { // 修改描述名称
  let component: AddPage;
  let fixture: ComponentFixture<AddPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPage], // 修改声明名称
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});