import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styles: []
})
export class ProdutoEditarComponent implements OnInit {

  public produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const { id } = params;
        this.produto = this.produtoService.obterPorId(id)
      });
  }

  public salvar() {
    this.router.navigate(['/produtos']);
    // tambem realizar a navegacao, porem da refresh na pagina
    // this.router.navigateByUrl('/produtos');
  }

}
