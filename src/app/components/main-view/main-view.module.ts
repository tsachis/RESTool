import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainViewComponent } from "./main-view.component";
import { Routing } from "./main-view.routes";
import { LoaderComponent } from "../loader/loader.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetComponent } from './get/get.component';
import { PutComponent } from './put/put.component';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldInputComponent } from '../input/field-input.component';
import { ArrayInputComponent } from '../input/array-input.component';
import { RowFilterPipe } from './row-filter.pipe';

@NgModule({
  imports: [CommonModule, Routing, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
  exports: [],
  declarations: [MainViewComponent, LoaderComponent, GetComponent, PutComponent, PostComponent, FieldInputComponent, ArrayInputComponent, RowFilterPipe],
  providers: [RowFilterPipe],
})
export class MainViewModule { }
