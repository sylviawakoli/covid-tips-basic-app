import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { TipSheetFooterComponent } from "./tip-sheet-footer.component";

describe("TipSheetFooterComponent", () => {
  let component: TipSheetFooterComponent;
  let fixture: ComponentFixture<TipSheetFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TipSheetFooterComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TipSheetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
