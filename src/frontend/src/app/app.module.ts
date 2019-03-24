import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/layout/notfound/notfound.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotauthorizedComponent } from './components/layout/notauthorized/notauthorized.component';
import { LogoutComponent } from './components/layout/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { EventviewComponent } from './components/eventsview/eventview.component';
import { RegistertermsComponent } from './components/register/registerterms/registerterms.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { ResourceDefinition, NgrxJsonApiModule } from 'ngrx-json-api';
import { UsersComponent } from './components/users/users.component';
import { EventModule } from './components/events/event.module';
import { EventRoutingModule } from './components/events/event-routing.module';
import { FormsModule } from '@angular/forms';    
import { UserService } from './services/user.service';

const resourceDefinitions: Array<ResourceDefinition> = [
  { type: 'User', collectionPath: 'users' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NotfoundComponent,
    LayoutComponent,
    HeaderComponent,
    LoginComponent,
    NotauthorizedComponent,
    LogoutComponent,
    AdminComponent,
    RegistertermsComponent,
    UsersComponent,
    EventviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    EventRoutingModule,
    AppRoutingModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { }),
    EffectsModule.forRoot([]),
    NgrxJsonApiModule.configure({
      apiUrl: 'http://localhost:8000/api/v1',
      resourceDefinitions
    }),
    EventModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RegistertermsComponent,
  ],
})
export class AppModule {}
