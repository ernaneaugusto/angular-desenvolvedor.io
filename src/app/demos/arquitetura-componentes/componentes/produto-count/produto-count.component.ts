import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-count',
  templateUrl: './produto-count.component.html',
  styles: []
})
export class ProdutoCountComponent implements OnInit {
  @Input() produtos: Array<Produto>;

  constructor() { }

  public contadorAtivos(): number {
    if (this.produtos.length === 0) return 0;

    return this.produtos
      .filter((produto: Produto) => produto.ativo == true).length;
  }

  ngOnInit() { }

}
