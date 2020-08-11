import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden.component';

const forbiddenRoutes: Routes = [
    { path: '', component: ForbiddenComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(forbiddenRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ForbiddenRoutingModule { }