import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService} from './_services/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider, ErrorInterceptor } from './_services/error.interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import {MemberEditResolver } from './_resolvers/member-edit.resolver';
import {PreventUnsavedChanges} from './_guards/prevent-unsaved-changes.guard';
import {PhotoEditorComponent} from './members/photo-editor/photo-editor.component';
import {ListsResolver} from './_resolvers/lists.resolver';



export function tokenGetter() {
  return localStorage.getItem('token');
}

// export class CustomHammerConfig extends HammerGestureConfig {
//   overrides = {
//     pinch: { enable: false},
//     rotates: { enable: false}
//   };
// }



@NgModule({
  declarations: [
     AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      },
    }),
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges,
    ListsResolver
    // { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
