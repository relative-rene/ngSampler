import { EntreesComponent } from "./entrees.component";

describe('EntreesComponent', ()=> {
    let component;
    beforeEach(()=>{
        component = new EntreesComponent();
    });

    it('should create EntreesComponent',()=> {
        expect(component).toBeDefined();
    });
});