import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CopyUtil } from 'app/shared/util/copy.util';
import * as crypto from 'crypto-js';
import { debounceTime, ReplaySubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit, OnDestroy {

  form = new FormGroup({
    de: new FormControl(''),
    para: new FormControl(''),
    hash: new FormControl('MD5'),
    key: new FormControl(''),
    filtroHash: new FormControl(''),
  });

  hashs = [
    { value: 'MD5', hasKey: false, generate: (value: string) => crypto.MD5(value).toString() },
    { value: 'SHA1', hasKey: false, generate: (value: string) => crypto.SHA1(value).toString() },
    { value: 'SHA3', hasKey: false, generate: (value: string) => crypto.SHA3(value).toString() },
    { value: 'SHA224', hasKey: false, generate: (value: string) => crypto.SHA224(value).toString() },
    { value: 'SHA256', hasKey: false, generate: (value: string) => crypto.SHA256(value).toString() },
    { value: 'SHA384', hasKey: false, generate: (value: string) => crypto.SHA384(value).toString() },
    { value: 'SHA512', hasKey: false, generate: (value: string) => crypto.SHA512(value).toString() },
    { value: 'HmacMD5', hasKey: true, generate: (value: string, key: string) => crypto.HmacMD5(value, key).toString() },
    { value: 'HmacRIPEMD160', hasKey: true, generate: (value: string, key: string) => crypto.HmacRIPEMD160(value, key).toString() },
    { value: 'HmacSHA1', hasKey: true, generate: (value: string, key: string) => crypto.HmacSHA1(value, key).toString() },
    { value: 'HmacSHA224', hasKey: true, generate: (value: string, key: string) => crypto.HmacSHA224(value, key).toString() },
    { value: 'HmacSHA256', hasKey: true, generate: (value: string, key: string) => crypto.HmacSHA256(value, key).toString() },
    { value: 'HmacSHA3', hasKey: true, generate: (value: string, key: string) => crypto.HmacSHA3(value, key).toString() },
    { value: 'HmacSHA384', hasKey: true, generate: (value: string, key: string) => crypto.HmacSHA384(value, key).toString() },
    { value: 'HmacSHA512', hasKey: true, generate: (value: string, key: string) => crypto.HmacSHA512(value, key).toString() },
    { value: 'RIPEMD160', hasKey: false, generate: (value: string) => crypto.RIPEMD160(value).toString() },
  ];

  deParaFn = new ReplaySubject<void>();
  paraDeFn = new ReplaySubject<void>();
  destroy = new Subject<void>();

  constructor() { }
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.deParaFn.pipe(takeUntil(this.destroy)).pipe(debounceTime(500)).subscribe(() => this.dePara());
  }

  dePara() {
    const { de, hash, key } = this.form.value;
    const para = this.hashs.find(h => h.value === hash).generate(de, key);
    this.form.get('para').patchValue(para);
  }

  limpar() {
    this.form.reset();
  }

  copiarPara() {
    CopyUtil.copiar(this.form.get('para').value);
  }

  hasKey() {
    return this.hashs.find(h => h.value === this.form.get('hash').value)?.hasKey;
  }

  get hashFilter() {
    const value = this.form.get('filtroHash').value;
    if (!value) {
      return this.hashs;
    }
    return this.hashs.filter(h => h.value.toLowerCase().includes(value.toLowerCase()));
  }
}
