import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IlustrationsComponent } from './ilustrations/ilustrations.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ilustrations', component: IlustrationsComponent}
];
