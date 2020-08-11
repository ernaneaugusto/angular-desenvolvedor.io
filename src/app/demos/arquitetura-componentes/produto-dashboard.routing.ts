import { ProdutoAppComponent } from './componentes/produto.app.component';
import { ProdutoEditarComponent } from './componentes/produto-editar/produto-editar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoResolve } from './services/produto.resolve';

const ROUTES: Routes = [
    {
        path: '',
        component: ProdutoAppComponent,
        children: [
            { path: '', redirectTo: 'todos' },
            {
                path: ':estado',
                component: ProdutoDashboardComponent,
                resolve: {
                    // produtos: nome do parametro pelo qual o valor do Resolver sera pego no componente via this.route.snapshot.data['produtos']
                    produtos: ProdutoResolve
                }
            },
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