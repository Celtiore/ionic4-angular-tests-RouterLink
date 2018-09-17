#   Ionic 4 - Angular - Tests RouterLink
#
# Ionic:

   ionic (Ionic CLI)          : 4.1.2 (/usr/local/lib/node_modules/ionic)
   Ionic Framework            : @ionic/angular 4.0.0-beta.7
   @angular-devkit/core       : 0.7.5
   @angular-devkit/schematics : 0.7.5
   @angular/cli               : 6.1.5
   @ionic/ng-toolkit          : 1.0.8
   @ionic/schematics-angular  : 1.0.6

# Cordova:

   cordova (Cordova CLI) : 8.0.0
   Cordova Platforms     : none
   Cordova Plugins       : no whitelisted plugins (0 plugins total)

# System:

   Android SDK Tools : 26.1.1 (/Volumes/Données/Android)
   NodeJS            : v8.11.4 (/usr/local/bin/node)
   npm               : 6.4.1
   OS                : macOS

# Objectif 
Combine ion-tabs and split pane

# Tests
origin : ionic blank starter

    -   1/ Home -> Single page with back button : OK
    -   2/ Home -> First Tab1 with 2 tabs : OK
    -   3/ Home -> Second Tab 2 with 2 tabs : OK
    -   4/ Home -> First Split Pane 1 with 2 pages : OK

    -   4*/ Inside Split Pane 1 -> Tabs 3
    -       but only footer is shown

    -   5/ Home -> Second Split Pane with 2 pages : OK

##

I need help to configure correctly 4*/ and verify my Routes.

thanks you

You can Try on Stackblitz : 

https://stackblitz.com/github/Celtiore/ionic4-angular-tests-RouterLink

    -   you need to install @angular/compiler

    -   On Split Pane : <ion-menu-button> prsent but not visible ?!

Thanks you