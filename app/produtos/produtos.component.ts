import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { produto } from '../models/produtos';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  constructor(private route: Router) { }

  exibirTabela = true;
  nome = '';
  listaProdutos: produto[] = [
    { id: 1, nome: 'camisa', preco: '99', descricao: "Camisa Branca", emEstoque: true },
    { id: 2, nome: 'camisa', preco: '99', descricao: "Camisa Preta", emEstoque: true },
    { id: 3, nome: 'camisa', preco: '99', descricao: "Camisa Marrom", emEstoque: false },
  ];

  abrirDetalhe(id: number) {
    this.route.navigate(['/detalhe', id]);
  }
}