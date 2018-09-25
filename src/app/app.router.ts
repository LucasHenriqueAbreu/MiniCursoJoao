import { CameraComponent } from "./camera/camera.component";
import { Routes, RouterModule } from '@angular/router';
import { GeolocationComponent } from "./geolocation/geolocation.component";
import { CodebarComponent } from "./codebar/codebar.component";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    { path: 'camera', component: CameraComponent },
    { path: 'geolocation', component: GeolocationComponent },
    { path: 'codebar', component: CodebarComponent }
];

export const ROUTES: ModuleWithProviders =
    RouterModule.forRoot(routes, { useHash: true });