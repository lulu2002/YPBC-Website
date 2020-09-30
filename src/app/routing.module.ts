import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RecordsComponent} from './pages/records/records.component';

const routes: Route[] = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'records', component: RecordsComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {
}
