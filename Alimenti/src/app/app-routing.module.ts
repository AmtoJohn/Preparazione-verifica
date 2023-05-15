import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ObjectDetailsComponent } from './object-details/object-details.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'object/:id', component: ObjectDetailsComponent },
  // Altre rotte se necessario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
