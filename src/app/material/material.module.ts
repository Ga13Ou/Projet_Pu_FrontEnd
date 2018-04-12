import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatTableModule,
  MatDatepickerModule,
  MatDialogModule,
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
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MaterialRoutes } from './material.routing';

import {AutocompleteDemoComponent} from './autocomplete/autocomplete-demo';
import {ButtonToggleDemoComponent} from './button-toggle/button-toggle-demo';
import {ButtonDemoComponent} from './button/button-demo';
import {CardDemoComponent} from './card/card-demo';
import {CheckboxDemoComponent, MatCheckboxDemoNestedChecklistComponent} from './checkbox/checkbox-demo';
import {ChipsDemoComponent} from './chips/chips-demo';
import {DatepickerDemoComponent} from './datepicker/datepicker-demo';
import {ContentElementDialogComponent, DialogDemoComponent, IFrameDialogComponent, JazzDialogComponent} from './dialog/dialog-demo';
import {DrawerDemoComponent} from './drawer/drawer-demo';
import {ExpansionDemoComponent} from './expansion/expansion-demo';
import {GridListDemoComponent} from './grid-list/grid-list-demo';
import {InputDemoComponent} from './input/input-demo';
import {ListDemoComponent} from './list/list-demo';
import {MenuDemoComponent} from './menu/menu-demo';
import {ProgressBarDemoComponent} from './progress-bar/progress-bar-demo';
import {ProgressSpinnerDemoComponent} from './progress-spinner/progress-spinner-demo';
import {RadioDemoComponent} from './radio/radio-demo';
import {RippleDemoComponent} from './ripple/ripple-demo';
import {SelectDemoComponent} from './select/select-demo';
import {SlideToggleDemoComponent} from './slide-toggle/slide-toggle-demo';
import {SliderDemoComponent} from './slider/slider-demo';
import {SnackBarDemoComponent} from './snack-bar/snack-bar-demo';
import {StepperDemoComponent} from './stepper/stepper-demo';
import {LayoutModule} from '@angular/cdk/layout';
import {FoggyTabContentComponent, RainyTabContentComponent, SunnyTabContentComponent, TabsDemoComponent} from './tabs/tabs-demo';
import {ToolbarDemoComponent} from './toolbar/toolbar-demo';
import {TooltipDemoComponent} from './tooltip/tooltip-demo';
import {TypographyDemoComponent} from './typography/typography-demo';
import {TableDemoModule} from './table/table-demo-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatNativeDateModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,

    LayoutModule,
    TableDemoModule,

    CdkTableModule,
    A11yModule,
    BidiModule,
    CdkAccordionModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer},
  ],
  declarations: [
    AutocompleteDemoComponent,
    ButtonDemoComponent,
    ButtonToggleDemoComponent,
    CardDemoComponent,
    CheckboxDemoComponent,
    ChipsDemoComponent,
    ContentElementDialogComponent,
    DatepickerDemoComponent,
    DialogDemoComponent,
    DrawerDemoComponent,
    ExpansionDemoComponent,
    FoggyTabContentComponent,
    GridListDemoComponent,
    IFrameDialogComponent,
    InputDemoComponent,
    JazzDialogComponent,
    ListDemoComponent,
    MatCheckboxDemoNestedChecklistComponent,
    MenuDemoComponent,
    ProgressBarDemoComponent,
    ProgressSpinnerDemoComponent,
    RadioDemoComponent,
    RainyTabContentComponent,
    RippleDemoComponent,
    SelectDemoComponent,
    SliderDemoComponent,
    SlideToggleDemoComponent,
    SnackBarDemoComponent,
    StepperDemoComponent,
    SunnyTabContentComponent,
    TabsDemoComponent,
    ToolbarDemoComponent,
    TooltipDemoComponent,
    TypographyDemoComponent,
  ],
  entryComponents: [
    ContentElementDialogComponent,
    IFrameDialogComponent,
    JazzDialogComponent
  ],
})

export class MaterialComponentsModule {}
