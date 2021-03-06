import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { VacinaComponent } from './vacina/vacina.component';
import { PreagendamentoComponent } from './preagendamento/preagendamento.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { AngularValidateBrLibModule } from 'angular-validate-br';
import { ReactiveFormsModule } from '@angular/forms';
import { CepService } from './services/cep.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    VacinaComponent,
    PreagendamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,  
    RecaptchaFormsModule,
    AngularValidateBrLibModule
  ],
  providers: [
    CepService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
