import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.css'],
})
export class EnqueteComponent implements OnInit {
  selectedState: any = null;
    
        states: any[] = [
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
        ];
    
        cities1: any[] = [];
        
        cities2: any[] = [];
        
        city1:any = null;
    
        city2:any = null;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  valider() {
    this.router.navigateByUrl('/home');
  }
}
