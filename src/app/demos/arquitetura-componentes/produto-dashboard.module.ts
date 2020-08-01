import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProdutoDashboardRoutingModule } from './produto-dashboard.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count/produto-count.component';

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent
    ],
    imports: [
        CommonModule,
        ProdutoDashboardRoutingModule
    ],
    exports: [],
})

export class ProdutoDashboardModule { }