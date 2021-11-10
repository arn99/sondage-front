import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sondage';
  items: MenuItem[] = [];
    constructor(private primengConfig: PrimeNGConfig, private router: Router) {}
    ngOnInit() {
        this.primengConfig.ripple = true;
      this.items = [
        {
            label:'Nouvel enquete',
            icon:'pi pi-plus pi-power-off',
            command: (event) => {
                //event.originalEvent: Browser event
                //vent.item: menuitem metadata
                this.router.navigateByUrl('/enquete');
            }
        }
    ];
  }
}
