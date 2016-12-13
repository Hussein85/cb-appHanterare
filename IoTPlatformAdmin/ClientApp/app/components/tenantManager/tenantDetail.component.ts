﻿import { Component, OnInit, ViewContainerRef, ViewEncapsulation  } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from 'ng2-translate';
import { ThemeService } from '../../services/theme.service';
import { TenantsService } from '../../services/tenants.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Overlay } from 'angular2-modal';

import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
    template: require('./tenantDetail.component.html'),
    styles: [require('./tenantDetail.component.css')]
})
export class TenantDetailComponent implements OnInit {

    tenant: any;
    version = "v1.1";
    versions = ["v0.9", "v1.1", "v1.2", "v1.3", "v1.4"];
    

    constructor(
        private auth: AuthService,
        private translateService: TranslateService,
        private themeService: ThemeService,
        private tenantsService: TenantsService,
        private route: ActivatedRoute,
        private router: Router,
        public modal: Modal,
        overlay: Overlay,
        vcRef: ViewContainerRef, 
    ) { overlay.defaultViewContainer = vcRef; }

    ngOnInit(): void {
        // Read user preferences from localstorage 
        var specificUserPreference = JSON.parse(localStorage.getItem('userPref'));
        this.themeService.changeTheme(specificUserPreference.theme);
        this.translateService.use(specificUserPreference.language);

        this.route.params.subscribe(params => {
            let id = params['id'];
            //this.getTenant(id);     
        });

        this.version = "v1.2";
    }

    getTenant(id) {
        this.tenantsService.getTenantById(id).subscribe(
            tenant => this.tenant = tenant);
    }

    onBack(): void {     
        this.router.navigate(['/tenantManager']);
    }


    delete() {
        //this.modal.alert()
        //    .size('lg')
        //    .showClose(true)
        //    .title('Confirm Tenant Deletion')
        //    .body(`
        //    <h4>Delete Tenant?</h4>
        //    <input type="text" [(ngModel)]="filterText" placeholder="Search..." /> 
        //    <i class="glyphicon glyphicon-search"></i>
        //    <ul>
        //        <li>Nodn blocking (click anywhere outside to dismiss)</li>
        //        <li>Size large</li>
        //        <li>Dismissed with default keyboard key (ESC)</li>
        //        <li>Close wth button click</li>
        //        <li>HTML content</li>
        //    </ul>`)
        //    .open();

    }



}


