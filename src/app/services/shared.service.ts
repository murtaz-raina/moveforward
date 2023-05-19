// import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SuccessMessage } from 'src/app/models/shared.model';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // private readonly apiUrl = environment.apiUrl;

  isSubscribeFormSubmitted = false;

  // constructor(private httpClient: HttpClient) {}

 
 

    subscribe(email: string|null): Observable<SuccessMessage> {
        return new Observable((observer) => {
            setTimeout(()=>{
                observer.next({ message: email+' is added' });
                observer.complete();
            },5000)
           
          });
    }

    // subscribe(email: string|null): Observable<SuccessMessage> {
    // return this.httpClient.post<SuccessMessage>(`${this.apiUrl}/v1/subscribe`, {
    //   email,
    // });
  // }
}

