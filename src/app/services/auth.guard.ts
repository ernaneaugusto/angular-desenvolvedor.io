import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Router } from '@angular/router';

@Injectable()

export class AuthGuard implements CanLoad, CanActivate {

    private user = { admin: true, logged: true };

    constructor(private router: Router) { }

    // usado apenas em modulos com lazy loading, impede o carregamento dos arquivos do modulo
    canLoad(): boolean {
        this.router.navigate(['/forbidden']);
        return this.user.admin;
    }

    // usado para bloquear o acesso a determinadas rotas(com ou sem lazy loading), a navegacao fica bloqueada, mas os arquivos do modulo/pagina sao carregados normalmente
    canActivate(): boolean {
        this.router.navigate(['/forbidden']);
        return this.user.admin && this.user.logged;
    }

}