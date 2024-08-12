import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuantitySelectionComponent } from './features/components/filosofos/quantity-selection/quantity-selection.component';
import { ResourceManagerComponent } from './features/components/banqueiro/resource-manager/resource-manager.component';



const routes: Routes = [{
  path: 'JantarDosFilosofos',
  component: QuantitySelectionComponent
},
{
  path: 'AlgoritmoDoBanqueiro',
  component:  ResourceManagerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
