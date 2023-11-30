import { Component } from '@angular/core';
import { UniversiteService } from 'src/app/service/universite.service';
import { Universite } from 'src/app/models/universite';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent {
  universite:Universite=new Universite();
  constructor(private us:UniversiteService , private ac:ActivatedRoute, private _router:Router){}
  ngOnInit(){
    const idUniversite = this.ac.snapshot.params['iduniveriste'];
    this.us.getUniversiteById(idUniversite).subscribe(
      (universite: Universite) => {
        this.universite = universite;
      },
      (error) => {
        console.log("erreur");
      }
    );
  }
  addUniversite(){
    this.us.addUniversiteFromDb(this.universite).subscribe(()=>this._router.navigateByUrl("universites/list"));
  }

}
