import {Component, OnInit} from '@angular/core';
import {Api} from '../../services/api';
import {Iauthor} from '../../interfaces/iauthor';
import {Icovid} from '../../interfaces/icovid';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {

  covid: Icovid[] = [];

  constructor(private api: Api) {
  }

  ngOnInit() {
    this.GetAllAuthors();
  }

  GetAllAuthors() {
    this.api.GetAllAuthors().subscribe(data => {
      //Tjekker om der er data eller om den er undefined
      if(data[0] !== undefined) {
        this.covid = data; //Data indsættes i authors array
        console.log(this.covid);
      } else {
        console.log("der er ikke noget data"); //intet data besked udskrives i console.
      }
    });
  }

}
