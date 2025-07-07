import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IlustrationsComponent } from './ilustrations/ilustrations.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ComicsComponent } from './comics/comics.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ilustrations', component: IlustrationsComponent},
    {path: 'comics', component: ComicsComponent},
    {path: 'pictures', component: PicturesComponent}
];
