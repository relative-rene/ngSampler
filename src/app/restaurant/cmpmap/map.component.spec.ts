import { MapComponent } from './map.component';


describe('MapComponent', () => {
    beforeEach(() => {
        let component: MapComponent = new MapComponent();

        it('should create Map Component', () => {
            expect(component).toBeDefined();
        });
        it('OnInit, should set default parameter', () => {
            // Arrange
            expect(component.lat).toBeUndefined();
            expect(component.lng).toBeUndefined();
            expect(component.zoom).toBeUndefined();

            // Action
            component.ngOnInit();

            // Assert
            expect(component.lat).toBeDefined();
            expect(component.lng).toBeDefined();
            expect(component.zoom).toBeDefined();
        });
    });
});
