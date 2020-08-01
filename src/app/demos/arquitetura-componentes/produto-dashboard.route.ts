import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';

const ROUTES: Routes = [
    { path: '', component: ProdutoDashboardComponent }
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

export class ProdutoDashboardRoutingModule {}