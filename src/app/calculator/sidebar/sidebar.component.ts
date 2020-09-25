import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  public calcHistory: {expression: string, value: number}[];

  constructor(
    private eventService: EventService
    ) {  }

  ngOnInit(): void {
  }

  public clickEventHandler(history: {expression: string, value: number}) {
    this.eventService.sidebarclick.emit(history);
  }

}
