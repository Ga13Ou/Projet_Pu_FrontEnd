import { Routes } from '@angular/router';

import {AutocompleteDemoComponent} from './autocomplete/autocomplete-demo';
import {ButtonToggleDemoComponent} from './button-toggle/button-toggle-demo';
import {ButtonDemoComponent} from './button/button-demo';
import {CardDemoComponent} from './card/card-demo';
import {CheckboxDemoComponent} from './checkbox/checkbox-demo';
import {ChipsDemoComponent} from './chips/chips-demo';
import {DatepickerDemoComponent} from './datepicker/datepicker-demo';
import {DialogDemoComponent} from './dialog/dialog-demo';
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
import {TABS_DEMO_ROUTES} from './tabs/routes';
import {TabsDemoComponent} from './tabs/tabs-demo';
import {ToolbarDemoComponent} from './toolbar/toolbar-demo';
import {TooltipDemoComponent} from './tooltip/tooltip-demo';
import {TypographyDemoComponent} from './typography/typography-demo';
import {TableDemoPageComponent} from './table/table-demo-page';
import {TABLE_DEMO_ROUTES} from './table/routes';

export const MaterialRoutes: Routes = [
  {
    path: '',
    children: [
      {path: 'autocomplete', component: AutocompleteDemoComponent},
      {path: 'button', component: ButtonDemoComponent},
      {path: 'button-toggle', component: ButtonToggleDemoComponent},
      {path: 'card', component: CardDemoComponent},
      {path: 'checkbox', component: CheckboxDemoComponent},
      {path: 'chips', component: ChipsDemoComponent},
      {path: 'datepicker', component: DatepickerDemoComponent},
      {path: 'dialog', component: DialogDemoComponent},
      {path: 'drawer', component: DrawerDemoComponent},
      {path: 'expansion', component: ExpansionDemoComponent},
      {path: 'grid-list', component: GridListDemoComponent},
      {path: 'input', component: InputDemoComponent},
      {path: 'list', component: ListDemoComponent},
      {path: 'menu', component: MenuDemoComponent},
      {path: 'progress-bar', component: ProgressBarDemoComponent},
      {path: 'progress-spinner', component: ProgressSpinnerDemoComponent},
      {path: 'radio', component: RadioDemoComponent},
      {path: 'ripple', component: RippleDemoComponent},
      {path: 'select', component: SelectDemoComponent},
      {path: 'slide-toggle', component: SlideToggleDemoComponent},
      {path: 'slider', component: SliderDemoComponent},
      {path: 'snack-bar', component: SnackBarDemoComponent},
      {path: 'stepper', component: StepperDemoComponent},
      {path: 'table', component: TableDemoPageComponent, children: TABLE_DEMO_ROUTES},
      {path: 'tabs', component: TabsDemoComponent, children: TABS_DEMO_ROUTES},
      {path: 'toolbar', component: ToolbarDemoComponent},
      {path: 'tooltip', component: TooltipDemoComponent},
      {path: 'typography', component: TypographyDemoComponent},
      {path: 'expansion', component: ExpansionDemoComponent},
      {path: 'stepper', component: StepperDemoComponent},
    ]
  }
];
