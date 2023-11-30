import { Component } from '@angular/core';
import { Universite } from 'src/app/models/universite';
import { UniversiteService} from 'src/app/service/universite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent {
  liste:Universite[]=[];
  universite:Universite=new Universite();

  universitrtoupdate:Universite={
    iduniveriste:0,
    nomUniversite:"",
    addresse:"",
    foyer:""
  };
  constructor(private router:Router, private us1:UniversiteService){}
  ngOnInit(){
    this.fetchuniversite()
   }
  
    fetchuniversite(){
      this.us1.getUniversiterFromDB().subscribe((res:Universite[])=>this.liste=res);
    }

  deleteUniversite(event:any , universite:Universite){
    if(confirm('est ce que vous voulez vraiment supprimer')){
      event.target.innerText="Deleting..."

      this.us1.deleteUniversiteFromDb(universite.iduniveriste).subscribe(()=> this.fetchuniversite());
    }
   
  }
  information(universite:Universite){
    this.universitrtoupdate=universite;
  }  
 
  updateUniversite(){
    this.us1.UpdateUniversite(this.universitrtoupdate).subscribe(
    ()=>this.router.navigateByUrl("universites/list"));
  }

}
