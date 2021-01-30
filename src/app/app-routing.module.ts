import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  
{path:"login", component:LoginComponent},
{path:'product',loadChildren:'./Products/product.module#ProductModule'},
{path:"register", component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,scrollPositionRestoration:"top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
