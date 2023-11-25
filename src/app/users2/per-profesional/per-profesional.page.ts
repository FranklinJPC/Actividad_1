import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';



@Component({
  selector: 'app-per-profesional',
  templateUrl: './per-profesional.page.html',
  styleUrls: ['./per-profesional.page.scss'],
})
export class PerProfesionalPage implements OnInit {
  canDismiss = false;
  presentingElement: Element | null = null;

  
  constructor() { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }


}


