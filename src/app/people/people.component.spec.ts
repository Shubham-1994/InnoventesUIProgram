import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponent } from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let rooms: number;
  let adults: number;
  let children: number;
  let person: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(()=>{
    rooms = 1;
    adults = 1;
    children = 0;
    person = 1;
    component = new PeopleComponent();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment rooms on addRoom method', () => {
    component.numberOfRooms = rooms;
    component.addRoom();
    expect(component.numberOfRooms).toBe(2);
  });
  it('should decrement rooms on minusRoom method', () => {
    component.numberOfRooms = 2;
    component.minusRoom();
    expect(component.numberOfRooms).toBe(1);
  });
  it('should increment adult and person on addAdult method', () => {
    component.numberOfAdults = adults;
    component.numberOfPersons = person;
    component.addAdult();
    expect(component.numberOfAdults).toBe(2);
    expect(component.numberOfPersons).toBe(2);
  });
  it('should decrement adult and person on minusAdult method', () => {
    component.numberOfAdults = 2;
    component.numberOfPersons = 2;
    component.minusAdult();
    expect(component.numberOfAdults).toBe(1);
    expect(component.numberOfPersons).toBe(1);
  });
  it('should increment children and person on addChildren method', () => {
    component.numberOfChildren = children;
    component.numberOfPersons = person;
    component.addChildren();
    expect(component.numberOfChildren).toBe(1);
    expect(component.numberOfPersons).toBe(2);
  });
  it('should decrement children and person on minusChildren method', () => {
    component.numberOfChildren = 1;
    component.numberOfPersons = 2;
    component.minusChildren();
    expect(component.numberOfChildren).toBe(0);
    expect(component.numberOfPersons).toBe(1);
  });
});
