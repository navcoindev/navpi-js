import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {WalletModule} from './wallet/wallet.module';
import {WalletService} from './services/wallet/wallet.service';
import {CoreService} from './services/core/core.service';
import {DashboardResolverService} from './services/resolvers/dashboard-resolver.service';
import {DataService} from './services/data/data.service';
import {TickerService} from './services/ticker/ticker.service';
import {DaemonModule} from './daemon/daemon.module';
import {DaemonService} from './services/daemon/daemon.service';
import {LoginModule} from './login/login.module';
import {AuthService} from './services/auth/auth.service';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {ErrorService} from './services/error/error.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Application Modules
    DashboardModule,
    WalletModule,
    DaemonModule,
    LoginModule,

    AppRoutingModule
  ],
  providers: [

    // SERVICES
    CoreService,
    WalletService,
    DaemonService,
    AuthService,
    ErrorService,

    DataService,
    TickerService,

    // RESOLVERS
    DashboardResolverService,

    // INTERCEPTORS
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
