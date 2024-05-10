import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CopyUtil } from 'app/shared/util/copy.util';
import { debounceTime, ReplaySubject, Subject, takeUntil } from 'rxjs';
import * as crypto from 'crypto-js';


@Component({
  selector: 'app-crypt',
  templateUrl: './crypt.component.html',
  styleUrls: ['./crypt.component.css']
})
export class CryptComponent implements OnInit, OnDestroy {

  form = new FormGroup({
    de: new FormControl(''),
    para: new FormControl(''),
    hash: new FormControl('DES'),
    key: new FormControl(''),
    filtroHash: new FormControl(''),
  });

  hashs = [
    { value: 'AES', encrypt: (value: string, key: string) => crypto.AES.encrypt(value, key).toString(crypto.format.OpenSSL), decrypt: (value: string, key: string) => crypto.AES.decrypt(value, key).toString(crypto.enc.Utf8) },
    { value: 'Blowfish', encrypt: (value: string, key: string) => crypto.Blowfish.encrypt(value, key).toString(crypto.format.OpenSSL), decrypt: (value: string, key: string) => crypto.Blowfish.decrypt(value, key).toString(crypto.enc.Utf8) },
    { value: 'DES', encrypt: (value: string, key: string) => crypto.DES.encrypt(value, key).toString(crypto.format.OpenSSL), decrypt: (value: string, key: string) => crypto.DES.decrypt(value, key).toString(crypto.enc.Utf8) },
    { value: 'RC4', encrypt: (value: string, key: string) => crypto.RC4.encrypt(value, key).toString(crypto.format.OpenSSL), decrypt: (value: string, key: string) => crypto.RC4.decrypt(value, key).toString(crypto.enc.Utf8) },
    { value: 'RC4Drop', encrypt: (value: string, key: string) => crypto.RC4Drop.encrypt(value, key).toString(crypto.format.OpenSSL), decrypt: (value: string, key: string) => crypto.RC4Drop.decrypt(value, key).toString(crypto.enc.Utf8) },
    { value: 'Rabbit', encrypt: (value: string, key: string) => crypto.Rabbit.encrypt(value, key).toString(crypto.format.OpenSSL), decrypt: (value: string, key: string) => crypto.Rabbit.decrypt(value, key).toString(crypto.enc.Utf8) },
    { value: 'RabbitLegacy', encrypt: (value: string, key: string) => crypto.RabbitLegacy.encrypt(value, key).toString(crypto.format.OpenSSL), decrypt: (value: string, key: string) => crypto.RabbitLegacy.decrypt(value, key).toString(crypto.enc.Utf8) },
    { value: 'TripleDES', encrypt: (value: string, key: string) => crypto.TripleDES.encrypt(value, key).toString(crypto.format.OpenSSL), decrypt: (value: string, key: string) => crypto.TripleDES.decrypt(value, key).toString(crypto.enc.Utf8) },
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
    //this.paraDeFn.pipe(takeUntil(this.destroy)).pipe(debounceTime(500)).subscribe(() => this.paraDe());
  }

  dePara() {
    const { de, hash, key } = this.form.value;
    if (de) {
      const para = this.hashs.find(h => h.value === hash).encrypt(de, key);
      this.form.get('para').patchValue(para, { emitEvent: false, onlySelf: true});
    }
  }

  paraDe() {
    const { para, hash, key } = this.form.value;
    if (para) {
      const de = this.hashs.find(h => h.value === hash).decrypt(para, key);
      this.form.get('de').patchValue(de, { emitEvent: false });
    }
  }

  limpar() {
    this.form.reset();
  }

  copiarPara() {
    CopyUtil.copiar(this.form.get('para').value);
  }

  copiarDe() {
    CopyUtil.copiar(this.form.get('de').value);
  }

  get hashFilter() {
    const value = this.form.get('filtroHash').value;
    if (!value) {
      return this.hashs;
    }
    return this.hashs.filter(h => h.value.toLowerCase().includes(value.toLowerCase()));
  }
}
