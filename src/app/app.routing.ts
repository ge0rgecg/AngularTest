import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { PhotoComponent } from './templates/photo/photo.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { PhotoDetailsComponent } from './templates/photo-details/photo-details.component';
import { PhotoFormComponent } from './templates/photo/photo-form/photo-form.component';
import { AppGuard } from './app.guard';
import { LoginComponent } from './templates/login/login.component';

const appRoutings: Routes = [
    { path: '', redirectTo: 'home', pathMatch : 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'photos', component: PhotoComponent, canActivate: [AppGuard], canLoad: [AppGuard]},
    { path: 'photos/edit', component: PhotoFormComponent, canActivate: [AppGuard], canLoad: [AppGuard]},
    { path: 'photos/:photoId/details', component: PhotoDetailsComponent, canActivate: [AppGuard], canLoad: [AppGuard] },
    { path: 'photos/:photoId/edit', component: PhotoFormComponent, canActivate: [AppGuard], canLoad: [AppGuard] },

    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutings, { preloadingStrategy: PreloadAllModules })]
})
export class AppRouting { }

