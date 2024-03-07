import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent} from './product/product.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "product", component: ProductComponent},
  {path: "contactus", component: ContactusComponent},
  {path: "login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
