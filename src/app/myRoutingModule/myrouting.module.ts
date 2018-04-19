import { ProductsListComponent } from '../components/products-list/products-list.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductsDetailComponent } from '../components/products-detail/products-detail.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const tableDeRoutage = [
   { path: 'list', component: ProductsListComponent },
   { path: 'welcome', component: WelcomeComponent },
   { path: 'product/:id', component: ProductsDetailComponent },
   { path: '', redirectTo: '/welcome', pathMatch: 'full' },
   { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(tableDeRoutage)
  ],
  exports : [RouterModule],
  providers: [],
  bootstrap: []
})
export class MyRoutingModule { }
