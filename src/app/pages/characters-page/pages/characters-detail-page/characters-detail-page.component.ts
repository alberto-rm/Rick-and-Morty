import { ActivatedRoute } from '@angular/router';
import { CharactersService } from './../../../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.scss']
})
export class CharactersDetailPageComponent implements OnInit {


  character: any;
  constructor(private route: ActivatedRoute, private charactersService:CharactersService) { }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      console.log(params.get('idCharacter'));
      const idCharacter = params.get('idCharacter');

      this.charactersService.getCharacter(idCharacter).subscribe((characterData) =>{
        console.log(characterData)
        this.character = characterData
      })
    })
}
}
