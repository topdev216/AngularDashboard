import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../../default/default.component';
import { StreamsOverViewComponent } from './overview.component';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': StreamsOverViewComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
    ], exports: [
        RouterModule,
    ], declarations: [
        StreamsOverViewComponent,
    ],
})
export class StreamsOverViewModule {
}