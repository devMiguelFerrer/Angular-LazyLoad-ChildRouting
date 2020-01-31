import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { MusicComponent } from './music/music.component';
import { VideoComponent } from './video/video.component';
import { DocumentComponent } from './document/document.component';


@NgModule({
  declarations: [TabsComponent, MusicComponent, VideoComponent, DocumentComponent],
  imports: [
    CommonModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
