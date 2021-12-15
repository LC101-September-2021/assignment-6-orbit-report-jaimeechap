import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	selected: string [];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }
//  countTotal(myCount: number): number {
//  	let counter = 0;
//  		for (const satellite of satellites) {
// 	if (this.satellites.name === '0') counter++;
//  }
 
 	countTotal(count: number): number {
		 for (let i = 0; i < this.satellites.length; i++)
		 return count[i]++
	 }
 	// countTotal(count: number) : number {
	// 	if (this.satellites) {
	// 		for (let i = 0; i <this.satellites.length; i++) {
	// 			if (this.satellites[i])
	// 		}
	// 	}
	//  }


}