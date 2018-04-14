import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'sobre-mim', loadChildren: './about-me/about-me.module#AboutMeModule'},
  // { path: 'servicos-tecnologias', loadChildren: './about-me/about-me.module#AboutMeModule'},
  // { path: 'trabalhos-conceitos', loadChildren: './about-me/about-me.module#AboutMeModule'},
  // { path: 'fale-comigo', loadChildren: './about-me/about-me.module#AboutMeModule'},
  // { path: 'login-cliente', loadChildren: './about-me/about-me.module#AboutMeModule'},
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', loadChildren: './error404/error404.module#Error404Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
