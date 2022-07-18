import {
 Injectable
} from '@angular/core';
import {
 HttpClient,
//  HttpHeaders,
//  HttpInterceptor,
} from '@angular/common/http';
import { environment 
} from '../environments/environment'



@Injectable()
export class ApiService {
 // private httpOptions;
 private apiURL;


 constructor(
  private http: HttpClient,
 ) {

   this.apiURL= environment.apiURL;

 }


 getItems() {
  return this.http.get(this.apiURL + '/api/dashboard/');
 }
}