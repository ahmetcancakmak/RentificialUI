import { Component, Input, OnInit } from '@angular/core';
import { Service, PopulationData, PopulationByRegion,Data,tabData } from '../app.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [Service],
})
export class DetailsComponent implements OnInit {
  @Input() parentToChildData=[];
  service: Service;
  countries: Iterable<string>;
  pipe: any = new DecimalPipe("en-US");
  population: PopulationData[];
  currentMode: string;
  overlappingModes: string[];
  populationByRegions: PopulationByRegion[];
  populationByRegionsUpsell: PopulationByRegion[];
  dataSource: Data[];

  constructor(service: Service) {
    this.population = service.getPopulation();
    this.currentMode = service.getOverlappingModes()[0];
    this.overlappingModes = service.getOverlappingModes();
    this.populationByRegions = service.getPopulationByRegions();
    this.populationByRegionsUpsell = service.getPopulationByRegionsUpsell();
    this.dataSource = service.getData();
  }
  customizeTooltip = (arg: any) => {
    return {
        text: arg.valueText + " - " + this.pipe.transform(arg.percent, "1.2-2")
    };
  }
  customizeLabel(e) {
    return `${e.argumentText}\n${e.valueText}`;
  }

  calculateTotal(pieChart) {
    const totalValue = pieChart.getAllSeries()[0].getVisiblePoints().reduce((s, p) => s + p.originalValue, 0);
    return this.pipe.transform(totalValue, "1.0-0");
  }
  deleteTab(value){
    const index: number = this.parentToChildData.indexOf(value);
    this.parentToChildData.splice(index, 1);
  }
  deleteAllTabs(){
    this.parentToChildData = [];
  }


  ngOnInit(){
  }

}
