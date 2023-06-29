// class, getters, setters

/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(nm) {
    this._name = nm;
  }

  get name() {
    return this._name;
  }

  set length(l) {
    this._length = l;
  }

  get length() {
    return this._length;
  }

  set students(stds) {
    this._students.push(stds);
  }

  get students() {
    return this._students.pop();
  }
}
