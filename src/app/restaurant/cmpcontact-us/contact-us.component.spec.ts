import { ContactUsComponent } from './contact-us.component';
import { MessageService } from '../_services/message.service';

describe('ContactUsComponent', () => {
    let component: ContactUsComponent;
    let service: MessageService;
    beforeEach(() => {
        service = new MessageService();
        component = new ContactUsComponent(service);
    });

    it('should create component', () => {
        // Arrange
        expect(component).toBeDefined();
    });

    it('ngOnInit, should initialize messageForm', () => {
        // Arrange
        expect(component.messageForm).toBeUndefined();

        // Action
        component.ngOnInit();

        // Assert

        expect(component.messageForm).toBeDefined();
    });

    it('OnSubmit, should initialize new messageForm', () => {
        // Arrange
        component.ngOnInit();
        spyOn(service, 'addMessage');
        component.messageForm.patchValue({
            description: 'Terric Service !!!',
            email: 'madeUp123@hotmail.com'
        });
        expect(component.messageForm.value).toEqual({
            description: 'Terric Service !!!',
            email: 'madeUp123@hotmail.com'
        });
        expect(component.messageForm.valid).toBe(true);

        // Action
        component.onSubmit();

        // Assert
        expect(component.messageForm.value).not.toEqual({
            description: 'Terric Service !!!',
            email: 'madeUp123@hotmail.com'
        });
        expect(component.messageForm.valid).toBe(false);
        expect(service.addMessage).toHaveBeenCalled();
        expect(service.addMessage).toHaveBeenCalledTimes(1);


    });
});