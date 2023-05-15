import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'balance', loadChildren: () => import('./balance/balance.module').then(m => m.BalanceModule), canActivate: [AuthGuard] } , 
{ path : 'gepbanking', loadChildren: () => import('./gepbanking/gepbanking.module').then(m => m.GepbankingModule), canActivate: [AuthGuard] } , 
{ path : 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule), canActivate: [AuthGuard] } , 
{ path : 'ssogitlogin', loadChildren: () => import('./ssogitlogin/ssogitlogin.module').then(m => m.SsogitloginModule), canActivate: [AuthGuard] } , 
{ path : 'searchsaleforce', loadChildren: () => import('./searchsaleforce/searchsaleforce.module').then(m => m.SearchsaleforceModule), canActivate: [AuthGuard] } , 
{ path : 'updatesales', loadChildren: () => import('./updatesales/updatesales.module').then(m => m.UpdatesalesModule), canActivate: [AuthGuard] } , 
{ path : 'createsales', loadChildren: () => import('./createsales/createsales.module').then(m => m.CreatesalesModule), canActivate: [AuthGuard] } , 
{ path : 'accountdetail', loadChildren: () => import('./accountdetail/accountdetail.module').then(m => m.AccountdetailModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
