import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private token!: string;

	constructor(private http: HttpClient) { }

	registerUser(user: User): Observable<User> {
		return this.http.post<User>(
			'http://localhost:8080/mon-application/auth/addNewUser',
			user
		);
    
	}
	login(name: string, password: string) {
		const authRequest = { name, password };
		return this.http.post(
			'http://localhost:8080/mon-application/auth/generateToken',
			authRequest,
			{ responseType: 'json' }
		);
	}
	setToken(token: string): void {
		this.token = token;
		// Optionally, you can save the token to localStorage or other storage mechanisms
		localStorage.setItem('token', token);
	}
	getToken(): string {
		if (!this.token) {
      //update here 		this.token = localStorage.getItem('token')
			this.token = localStorage.getItem('token')??'';
		}
		return this.token;
	}

	logout(): void {
		this.token = '';
		localStorage.removeItem('token');
	}

	isAuthenticated(): boolean {
		return !!this.getToken();
	}

	getUserProfile(): Observable<User> {
		const profileEndpoint =
			'http://localhost:8080/mon-application/auth/user/userProfile';

		// Set the Authorization header with the token.
		const headers = { "Authorization": 'Bearer ' + this.getToken() };

		return this.http.get<User>(profileEndpoint, { headers });
	}
	getAdminProfile(): Observable<User> {
		const profileEndpoint =
			'http://localhost:8080/mon-application/auth/admin/adminProfile';

		const headers = { "Authorization": 'Bearer ' + localStorage.getItem('token'),
		 };
		return this.http.get<User>(profileEndpoint, { headers });
	}
}
