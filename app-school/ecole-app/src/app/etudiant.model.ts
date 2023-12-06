export class Etudiant {
    _id?: string; 
    firstname: string;
    lastname: string;
    schoolclass: string;
  
    constructor(firstname: string, lastname: string, schoolclass: string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.schoolclass = schoolclass;
    }
  }