import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersDetailsPage } from './users-details.page';
import { UsersPage } from './users.page';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { FormsModule } from '@angular/forms';
import { DeactivateGuard } from 'src/app/deactivate.guard';

const routes: Routes = [
  {
    canActivate:[AuthGuard],
    path: '',
    component: UsersPage,
    canActivateChild:[AuthGuard],
    children: [
      {
        path: ':id',
        component: UsersDetailsPage,
      },
    ],
  }

];

@NgModule({
  declarations: [UsersPage, UsersDetailsPage],
  imports: [CommonModule, RouterModule.forChild(routes),FormsModule],
})
export class UsersModule {}
