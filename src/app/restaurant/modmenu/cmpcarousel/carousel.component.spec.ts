// import { CarouselComponent } from './carousel.component';
// import { SlideComponent } from './slide/slide.component';
// describe('CarouselComponent', () => {
//     let component: CarouselComponent;
//     let slide: SlideComponent;

//     beforeEach(() => {
//         component = new CarouselComponent();
//     });

//     it('should create CarouselInstance', () => {
//         expect(component).toBeDefined();
//     });

//     it('ngDestroy, should trigger goNext function', () => {
//         // Arrange
//         expect(component['destroyed']).toBe(false);
//         // Action
//         component.ngOnDestroy();
//         // Assert
//         expect(component['destroyed']).toBe(true);

//     });

//     it('addSlide, exposes isPlaying private variables through DI', () => {
//         // Arrange
//         expect(component['isPlaying']).toBeUndefined();

//         // Action
//         let slide = new SlideComponent(component);
//         component.addSlide(slide);

//         // Assert
//         expect(component['isPlaying']).toBeDefined();
//     });

//     it('pause, converts private variable isPlaying to false', () => {
//         // Arrange
//         let slide = new SlideComponent(component);
//         component.addSlide(slide);
//         expect(component['isPlaying']).toBe(true);

//         // Action
//         component.pause();

//         // Assert
//         expect(component['isPlaying']).toBe(false);
//     });

//     it('play, converts private variable isPlaying to true', () => {
//         // Arrange
//         let slide = new SlideComponent(component);
//         component.addSlide(slide);
//         component.pause();
//         expect(component['isPlaying']).toBe(false);

//         // Action
//         component.play();

//         // Assert
//         expect(component['isPlaying']).toBe(true);
//     });
// });