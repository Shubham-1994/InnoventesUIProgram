import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  numberOfRooms: number;
  numberOfAdults: number;
  numberOfChildren: number;
  numberOfPersons: number;

  constructor() { }

  ngOnInit() {
    this.numberOfRooms = 1;
    this.numberOfAdults = 1;
    this.numberOfChildren = 0;
    this.numberOfPersons = this.numberOfAdults + this.numberOfChildren;
  }

  addRoom() {
    if (this.numberOfRooms == 5)
      return;
    this.numberOfRooms++;
    if (this.numberOfRooms > this.numberOfPersons) {
      this.addAdult();
    }
  }
  minusRoom() {
    if (this.numberOfRooms == 1)
      return;
    this.numberOfRooms--;
    if (this.numberOfPersons > this.numberOfRooms * 4) {
      if (this.numberOfAdults > this.numberOfRooms * 4) {
        this.numberOfAdults = this.numberOfRooms * 4;
        this.numberOfChildren = 0;
        this.numberOfPersons = this.numberOfAdults;
      }
      else {
        this.numberOfChildren = (this.numberOfRooms * 4) - this.numberOfAdults;
        this.numberOfPersons = this.numberOfAdults + this.numberOfChildren;

      }

    }
  }
  addAdult() {
    if (this.numberOfRooms == 5 && this.numberOfPersons == this.numberOfRooms * 4)
      return;
    if (this.numberOfPersons >= this.numberOfRooms * 4)
      this.addRoom();
    this.numberOfAdults++;
    this.numberOfPersons++;
  }
  minusAdult() {
    if (this.numberOfAdults == 1)
      return;
    if (this.numberOfPersons <= this.numberOfRooms)
      this.minusRoom();
    this.numberOfAdults--;
    this.numberOfPersons--;


  }
  addChildren() {
    if (this.numberOfRooms == 5 && this.numberOfPersons == this.numberOfRooms * 4)
      return;
    this.numberOfChildren++;
    this.numberOfPersons++;
    if (this.numberOfPersons > this.numberOfRooms * 4)
      this.addRoom();
  }
  minusChildren() {
    if (this.numberOfChildren == 0)
      return;
    this.numberOfChildren--;
    this.numberOfPersons--;
    if (this.numberOfPersons < this.numberOfRooms * 1)
      this.minusRoom();

  }

}
