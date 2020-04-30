import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { RestService} from './rest.service'

import {count} from './count'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]

})
export class AppComponent implements OnInit {
  title = 'Frontend';
// }
// export class ValidationDemo implements OnInit {

  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  Condition:any;
  // vnum= null;
  public vnum : any ;
  
  constructor(private fb: FormBuilder, private messageService: MessageService , private _data:RestService) {}

  ngOnInit() {
      this.Condition=true;
      this.userform = this.fb.group({
          'Email-Id': new FormControl('', Validators.required),
          'firstname': new FormControl('', Validators.required),
          'lastname': new FormControl('', Validators.required),
          'Experience': new FormControl('',),
          'company': new FormControl('',),
          'description': new FormControl(''),
          'collage': new FormControl(''),
          'stream': new FormControl(''),
          // 'gender': new FormControl('', Validators.required)
          'gender':"Male"
      });

      this.genders = [];
      this.genders.push({label:'Select Gender', value:''});
      this.genders.push({label:'Male', value:'Male'});
      this.genders.push({label:'Female', value:'Female'});
  }

  onSubmit(value: string) {
      this.submitted = true;
      this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});


      this._data.sendMail(this.userform.value).subscribe((data: {}) => {
        
        console.log(data)
        this.messageService.add({ severity: 'success', summary: 'Message Send', detail: 'Sucessfull' });
        
      }),
        (err: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Message Failed', detail: 'Please try again.' });
  
        };
      // this.vnum=this.vnum+1
      
  }

  get diagnostic() { return JSON.stringify(this.userform.value);
                      this.userform=null }


  handleClick(value: any){
    // this.Condition=true
    // this.vnum=55
   

    this._data.total_resume().subscribe((data:{})=>{
                                            console.log(JSON.parse(JSON.stringify(data)).key)
                                            
                                            

                                            this.vnum=JSON.parse(JSON.stringify(data)).key})


    // .subscribe((data: {}) => {
    //   this.messageService.add({ severity: 'success', summary: 'Message Send', detail: 'Sucessfull' });

    // }),
    //   (err: HttpErrorResponse) => {
    //     this.messageService.add({ severity: 'error', summary: 'Message Failed', detail: 'Please try again.' });

    //   };


  }

}