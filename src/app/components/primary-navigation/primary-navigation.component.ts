import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.scss']
})
export class PrimaryNavigationComponent {
  user$: Observable<User> = this.authService.user$;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) {}


  logout() {
    this.authService.signOut()
    .pipe(take(1))
    .subscribe(() => {
      setTimeout(() => this.router.navigate(['sign-in']), 0);
      this.snackBar.open('Come back tomorrow.', 'Close', {
        duration: 4000
      });
    });
  }
}
