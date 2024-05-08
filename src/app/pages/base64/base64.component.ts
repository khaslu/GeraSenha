import { formatNumber } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, ReplaySubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css']
})
export class Base64Component implements OnInit, OnDestroy {

  form = new FormGroup({
    de: new FormControl(''),
    para: new FormControl(''),
  });

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
    this.paraDeFn.pipe(takeUntil(this.destroy)).pipe(debounceTime(500)).subscribe(() => this.paraDe());
  }

  dePara() {
    const { de } = this.form.value;
    const para = btoa(de);
    this.form.get('para').patchValue(para);
  }

  paraDe() {
    const { para } = this.form.value;
    const de = atob(para);
    this.form.get('de').patchValue(de);
  }

  limpar() {
    this.form.reset();
  }
}
