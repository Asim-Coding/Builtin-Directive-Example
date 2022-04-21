import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employee = [
    {id:1, name:'ali', age:23, salary:99000, designation:'officer'},
    {id:2, name:'Ahmed', age:24, salary:79000, designation:' web officer'},
    {id:3, name:'Bilal', age:25, salary:89000, designation:'app officer'},
    {id:4, name:'Raza', age:26, salary:95000, designation:'game officer'},
    {id:5, name:'Waqar', age:27, salary:59000, designation:'native officer'},
  ]

}