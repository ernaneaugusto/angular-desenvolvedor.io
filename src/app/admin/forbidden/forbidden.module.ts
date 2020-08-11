import { NgModule } from '@angular/core';
import { ForbiddenComponent } from './forbidden.component';
import { CommonModule } from '@angular/common';
import { ForbiddenRoutingModule } from './forbidden.routing.module';

@NgModule({
    declarations: [
        ForbiddenComponent
    ],
    imports: [
        CommonModule,
        ForbiddenRoutingModule
    ],
    exports: [
        ForbiddenComponent
    ]
})

export class ForbiddenModule { }