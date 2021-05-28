import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./list/list.module').then((m) => m.ListModule),
  },
  // {
  //   path: 'pokemon',
  //   loadChildren: () =>
  //     import('./list/list.module').then((m) => m.ListModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '' },
  ],
})
export class AppRoutingModule {}
