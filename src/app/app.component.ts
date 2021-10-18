import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

    
declare items: MenuItem[];

ngOnInit() {
  this.primengConfig.ripple = true;
    this.items = [
        {

            routerLink:"inicio",
            icon:"pi pi-home",
        },
        {
            label:'ROPA',
            icon:"pi pi-users",

            items:[
                {
                    label:'MUJER',
                    routerLink:"mujer",
                    icon:"pi pi-star-o",

                },
                {
                    label:'HOMBRE',
                    routerLink:"hombre",
                    icon:"pi pi-star-o",

                },
                {
                    label:'NIÑOS',
                    routerLink:"kids",
                    icon:"pi pi-star-o",

                },
           ]
        },
        {
            label:'COMPLEMENTOS',
            routerLink:"complementos",
            icon:"pi pi-star",

        },

    ];
}

}

