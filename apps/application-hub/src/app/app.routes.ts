import { Route } from '@angular/router';
import { ApplicationIndexComponent } from './components/application-index.component';

export const appRoutes: Route[] = [
  {
    path: 'index',
    component: ApplicationIndexComponent,
  },
  {
    path: '**',
    redirectTo: 'index',
  },
];
