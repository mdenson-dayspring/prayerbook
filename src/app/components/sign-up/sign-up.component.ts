import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  googleAuthenticate() {
    this.authService.googleAuth()
     .pipe(
      take(1),
      catchError((error) => {
        this.snackBar.open(`${error.message} ?`, 'Close', {
          duration: 4000,
        });
        return EMPTY;
      }),
    )
    .subscribe(
      (response) => {
        if (response) {
          this.snackBar.open(
            `Here is your prayerlist for today.`,
            'Close',
            {
              duration: 4000,
            },
          );
          setInterval(() => this.router.navigate(['/dashboard']), 0);
        }
      });
  }

}
