import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public data: any[] = [
    { name: 'John Doe', email: 'johndoe@example.com' },
    { name: 'Jane Doe', email: 'janedoe@example.com' },
    { name: 'Peter Jones', email: 'peterjones@example.com' },
    { name: 'Virat', email: 'virat@example.com' }
  ];
  ngOnInit(): void {
    
  }  

  exportToExcel() {
    const ws = XLSX.utils.json_to_sheet(this.data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws, 'Placeholder');

    XLSX.writeFile(wb, 'UserList.xlsx')
  }
}
