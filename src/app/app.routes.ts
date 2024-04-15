import { Routes } from '@angular/router';
import {authGuard } from './guards/auth.guard';
import { HomeComponent } from './Components/home/home.component'; 
import { LoginComponent } from './Components/login/login.component'; 
import { EmployeeComponent } from './Components/employee/employee.component'; 
import { RoleGuard } from './guards/role.guard';
import { AdminComponent } from './Components/admin/admin.component';
import { ManagerComponent } from './Components/manager/manager.component';
import { PasswordUpdateComponent } from './Components/password-update/password-update.component';
import { CompetenceComponent } from './Components/competence/competence.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

export const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [authGuard] 
  }, 
  { 
    path: 'profile/password-update', 
    component: PasswordUpdateComponent
  }, // Route pour la page "Password Update"
  { 
    path: 'profile/update', 
    component: EmployeeComponent
  },
  { 
    path: 'employee', 
    component: EmployeeComponent, 
    canActivate: [authGuard, RoleGuard], 
    data: { 
      roles: ['Employé'] 
    } 
  },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [authGuard, RoleGuard], 
    data: { 
      roles: ['Admin'] 
    } 
  },
  { 
    path: 'manager', 
    component: ManagerComponent, 
    canActivate: [authGuard, RoleGuard], 
    data: { 
      roles: ['Manager'] 
    } 
  },
  {
    path: 'employee/:username', 
    component: EmployeeComponent, 
    canActivate: [authGuard]
  },
  {
    path: 'employee/:username/update', 
    component: EmployeeComponent, 
    canActivate: [authGuard]
  },
  { 
    path: 'password-update', 
    component:PasswordUpdateComponent
  },
  {
    path:'competence',
    component: CompetenceComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
 
];