import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';
import { ArticleComponent } from '../components/article/article.component';
import { TestScrollComponent } from '../components/test-scroll/test-scroll.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule,
  ],
  declarations: [TestPage, ArticleComponent, TestScrollComponent]
})
export class TestPageModule {}
