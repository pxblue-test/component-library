import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';



//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import { HeroModule } from '@pxblue/angular-components/core/hero';
import { ChannelValueModule } from '@pxblue/angular-components/core/channel-value';

//material modules
import {MatDividerModule} from '@angular/material/divider'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card'; 
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    //pxblue
    NgProgressIconsModule,
    ChannelValueModule,
    HeroModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
