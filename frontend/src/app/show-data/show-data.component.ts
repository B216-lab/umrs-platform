import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-show-data',
  imports: [
    NgxChartsModule,
  ],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.scss'
})
export class ShowDataComponent {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
}
