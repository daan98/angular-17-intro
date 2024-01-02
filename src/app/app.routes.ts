import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: ()=> import('./dashboard/pages/defer-options/defer-options.component')
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadChildren: () => import('./dashboard/pages/defer-views/defer-views.component')
            },
            {
                path: 'user/:id',
                title: 'User',
                loadChildren: () => import('./dashboard/pages/user/user.component')
            },
            {
                path: 'user-list',
                title: 'Users List',
                loadChildren: () => import('./dashboard/pages/users/users.component')
            },
            {
                path: 'view-transition',
                title: 'View Transition',
                loadChildren: () => import('./dashboard/pages/view-transition/view-transition.component')
            },
            {
                path: '**',
                redirectTo: 'control-flow'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
