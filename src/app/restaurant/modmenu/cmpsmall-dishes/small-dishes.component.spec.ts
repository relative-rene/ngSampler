import { SmallDishesComponent } from './small-dishes.component';

describe('SmallDishesComponent', ()=> {
    let component;
    beforeEach(()=>{
        component = new SmallDishesComponent();
    })

    it('should create SmallDishesComponent', ()=> {
        expect(component).toBeDefined();
    })
});