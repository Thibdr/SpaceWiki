import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LegalInformationComponent } from './legal-information/legal-information.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    LegalInformationComponent,
    AccueilComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
     RouterModule.forRoot(
      [
        {
          path: "",
          component: AccueilComponent,
          pathMatch: "full"
        },
        {
          path: "home",
          component: HomeComponent,
          pathMatch: "full"
        },
        {
          path: "contact",
          component: ContactComponent,
          pathMatch: "full"
        },
        {
          path: "legalInf",
          component: LegalInformationComponent,
          pathMatch: "full"
        },
        {
          path: "aboutUs",
          component: AboutUsComponent,
          pathMatch: "full"
        },
        {
          path: "demo",
          component: DemoComponent,
          pathMatch: "full"
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
