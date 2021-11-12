import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

const httpHeaders = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    })
};

const apiUrl = environment.apiUrl;
// const apiUrl = 'http://localhost:8000/api';

@Injectable({
    providedIn: 'root',
})
/**
 * user service class
 */
export class UserService {

    users: any[] = [];

    constructor(private http: HttpClient) {
        const user = {
            userId: 1, userName: 'admin', password: 'admin', emailId: 'admin@admin.com', birthDate: '10/28/1992'
        };
        this.users.push(user);
    }

    /**
     * get user by user name and password
     * @param userName of user
     * @param password of user
     */
    getUserByUserNameAndPassword(userName: string, password: string): User {
        let user!: User;
        this.users.forEach(element => {
            if (element.userName === userName && element.password === password) {
                user = element;
            }
        });
        return user;
    }

    /**
     * add new user
     * @param userName of suer
     * @param password of suer
     * @param emailId of suer
     * @param birthDate of suer
     */
    addUser(userName: string, password: string, emailId: string, birthDate: string): boolean {
        const userId = this.users.length + 1;
        let user!: User;
        user.id = userId;
        user.username = userName;
        user.password = password;
        user.email = emailId;
        user.birthDate = birthDate;
        this.users.push(user);
        return true;
    }
      /* handel error of api */
  // tslint:disable-next-line:typedef
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**   user creating service
     * @param user of suer
   */
  createUser(user: any): Observable<any> {
    const url = `${apiUrl}/user/add`;
    return this.http.post<User>(url, user).pipe(
      tap(() => console.log()),
    );
  }

  login(data: User): Observable<User> {
    const url = `${apiUrl}/token`;
    return this.http.post<User>(url, data).pipe(
      tap(() => console.log()),
    );
  }

  /*  send pdf user service
    *
   */
  sendPdf(format: any): Observable<User> {
    const url = `${apiUrl}/upload`;
    return this.http.post<User>(url, format).pipe(
      tap(() => console.log()),
    );
  }
  /*  update user service
    * @param user
   */
  updateUser(user: User): Observable<User> {
    const url = `${apiUrl}/user/edit/${user.id}/`;
    return this.http.post<User>(url, user).pipe(
      tap(() => console.log()),
    );
  }
  /* delete user service
  * @param User
  */
  deleteUser(user: User): Observable<User> {
    const url = `${apiUrl}/remove/${user.id}/`;
    return this.http.get<User>(url).pipe(
      tap(() => console.log()),
    );
  }
  /*  get all user service
  * @param User
   */
  getUsers(): Observable<User[]> {
    const url = `${apiUrl}/users`;
    return this.http.get<User[]>(url)
      .pipe(
        tap(() => console.log()),
      );
  }

  /*  get user by id
  * @param User
   */
  getUser(id: number): Observable<User> {
    const url = `${apiUrl}/user/${id}`;
    return this.http.get<User>(url).pipe(
      tap(() => console.log()),
    );
  }
}
