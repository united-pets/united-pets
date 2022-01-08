import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  iduser : Number = 0
  firstName: String = ''
  lastName:String = ''
  email:String = ''
  phoneNumber :String= ''
  adress:String= ''
  imageUrl:String= ''
  thumbnail : String = ''
  path : string = ''
  profile=profile
  // profile = []
  


  constructor(private http : HttpClient,private af:AngularFireStorage) {  }
    




  uplode(event : any ){
  this.path = event.target.files[0]
  
  console.log(this.path);

  }

  uploadThumbnail() {    
    this.af
    .upload('path' + Math.random() + this.path, this.path)
    .then((response) => {
      console.log('response :', response);
      response.ref.getDownloadURL().then((res) => {
        console.log(res);
        this.path = res;
        this.imageUrl=res
        console.log("hhh",this.imageUrl)
      });
    });
}
  // getuserData() {
  //    var iduser = this.iduser;
  //   this.http.put(`http://localhost:3000/user/:${this.iduser}`).subscribe( (result) => {
  //         this.firstName = this.firstName;
  //         this.lastName = this.lastName;
  //         this.email = this.email;
  //         this.adress = this.adress;
  //         this.imageUrl = this.imageUrl;
  //         console.log('result :', result);
  //     });
  // }
  ngOnInit(): void {
    let y = localStorage.getItem('session') as string;
    this.iduser = JSON.parse(y)[0].iduser;
    console.log(y)
    // this.getuserData();
  }

      

}
