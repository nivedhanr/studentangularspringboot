import { Component } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  
  name=""
  admno=""
  rollno=""
  college=""
  constructor(private api:ApiService) {}
  addemployee=()=>
  {
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
    console.log(data)
    this.api.addemployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {
          alert("Employee added successfully")
          
          this.name=""
          this.admno=""
          this.rollno=""
          this.college=""

          
         
        }else{
          alert("Something went wrong")
        }
      }
    )
  }
}
