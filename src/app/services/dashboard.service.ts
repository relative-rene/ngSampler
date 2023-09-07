import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

export class DashboardService {
  public projectHistory:Set<string> = new Set();

  constructor() { }
  getHistory(){
    console.log('projectHistory ', this.projectHistory)
    return this.projectHistory;
  }
  getLastVisit(){
    return this.projectHistory[this.projectHistory.size -1];
  }
  updateHistory(latest:string){
    this.projectHistory.add(latest)
  }
}

