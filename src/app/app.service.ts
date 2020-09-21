import { Injectable } from '@angular/core';

export class PopulationData {
    country: string;
    val: number;
}

export class PopulationByRegion {
    region: string;
    val: number;
}
export class Data {
    day: string;
    oranges: number;
}
export class tabData{
    val : string;
}



let data: Data[] = [{
    day: "1",
    oranges: 3
}, {
    day: "2",
    oranges: 2
}, {
    day: "3",
    oranges: 3
}, {
    day: "4",
    oranges: 4
}, {
    day: "5",
    oranges: 6
}, {
    day: "6",
    oranges: 11
}, {
    day: "7",
    oranges: 4
}, {
    day: "8",
    oranges: 11
},
, {
    day: "9",
    oranges: 7
}, {
    day: "10",
    oranges: 6
}, {
    day: "11",
    oranges: 9
}, {
    day: "12",
    oranges: 13
}, {
    day: "13",
    oranges: 2
}, {
    day: "14",
    oranges: 4
}, {
    day: "15",
    oranges: 10
}, {
    day: "16",
    oranges: 6
}, {
    day: "17",
    oranges: 9
}, {
    day: "18",
    oranges: 4
}, {
    day: "19",
    oranges: 3
}, {
    day: "20",
    oranges: 8
}, {
    day: "21",
    oranges: 9
}, {
    day: "22",
    oranges: 12
}, {
    day: "23",
    oranges: 14
}, {
    day: "24",
    oranges: 5
}, {
    day: "25",
    oranges: 3
}, {
    day: "26",
    oranges: 7
}, {
    day: "27",
    oranges: 9
}, {
    day: "28",
    oranges: 3
}, {
    day: "29",
    oranges: 10
}, {
    day: "30",
    oranges: 12
}];

let population: PopulationData[] = [
    { country: "Pzt", val: 2 },
    { country: "Sl", val: 1 },
    { country: "Çrş", val: 3 },
    { country: "Prş", val: 4.5 },
    { country: "Cm", val: 3.5 },
    { country: "Cmt", val: 4 },
    { country: "Pz", val: 3.8 }
];

let populationByRegions: PopulationByRegion[] = [{
    region: "Başarılı",
    val: 65
},
{
    region: "İptal",
    val: 35
},
];
let populationByRegionsUpsell: PopulationByRegion[] = [{
    region: "Normal satıs",
    val: 92
},
{
    region: "Daha fazla satıs",
    val: 8
},
];

let overlappingModes = ["stagger", "rotate", "hide", "none"];


@Injectable()
export class Service {
    public items;
    constructor(){
    }
    getPopulation(): PopulationData[] {
        return population;
    }
    getOverlappingModes(): string[] {
        return overlappingModes;
    }
    getPopulationByRegions(): PopulationByRegion[] {
        return populationByRegions;
    }
    getPopulationByRegionsUpsell(): PopulationByRegion[] {
        return populationByRegionsUpsell;
    }
    getData(): Data[] {
        return data;
    }
    changeData(data){
        this.items = data
        console.log(this.items)
    }
}
