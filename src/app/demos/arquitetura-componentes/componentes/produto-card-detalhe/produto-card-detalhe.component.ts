import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styles: []
})
export class ProdutoCardDetalheComponent implements OnInit {
  @Input() produtos: Produto;

  constructor() { }

  ngOnInit() { }

}
