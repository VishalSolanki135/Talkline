import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';
import { AutoUnsubscribe } from '../unsubscribe';
import { EventEmitterService } from'../event-emitter.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
@AutoUnsubscribe
export class SidebarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public events: EventEmitterService
  ) { }

  ngOnInit(){
    let userDataEvent = this.events.getUserData.subscribe((user)=>{
      this.userId = user._id;
      this.besties = user.besties;
      this.enemies = user.enemies;
    });
    this.subscriptions.push(userDataEvent);
  }


  public userId = "";
  private subscriptions = [];

  public besties = [];
  public enemies = [];

}
