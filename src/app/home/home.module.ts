import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { LeftSideMenuComponent } from '../components/left-side-menu/left-side-menu.component';
import { ProductNewComponent } from '../components/product-new/product-new.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TopBarComponent, TopNavComponent, LeftSideMenuComponent, ProductNewComponent]
})
export class HomePageModule {}
