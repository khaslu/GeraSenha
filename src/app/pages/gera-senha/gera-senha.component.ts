import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CopyUtil } from 'app/shared/util/copy.util';

@Component({
  selector: 'app-gera-senha',
  templateUrl: './gera-senha.component.html',
  styleUrls: ['./gera-senha.component.css']
})
export class GeraSenhaComponent implements OnInit {

  form = new FormGroup({
    contemNumero: new FormControl(true),
    contemLetras: new FormControl(true),
    contemSimbolos: new FormControl(true),
    tamanho: new FormControl(10, [Validators.required, Validators.min(1), Validators.max(100)]),
    senha: new FormControl([]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    return value;
  }

  gerar() {
    const possibilidades = [];
    const form = this.form.value;
    if (form.contemNumero) {
      for (let i = 48; i <= 57; i++) {
        possibilidades.push(String.fromCharCode(i));
      }
    }
    if (form.contemLetras) {
      for (let i = 65; i <= 90; i++) {
        possibilidades.push(String.fromCharCode(i));
      }
      for (let i = 97; i <= 122; i++) {
        possibilidades.push(String.fromCharCode(i));
      }
    }
    if (form.contemSimbolos) {
      for (let i = 33; i <= 47; i++) {
        possibilidades.push(String.fromCharCode(i));
      }
      for (let i = 58; i <= 64; i++) {
        possibilidades.push(String.fromCharCode(i));
      }
      for (let i = 91; i <= 96; i++) {
        possibilidades.push(String.fromCharCode(i));
      }
      for (let i = 123; i <= 126; i++) {
        possibilidades.push(String.fromCharCode(i));
      }
    }
    if (!possibilidades?.length) {
      return;
    }
    let senha = '';
    for (let i = 0; i < form.tamanho; i++) {
      const pos = Math.floor(Math.random() * possibilidades.length);
      senha += possibilidades[pos];
    }
    this.form.value.senha.push(senha);
  }

  copiar(senha: string) {
    CopyUtil.copiar(senha);
  }

  limpar() {
    this.form.get('senha').patchValue([]);
  }
}
