import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { ActivateGuard } from './guard/activate.guard';
// import { CanDeactiveAccount } from './guard/can.deactive';

export const routes: Routes = [
    
    { 
        path: 'customerdetails', 
        loadChildren: './customerdetails/customerdetails.module#CustomerdetailsModule'
    },
    {
        path: 'customerbenefits',
        loadChildren: './customerbenefits/customerbenefits.module#CustomerbenefitsModule'
    },
    {
        path: 'customerreview',
        loadChildren: './customerreview/customerreview.module#CustomerreviewModule'
    },
    { 
        path: '', 
        redirectTo: '', 
        pathMatch: 'full' 
    }
    
];

export const appRoutingProviders: any[] = [];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule {}

// export const appRoutingProviders: any[] = [];

// export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);