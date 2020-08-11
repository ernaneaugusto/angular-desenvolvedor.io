import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Produto } from './../models/produto';

@Injectable()
export class ProdutoResolve implements Resolve<Array<Produto>> {
    constructor(private produtoService: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        // nessa funcao consultamos o backend para buscar as informacoes para preenchimento da pagina, no momento em que a pagina eh carregada os dados já estarao todos prontos para serem usados, evitando que parte da pagina possa ficar em branco devido demora na resposta do servico de consulta de produtos
        const estado = route.params.estado;
        return this.produtoService.obterTodos(estado);
    }
}