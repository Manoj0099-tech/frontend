import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  searchname:string="";
  players:any;
  constructor(){
    this.players=[{"name":"MS-Dhoni","Team":"india","nooffours":350,"noofsix":650,"others":5000,"DOB":"3/1/1974"},
    {"name":"rocky","Team":"Aus","nooffours":450,"noofsix":850,"others":5600,"DOB":"3/1/1972"},
    {"name":"abdul","Team":"pak","nooffours":250,"noofsix":750,"others":9000,"DOB":"3/1/1970"},
    {"name":"patcummines","Team":"Aus","nooffours":150,"noofsix":450,"others":7000,"DOB":"3/1/1975"},
    {"name":"sachin","Team":"india","nooffours":550,"noofsix":550,"others":6000,"DOB":"3/1/1968"},{"name":"MS-Dhoni","Team":"india","nooffours":350,"noofsix":650,"others":5000,"DOB":"3/1/1974"},
    {"name":"rocky","Team":"Aus","nooffours":450,"noofsix":850,"others":5600,"DOB":"3/1/1972"},
    {"name":"abdul","Team":"pak","nooffours":250,"noofsix":750,"others":9000,"DOB":"3/1/1970"},
    {"name":"patcummines","Team":"Aus","nooffours":150,"noofsix":450,"others":7000,"DOB":"3/1/1975"},
    {"name":"sachin","Team":"india","nooffours":550,"noofsix":550,"others":6000,"DOB":"3/1/1968"},{"name":"MS-Dhoni","Team":"india","nooffours":350,"noofsix":650,"others":5000,"DOB":"3/1/1974"},
    {"name":"rocky","Team":"Aus","nooffours":450,"noofsix":850,"others":5600,"DOB":"3/1/1972"},
    {"name":"abdul","Team":"pak","nooffours":250,"noofsix":750,"others":9000,"DOB":"3/1/1970"},
    {"name":"patcummines","Team":"Aus","nooffours":150,"noofsix":450,"others":7000,"DOB":"3/1/1975"},
    {"name":"sachin","Team":"india","nooffours":550,"noofsix":550,"others":6000,"DOB":"3/1/1968"},{"name":"MS-Dhoni","Team":"india","nooffours":350,"noofsix":650,"others":5000,"DOB":"3/1/1974"},
    {"name":"rocky","Team":"Aus","nooffours":450,"noofsix":850,"others":5600,"DOB":"3/1/1972"},
    {"name":"abdul","Team":"pak","nooffours":250,"noofsix":750,"others":9000,"DOB":"3/1/1970"},
    {"name":"patcummines","Team":"Aus","nooffours":150,"noofsix":450,"others":7000,"DOB":"3/1/1975"},
    {"name":"sachin","Team":"india","nooffours":550,"noofsix":550,"others":6000,"DOB":"3/1/1968"},{"name":"MS-Dhoni","Team":"india","nooffours":350,"noofsix":650,"others":5000,"DOB":"3/1/1974"},
    {"name":"rocky","Team":"Aus","nooffours":450,"noofsix":850,"others":5600,"DOB":"3/1/1972"},
    {"name":"abdul","Team":"pak","nooffours":250,"noofsix":750,"others":9000,"DOB":"3/1/1970"},
    {"name":"patcummines","Team":"Aus","nooffours":150,"noofsix":450,"others":7000,"DOB":"3/1/1975"},
    {"name":"sachin","Team":"india","nooffours":550,"noofsix":550,"others":6000,"DOB":"3/1/1968"},
    ]
  }

}
