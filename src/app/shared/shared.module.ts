import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetModule } from './widget/widget.module';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { TipSideComponent } from './tipsidebar/tipsidebar.component';

@NgModule({
  declarations: [
    PagetitleComponent,
    TipSideComponent
  ],
  imports: [
    CommonModule,
    WidgetModule
  ],
  exports: [PagetitleComponent,
            TipSideComponent]
})
export class SharedModule { }
