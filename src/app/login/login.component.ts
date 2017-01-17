import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
	selector: 'login-page',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(public af: AngularFire, public router: Router) {
	}
	loginGithub() {
		this.af.auth.subscribe(auth => {
			if (auth.github.uid) {
				this.af.auth.login();
				this.router.navigateByUrl('/dashboard');
			}
		});
	}
	login() {

	}
	logout() {
		this.af.auth.logout();
	}
}
