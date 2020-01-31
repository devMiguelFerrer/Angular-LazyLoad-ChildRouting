import { DocumentComponent } from './document/document.component';
import { VideoComponent } from './video/video.component';
import { MusicComponent } from './music/music.component';
import { TabsComponent } from './tabs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: TabsComponent, children: [
      { path: '', component: MusicComponent },
      { path: 'video', component: VideoComponent },
      { path: 'document', component: DocumentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
