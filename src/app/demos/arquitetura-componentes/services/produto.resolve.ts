import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Produto } from './../models/produto';

@Injectable()
export class ProdutoResolve implements Resolve<Array<Produto>> {
    constructor(private produtoService: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        // nessa funcao poderiamos consultar no backend se o usuario tem permissao para acessar a pagina, retornando true ou false e cancelando seu acesso a pagina, caso nao tenha permissao
        const estado = route.params.estado;
        return this.produtoService.obterTodos(estado);
    }
}