import { Component, OnInit } from '@angular/core';
import {
 ToastrService
} from 'ngx-toastr';
import {
 ApiService
} from '../../../../api.service';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {

	

  constructor( 
  	private apiService: ApiService,
  	private toastr: ToastrService,
  	) { }
  dashboards: any[]
  filteredItems: any[]
  test_values: any[]


  ngOnInit() {
  	 this.test_values=[{
  		url: "https://www.google.com",
  		name:'TEST1',
  		description:'TEST GOOGLE URL-22 chars max'
  	},
	{
  		name:'TEST2',
  		description:'TEST YOUTUBE URL',
  		url: "https://www.youtube.com"
  	},{
  		url: "https://www.google.com",
  		name:'TEST1',
  		description:'TEST GOOGLE URL-22 chars max'
  	},
	{
  		name:'TEST2',
  		description:'TEST YOUTUBE URLdewkjfec efjkdnrjkldio;sl',
  		url: "https://www.youtube.commnd efkjlefuirgewjvs"
  	},{
  		url: "https://www.google.com",
  		name:'TEST1',
  		description:'TEST GOOGLE URL-22 chars max'
  	},
	{
  		name:'TEST2',
  		description:'TEST YOUTUBE URL',
  		url: "https://www.youtube.com"
  	},{
  		url: "https://www.google.com",
  		name:'TEST1',
  		description:'TEST GOOGLE URL-22 chars max'
  	},
	{
  		name:'TEST2',
  		description:'TEST YOUTUBE URL',
  		url: "https://www.youtube.com"
  	}
  	]
  	this.dashboards = this.test_values

  this.apiService.getItems().subscribe((items:any= []) => {
  	console.log(items);
  	if(items.length != 0){
  		this.test_values=items
  	this.dashboards = items	;
  }
  }, () => {
   this.toastr.error("error.error.error_msg");
  });
  }

 //  addItem(){
 //  	console.log(this.item)
 //  	this.apiService.addDevice(this.device).subscribe((data:any= []) => {
 //  		this.toastr.success("Devuce is added successfully");
 //        this.router.navigate([`/device-list`])
 //      }, (error) => {
 //   this.toastr.error(error.error.error_msg);
 //  });
 //  }

 //   deleteDevice(id) {
 // 	console.log(id)
 //    this.apiService.deleteDevice(id).subscribe((res:any= []) => {
 //        this.toastr.success("Device deleted successfully");
 //        this.apiService.getDeviceList().subscribe((devices:any= []) => {
 //  	console.log(devices);
 //  	this.dataSource.data = devices	;
 //  }, (error) => {

 //        this.router.navigate([`/device-list`])
 //    });
 //  }, (error) => {
 //   this.toastr.error(error.error.error_msg);
 //  });
 // }
applyFilter(filterValue: string) {
	var filtered : any = []
	 console.log(filterValue)
	 this.dashboards=this.test_values
		filterValue=filterValue.trim().toLowerCase()
    this.dashboards.filter( function(item) {
    	// console.log(item.description.toLowerCase().indexOf(filterValue))
    	if (item.name.toLowerCase().indexOf(filterValue) >=0 || item.description.toLowerCase().indexOf(filterValue) >=0){
    		filtered.push(item)
    	}
    });
    // console.log(filtered)
    this.dashboards=filtered

  }



}
