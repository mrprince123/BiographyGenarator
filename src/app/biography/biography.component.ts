import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  biographyCreatedStatus = '';
  isBiographyCreated = false;


  name = '';
  skills = '';
  postdegree = '';
  experience = '';
  orgination = '';
  collage = '';
  year = '';
  degree = '';
  spacility = '';
  award = '';
  years = '';

  ChangeBiographyCreatedStatus() {
    this.isBiographyCreated = true;
    this.biographyCreatedStatus = "";
  }

  

  onUpdateName(event : Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onUpdateSkills(event : Event) {
    this.skills = (event.target as HTMLInputElement).value;
  }

  onUpdatePostdegree(event : Event) {
    this.postdegree = (event.target as HTMLInputElement).value;
  }

  onUpdateExperience(event : Event) {
    this.experience = (event.target as HTMLInputElement).value;
  }

  onUpdateOrgination(event : Event) {
    this.orgination = (event.target as HTMLInputElement).value;
  }

  onUpdateCollage(event : Event) {
    this.collage = (event.target as HTMLInputElement).value;
  }

  onUpdateYear(event : Event) {
    this.year = (event.target as HTMLInputElement).value;
  }

  onUpdateDegree(event : Event) {
    this.degree = (event.target as HTMLInputElement).value;
  }


  onUpdateSpacility(event : Event) {
    this.spacility = (event.target as HTMLInputElement).value;
  }

  onUpdateAward(event : Event) {
    this.award = (event.target as HTMLInputElement).value;
  }

  onUpdateYears(event : Event) {
    this.years = (event.target as HTMLInputElement).value;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
