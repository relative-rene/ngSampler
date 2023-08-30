// import { SlideComponent } from './slide.component';
// // import { CarouselComponent } from '../carousel.component';
// import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

// describe('SlideComponent', () => {
//     let carousel: CarouselComponent;
//     let slide: SlideComponent;
//     beforeEach(() => {
//         carousel = new CarouselComponent();
//         slide = new SlideComponent(carousel);
//     });
//     it('should create component', () => {
//         expect(slide).toBeDefined();
//     });

//     it('ngOnInit, lifecycle hook should set `active` to true', () => {
//         // Arrange
//         expect(slide['active']).toBeUndefined();

//         // Action
//         carousel.addSlide(slide);

//         // Assert
//         expect(slide['active']).toBeDefined();
//         expect(slide['active']).toBe(true);
//     });

//     it('ngOnDestroy, should trigger carousel to removeSlide', () => {
//         // Arrange
//         spyOn(carousel, 'removeSlide');
//         carousel.addSlide(slide);
//         expect(slide['active']).toBe(true);

//         // Action
//         slide.ngOnDestroy();

//         // Assert
//         expect(carousel.removeSlide).toHaveBeenCalled();
//     });

// });