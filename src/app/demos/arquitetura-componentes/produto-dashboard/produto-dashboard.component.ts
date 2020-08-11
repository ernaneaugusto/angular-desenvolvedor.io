import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit {

  public produtos: Produto[];

  constructor(private route: ActivatedRoute) { }

  public mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

  ngOnInit() {
    // dados de produtos buscados do Resolve
    this.produtos = this.route.snapshot.data['produtos'];
  }

}
