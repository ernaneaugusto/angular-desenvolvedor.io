import { ProdutoAppComponent } from './componentes/produto.app.component';
import { ProdutoEditarComponent } from './componentes/produto-editar/produto-editar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ProdutoAppComponent,
        children: [
            { path: '', component: ProdutoDashboardComponent },
            { path: 'editar/:id', component: ProdutoEditarComponent },
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ],
})

export class ProdutoDashboardRoutingModule { }