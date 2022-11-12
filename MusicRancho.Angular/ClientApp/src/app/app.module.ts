import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RanchoComponent } from './rancho/rancho.component';
import { RanchoNumberComponent } from './rancho-number/rancho-number.component';
import { RanchoCreateComponent } from './rancho-create/rancho-create.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthGuard } from './auth.guard';
import { RanchoInterceptor } from './rancho.interceptor';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ForbidenComponent } from './forbiden/forbiden.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RanchoComponent,
    RanchoCreateComponent,
    AuthCallbackComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'rancho', component: RanchoComponent },
      { path: 'rancho-number', component: RanchoNumberComponent },
      { path: 'rancho-create', component: RanchoCreateComponent, canActivate: [AuthGuard] },
      { path: 'auth-callback', component: AuthCallbackComponent },
      { path: 'unauthorized', component: UnauthorizedComponent },
      { path: 'forbidden', component: ForbidenComponent }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RanchoInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
