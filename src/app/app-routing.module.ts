import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { AuthGuard } from './services/auth.guard';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'produtos', loadChildren: () => import('./demos/arquitetura-componentes/produto-dashboard.module').then(m => m.ProdutoDashboardModule) },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin-dashboard/admin-dashboard.module').then(admModule => admModule.AdminDashboardModule),
        canLoad: [
            AuthGuard
        ],
        canActivate: [
            AuthGuard
        ],
    },
    {
        path: 'forbidden',
        loadChildren: () => import('./admin/forbidden/forbidden.module').then(forbiddenModule => forbiddenModule.ForbiddenModule)
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false }) // enableTracing: habilita informacoes de navegagacao no console
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }