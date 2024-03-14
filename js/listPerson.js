
export default class ListPerson {
  listPerson = [];
  addPerson = function ( person) {
      this.listPerson.push(person);
  };

  deletePerson = function (index) {
      this.listPerson.splice (index, 1);

  };

  updatePerson = function (person, index) {
      this.listPerson[index] = person;
  }
}