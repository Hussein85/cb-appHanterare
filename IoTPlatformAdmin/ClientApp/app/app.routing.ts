﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { TenantsComponent } from './components/tenants/tenants.component'
import { TenantDetailComponent } from './components/tenants/tenantDetail.component'

import { AuthGuardUser } from './auth.guard';
import { AuthGuardAdmin } from './auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardUser]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardAdmin]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardUser]
    },
    {
        path: 'tenants',
        component: TenantsComponent,
        canActivate: [AuthGuardUser]
    },
    {
        path: 'tenant/:id',
        component: TenantDetailComponent,
        canActivate: [AuthGuardUser]
    } 

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

