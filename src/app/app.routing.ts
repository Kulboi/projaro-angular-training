import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

// Routes
const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: { title: 'Login component' }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register component' }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Profile component' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }