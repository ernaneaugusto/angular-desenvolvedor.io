import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProdutoDashboardRoutingModule } from './produto-dashboard.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';

@NgModule({
    declarations: [
        ProdutoDashboardComponent
    ],
    imports: [
        CommonModule,
        ProdutoDashboardRoutingModule
    ],
    exports: [],
})

export class ProdutoDashboardModule { }