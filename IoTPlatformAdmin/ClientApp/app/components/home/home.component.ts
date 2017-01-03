import { Component, OnInit } from '@angular/core';

import { UserPreferences } from '../../models/userPreferences';

import { AuthService } from '../../services/auth.service';
import { TranslateService } from 'ng2-translate';
import { ThemeService } from '../../services/theme.service';
import { UserPreferencesService } from '../../services/userPreferences.service';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {

    //userPreferences: UserPreferences;
    userPreferences: any;

    constructor(
        private authService: AuthService,
        private translateService: TranslateService,
        private userPreferencesService: UserPreferencesService,
        private themeService: ThemeService
    ) { }


    ngOnInit(): void {
        this.getUserPreferences(); 
    }

    //OBS!!! Uncomment code below when API works
    getUserPreferences(): void {
        // If no user preferences exists in local storage, then call API to get user preferences.
        if (localStorage.getItem('userPref') === null) {

            //Uncomment code when API works
            /*
            this.userPreferencesService.getUserPreferences().subscribe(
                userPreferences => {
                    this.userPreferences = userPreferences;
                    this.translateService.use(userPreferences.language);
                    this.themeService.changeTheme(userPreferences.theme);
                    localStorage.setItem('userPref', JSON.stringify(userPreferences));
                },
                error => {
                    console.log(error);
                });
            */

            // Remove these of lines code when API works
            let userPreferences = this.userPreferencesService.getUserPreferences();
            this.userPreferences = userPreferences;
            this.translateService.use(userPreferences.language);
            this.themeService.changeTheme(userPreferences.theme);
            localStorage.setItem('userPref', JSON.stringify(userPreferences));


        } else {
            // Otherwise read user preferences from local storage 
            this.userPreferences = JSON.parse(localStorage.getItem('userPref'));
            this.themeService.changeTheme(this.userPreferences.theme);
            this.translateService.use(this.userPreferences.language);
        }

    }

    
}
