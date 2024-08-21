import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankerService {

  constructor(
    
  ) { }

  processInProgress = new BehaviorSubject<boolean>(false);
  processQuantity = new BehaviorSubject<number>(0);
  recurseQuantity = new BehaviorSubject<number>(0);
  recurses = new BehaviorSubject<any>(null);


  currentProcess$ = this.processInProgress.asObservable();
  currentTotalProcess$ = this.recurseQuantity.asObservable();
  currentRecurses$ = this.recurseQuantity.asObservable();
  currentCreatedRecurses$ = this.recurses.asObservable();


  updateProcessStatus(status: boolean){
    this.processInProgress.next(status);
  }
  setTotalProcessQuantity(quantity : number){
    this.processQuantity.next(quantity);
  }
  setRecurseQuantity(quantity : number){
    this.recurseQuantity.next(quantity);
  }
  setRecurses(recurses : any){
    this.recurses.next(recurses);
  }

  
}