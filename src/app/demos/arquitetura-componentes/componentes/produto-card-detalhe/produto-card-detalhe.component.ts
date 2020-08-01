import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styles: []
})
export class ProdutoCardDetalheComponent implements OnInit {
  @Input() produto: Produto;
  @Output() status: EventEmitter<any> = new EventEmitter();


  constructor() { }

  public desabilitarProduto() {
    this.status.emit(this.produto)
  }

  ngOnInit() { }

}
