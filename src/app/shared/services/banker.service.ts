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
  process = new BehaviorSubject<any>(null);
  recurseQuantity = new BehaviorSubject<number>(0);
  recurses = new BehaviorSubject<any>(null);


  currentProcess$ = this.processInProgress.asObservable();
  currentTotalProcess$ = this.recurseQuantity.asObservable();
  currentArrayProcess$ = this.process.asObservable();
  currentRecurses$ = this.recurseQuantity.asObservable();
  currentCreatedRecurses$ = this.recurses.asObservable();


  updateProcessStatus(status: boolean){
    this.processInProgress.next(status);
  }
  setTotalProcessQuantity(quantity : number){
    this.processQuantity.next(quantity);
  }
  setProcess(process : any){
    this.process.next(process);
  }
  setRecurseQuantity(quantity : number){
    this.recurseQuantity.next(quantity);
  }
  setRecurses(recurses : any){
    this.recurses.next(recurses);
  }

  
}