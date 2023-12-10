import { Routes } from '@angular/router';

export const routes: Routes = [
    const routes: Routes = 
        { path : '' , component : HomeComponent},
        { path : "login" , component : LoginComponent},
        { path : "signUp" , component : SignUpComponent}
];
    
      
      @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }
