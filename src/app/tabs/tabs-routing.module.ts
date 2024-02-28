import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/pedidos/pedidos.module').then(m => m.PedidosPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/trabajos/trabajos.module').then(m => m.TrabajosPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/servicios/servicios.module').then(m => m.ServiciosPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../pages/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
