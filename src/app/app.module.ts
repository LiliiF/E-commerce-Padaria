import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { LoginComponent } from './page/login/login.component';
import { CriarContaComponent } from './page/login/criar-conta/criar-conta.component';
import { PedidoComponent } from './page/pedido/pedido.component';
import { VisualizarProdutosComponent } from './page/pedido/visualizar-produtos/visualizar-produtos.component';
import { FazerPedidoComponent } from './page/pedido/fazer-pedido/fazer-pedido.component';
import { MetodoDePagamentoComponent } from './page/pedido/metodo-de-pagamento/metodo-de-pagamento.component';
import { ConfirmacaoPedidoComponent } from './page/pedido/confirmacao-pedido/confirmacao-pedido.component';
import { HeroComponent } from './page/landing-page/hero/hero.component';
import { NossosProdutosComponent } from './page/landing-page/nossos-produtos/nossos-produtos.component';
import { CartoesComponent } from './page/landing-page/cartoes/cartoes.component';
import { FeedbacksComponent } from './page/landing-page/feedbacks/feedbacks.component';
import { ApresentacaoComponent } from './page/landing-page/apresentacao/apresentacao.component';
import { FooterComponent } from './page/landing-page/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardModeloComponent } from './components/card-modelo/card-modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    CriarContaComponent,
    PedidoComponent,
    VisualizarProdutosComponent,
    FazerPedidoComponent,
    MetodoDePagamentoComponent,
    ConfirmacaoPedidoComponent,
    HeroComponent,
    NossosProdutosComponent,
    CartoesComponent,
    FeedbacksComponent,
    ApresentacaoComponent,
    FooterComponent,
    NavBarComponent,
    CardModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
