import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from './modmenu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './cmpmap/map.component';
import { InfoComponent } from './cmpinfo/info.component';
import { ContactUsComponent } from './cmpcontact-us/contact-us.component';
import { AgmCoreModule } from '@agm/core';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;
    let path: string;
    let fixedNav: boolean;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                MenuModule,
                AppRoutingModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBWZSPWwSlUyymW8yy3zrrcemAUC6e2NrY'
                })],
            declarations: [AppComponent,
                InfoComponent,
                ContactUsComponent,
                MapComponent],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('should create the app', () => {
        let component = new AppComponent();
        expect(app).toEqual(component);
    });

    it('OnInit, should set default properties for AppComponent', () => {
        // Arrange
        expect(app.navIsFixed).toBeUndefined();
        expect(app.googleLinkPath).toBeUndefined();

        // Action
        app.ngOnInit();

        // Assert
        expect(app.navIsFixed).toBeFalsy();
        expect(app.googleLinkPath).toBeDefined();
    });

    it('googleLink, shoud trigger new blank window', () => {
        // Arrange
        spyOn(window, 'open');
        expect(window.open).not.toHaveBeenCalled();

        // Action
        app.ngOnInit();
        app.googleLink();

        // Assert
        expect(window.open).toHaveBeenCalled();
        expect(window.open).toHaveBeenCalledTimes(1);
    });

    it('viewJump, should scroll down to main content', () => {
        // Arrange
        let menu = fixture.debugElement.nativeElement.querySelector('main#content');
        spyOn(menu , 'scrollIntoView');
        expect(menu.scrollIntoView).not.toHaveBeenCalled();

        // Action
        app.viewJump(menu);
        // Assert
        expect(menu.scrollIntoView).toHaveBeenCalled();
    });

   it('openNav, should collapse navMenu and expand sideNav', () => {
        // Arrange
        const navMenu = fixture.debugElement.nativeElement.querySelector('nav#hamburger-nav');
        const sideNav = fixture.debugElement.nativeElement.querySelector('div#sideNav');
        const navStyle = fixture.debugElement.query(By.css('nav#hamburger-nav')).nativeElement.style;
        const sideStyle = fixture.debugElement.query(By.css('div#sideNav')).nativeElement.style;

        expect(navStyle['visibility']).toEqual('')
        expect(sideStyle['width']).toEqual('');

        // Action
        app.openNav(sideNav, navMenu);

        // Assert
        expect(navStyle['visibility']).toEqual('hidden')
        expect(sideStyle['width']).toEqual('250px');

    });

   it('closeNav, should close sideNav and expand navMenu', () => {
       // Arrange
        const navMenu = fixture.debugElement.nativeElement.querySelector('nav#hamburger-nav');
        const sideNav = fixture.debugElement.nativeElement.querySelector('div#sideNav');
        const navStyle = fixture.debugElement.query(By.css('nav#hamburger-nav')).nativeElement.style;
        const sideStyle = fixture.debugElement.query(By.css('div#sideNav')).nativeElement.style;
        jasmine.clock().install();
        app.openNav(sideNav, navMenu);

        expect(navStyle['visibility']).toEqual('hidden')
        expect(sideStyle['width']).toEqual('250px');

        // Action
        app.closeNav(sideNav, navMenu);
        jasmine.clock().tick(900);

        // Assert
        expect(navStyle['visibility']).toEqual('visible');
        expect(sideStyle['width']).toEqual('0px');

    });

});
