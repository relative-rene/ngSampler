import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'register',
        loadChildren: () =>
            import('src/app/application_components/auth/auth.routes').then((m) => m.registerRoutes)
    }
]