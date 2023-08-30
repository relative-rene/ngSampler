import { SidesComponent } from './sides.component';

describe('SidesComponent', ()=> {
    let component;
    beforeEach(()=>{
        component = new SidesComponent();
    })

    it('should create SidesComponent',()=> {
        expect(component).toBeDefined();
    })
});