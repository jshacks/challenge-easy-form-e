import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {Form as D112} from './112/form';
import {Form as D390} from './390/form';
import {Form as D301} from './301/form';
import {Form as D220} from './220/form';
import {Form as D230} from './230/form';

@NgModule({
  declarations: [AppComponent, About, RepoBrowser, RepoList, RepoDetail, Home,
  D112,
  D390,
  D301,
  D220,
  D230
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
