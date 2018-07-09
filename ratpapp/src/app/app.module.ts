import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
import { ListmoduleModule } from './listmodule/listmodule.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ItemsModule } from './items/items.module';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavComponent } from './shared/components/nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ItemsModule,
    PagenotfoundModule,
    ListmoduleModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}


