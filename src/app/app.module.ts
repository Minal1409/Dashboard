import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { StatsCardComponent } from './views/dashboards/common/stats-card/stats-card.component';
import { ApiService } from './api.service'
import { ViewsModule } from './views/views.module';
import { ErrorModule } from './views/errors/error.module';

// import { Map1Component } from './views/maps/map1/map1.component';
// import { ModalsComponent } from './views/modals/modals.component';
// import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
// import { Profile1Component } from './views/profile/profile1/profile1.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';

// main layout

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: StatsCardComponent },
    ]
  },
  // { path: 'profiles', children:
  //   [
  //     { path: 'profile1', component: Profile1Component },
  //   ]
  // },
  // { path: 'tables', children:
  //   [
  //     { path: 'table1', component: BasicTableComponent },
  //   ]
  // },
  // { path: 'maps', children:
  //   [
  //     { path: 'map1', component: Map1Component},
  //   ]
  // },

  // { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    // NavigationModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
 
    ViewsModule,
    ErrorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

     ToastrModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
