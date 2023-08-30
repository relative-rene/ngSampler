import { async, TestBed, ComponentFixture, fakeAsync } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";
import { SmallDishesComponent } from "./cmpsmall-dishes/small-dishes.component";
import { SidesComponent } from "./cmpsides/sides.component";
import { EntreesComponent } from "./cmpentrees/entrees.component";
import { BrunchComponent } from "./cmpbrunch/brunch.component";
import { MenuComponent } from "./menu.component";
import { SlideComponent } from "./cmpcarousel/slide/slide.component";
// import { CarouselComponent } from "./cmpcarousel/carousel.component";

describe('MenuComponent', () => {
    let fixture: ComponentFixture<MenuComponent>;
    let component: MenuComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                MenuRoutingModule
            ],
            declarations: [
                SmallDishesComponent,
                SidesComponent,
                EntreesComponent,
                BrunchComponent,
                MenuComponent,
                // CarouselComponent,
                SlideComponent,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
    });

    it('should create MenuComponent', () => {
        let app = new MenuComponent();
        expect(component).toEqual(app);
    });


    it('OnInit, should increase slide collection', () => {
        // Arrange
        expect(component.slides.length).toEqual(0);

        // Action
        component.ngOnInit();

        // Assert
        expect(component.slides.length).toBeGreaterThan(0);
    });

    
});