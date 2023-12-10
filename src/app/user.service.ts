import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
<<<<<<< Updated upstream
=======
import { JwtHelperService } from '@auth0/angular-jwt';

>>>>>>> Stashed changes

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private token!: string;

<<<<<<< Updated upstream
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
=======
	constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }

	registerUser(user: User): Observable<User> {
		return this.http.post<User>(
			'http://localhost:8080/auth/register',
			user
		);
	}

	getUser(){
		const token = this.getToken();
		const user = new User();
		const decryptedToken = this.jwtHelper.decodeToken(token)['sub'].split(",");
	
		user.id = decryptedToken[0].split("=")[1].split();
		user.cin = decryptedToken[6].split("=")[1];
		user.name = decryptedToken[1].split("=")[1];
		user.prenomEt = decryptedToken[5].split("=")[1];
		user.email = decryptedToken[2].split("=")[1];
		user.dataNaissance = decryptedToken[8].split("=")[1];
		user.ecole = decryptedToken[7].split("=")[1];
		user.roles = decryptedToken[4].split("=")[1];
		user.password = decryptedToken[3].split("=")[1];

		return user;
	}

	login(username: string, password: string) {
		const authRequest = { username, password };
		return this.http.post(
			'http://localhost:8080/auth/login',
>>>>>>> Stashed changes
			authRequest,
			{ responseType: 'json' }
		);
	}
	setToken(token: string): void {
		this.token = token;
<<<<<<< Updated upstream
		// Optionally, you can save the token to localStorage or other storage mechanisms
=======
>>>>>>> Stashed changes
		localStorage.setItem('token', token);
	}
	getToken(): string {
		if (!this.token) {
<<<<<<< Updated upstream
      //update here 		this.token = localStorage.getItem('token')
=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
	getUsersList(): Observable<any> {
		const usersEndpoint = 'http://localhost:8080/api/user/get-all';
		return this.http.post<any>(usersEndpoint,{"token":this.token},{ responseType: 'json' });
	}

	getUserById(id: number): Observable<any> {
		const userEndpoint = 'http://localhost:8080/api/user/get/' + id;
		return this.http.post<any>(userEndpoint,{"token":this.token},{ responseType: 'json' });
	}

	updateUser(user: User): Observable<User> {
		const updateProfileEndpoint = 'http://localhost:8080/api/user/update/' + user.id;
		const payload = {
			"token":this.token,
			"cin":user.cin,
			"name":user.name,
			"prenomEt":user.prenomEt,
			"email":user.email,
			"dataNaissance":user.dataNaissance,
			"ecole":user.ecole,
			"roles":user.roles,
		}
		return this.http.post<User>(updateProfileEndpoint,payload,{ responseType: 'json' });
	}

	deleteUser(id: number): Observable<any> {
		const deleteProfileEndpoint = 'http://localhost:8080/api/user/delete/' + id;
		return this.http.post(deleteProfileEndpoint,{"token":this.token},{ responseType: 'json' });
	}

>>>>>>> Stashed changes
}
