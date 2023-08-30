import { BrunchComponent } from './brunch.component';

describe('BrunchComponent', ()=> {
    let component;
    beforeEach(()=>{
        component = new BrunchComponent();
    })

    it('should create BrunchComponent',()=> {
        expect(component).toBeDefined();
    })
});