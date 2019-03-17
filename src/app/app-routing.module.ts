import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './views/container/container.component';
const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'catalog',
        loadChildren: './views/catalog/catalog.module#CatalogModule'
      },
      {
        path: 'login',
        loadChildren: './views/login/login.module#LoginModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
