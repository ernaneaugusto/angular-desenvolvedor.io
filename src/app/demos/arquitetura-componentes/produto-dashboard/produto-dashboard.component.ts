import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit {

  public produtos: Produto[];

  constructor() { }

  ngOnInit() {
    this.produtos = [
      {
        id: 1,
        nome: 'Smartphone Samsung',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg'
      },
      {
        id: 2,
        nome: 'Câmera GoPro',
        ativo: true,
        valor: 200,
        imagem: 'gopro.jpg'
      },
      {
        id: 3,
        nome: 'Notebook',
        ativo: true,
        valor: 300,
        imagem: 'laptop.jpg'
      },
      {
        id: 4,
        nome: 'Mouse',
        ativo: true,
        valor: 400,
        imagem: 'mouse.jpg'
      },
      {
        id: 5,
        nome: 'Teclado',
        ativo: true,
        valor: 500,
        imagem: 'teclado.jpg'
      },
      {
        id: 6,
        nome: 'Headset',
        ativo: false,
        valor: 600,
        imagem: 'headset.jpg'
      }
    ];
  }

}
