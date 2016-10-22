import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';

import {Form as D112} from './112/form';
import {Form as D390} from './390/form';
import {Form as D301} from './301/form';
import {Form as D220} from './220/form';
import {Form as D230} from './230/form';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},

  {path: 'd112', component: D112},
  {path: 'd390', component: D390},
  {path: 'd301', component: D301},
  {path: 'd220', component: D220},
  {path: 'd230', component: D230},
  
  // {path: 'github', component: RepoBrowser,
  //   children: [
  //     {path: '', component: RepoList},
  //     {path: ':org', component: RepoList,
  //       children: [
  //         {path: '', component: RepoDetail},
  //         {path: ':repo', component: RepoDetail}
  //       ]
  //     }]
  // }
];

