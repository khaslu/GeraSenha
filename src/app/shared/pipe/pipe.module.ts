import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';

const declarations = [
  FilterPipe,
];

@NgModule({
  declarations
  , exports: declarations
})
export class FilterModule {

}
