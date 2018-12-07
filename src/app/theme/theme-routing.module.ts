import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'index',
                'loadChildren': '.\/pages\/dashboard\/overview\/overview.module#DashBoardOverViewModule',
            },
            {
                'path': 'stream',
                'loadChildren': '.\/pages\/streams\/overview\/overview.module#StreamsOverViewModule',
            },
            {
                'path': 'analytics-overview',
                'loadChildren': '.\/pages\/analytics\/overview\/overview.module#AnalyticsOverViewModule',
            },
            {
                'path': 'api-overview',
                'loadChildren': '.\/pages\/api\/overview\/overview.module#APIOverViewModule',
            },
            {
                'path': 'settings-account',
                'loadChildren': '.\/pages\/settings\/myaccount\/myaccount.module#SettingsMyAccountModule',
            },
            {
                'path': 'settings-billing',
                'loadChildren': '.\/pages\/settings\/billing\/billing.module#SettingsBillingModule',
            },
            {
                'path': 'settings-communication',
                'loadChildren': '.\/pages\/settings\/communication\/communication.module#SettingsCommunicationModule',
            },
            {
                'path': 'support-faqs',
                'loadChildren': '.\/pages\/support\/faqs\/faqs.module#SupportFAQsModule',
            },
            {
                'path': 'support-ticket',
                'loadChildren': '.\/pages\/support\/ticket\/ticket.module#SupportTicketModule',
            },
            {
                'path': 'support-contact',
                'loadChildren': '.\/pages\/support\/contact\/contact.module#SupportContactModule',
            },
            {
                'path': '',
                'redirectTo': 'index',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'index',
        'pathMatch': 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }