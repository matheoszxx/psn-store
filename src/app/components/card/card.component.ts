import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	//para linkar essa propriedade no HTML do card faremos um DataBiding na tag img no HTML
	@Input()
	gameCover:string=""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string=""
	@Input()
	gamePrice:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
