import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent {
  prod_clicked:any;
  constructor(private dataService: DataServiceService, private router: Router) {
    this.dataService = dataService;
    this.prod_clicked = this.dataService.prod_clicked;
    this.save(this.prod_clicked);
  }

  
  lotno_v = 0; lotsize_v = 0; issued_v = ""; prepared_v = ""; checked_v = ""; approved_v = "";
  saveBatch(lotno: any, lotsize: any, issued: any, checked: any, approved: any) {
    this.dataService.lotno_v = lotno;
    this.dataService.lotsize_v = lotsize;
    this.dataService.issued_v = issued;
    this.dataService.checked_v = checked;
    this.dataService.approved_v = approved;
    
  }
  saveRM(rm: any, stdQ: any, ar1: any, ar2: any, reqQ: any, issQ: any) {
    this.dataService.rmDetails.push({
      rm: rm, stdQ: stdQ, ar1: ar1, ar2: ar2, reqQ: reqQ, issQ: issQ
    });
  }
  allRMs: any[] = [];
  currentDate = new Date();
  empDetails: any[] = [];
  save(prod_clicked:any){
    this.empDetails.push("Dhiraj", "Milan", "Dharmendra", "Mayank")

    if(prod_clicked=="FERROUS ASCORBATE"){
      this.allRMs.push({ name: "Ferrous Gluconate", quantity: 25 }, { name: "Calcium Carbonate", quantity: 8 },
      { name: "Citric  Acid", quantity: 25 }, { name: "Deionized  Water", quantity: 65 })
    }
    else if(prod_clicked=="RIBOFLAVIN"){
      this.allRMs.push({ name: "Isopropanol", quantity: 25 }, { name: "PBr3", quantity: 32 },
      { name: "Imidazole", quantity: 48 }, { name: "Niacin", quantity: 12 }, { name: "Butanol", quantity: 185 })
    }
  }

  reload(){
    location.reload()
  }
}