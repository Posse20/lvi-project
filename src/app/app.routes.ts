import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IlustrationsComponent } from './ilustrations/ilustrations.component';
import { PicturesComponent } from './pictures/pictures.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ilustrations', component: IlustrationsComponent},
    {path: 'pictures', component: PicturesComponent}
];
