import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { environment } from 'environments/environment';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { Base64Component } from './pages/base64/base64.component';
import { GeraSenhaComponent } from './pages/gera-senha/gera-senha.component';
import { HashComponent } from './pages/hash/hash.component';
import { FilterModule } from './shared/pipe/pipe.module';
import { CryptComponent } from './pages/crypt/crypt.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GeraSenhaComponent,
    Base64Component,
    HashComponent,
    CryptComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true,
      enableTracing: !environment.production,
      onSameUrlNavigation: 'reload'
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FilterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
