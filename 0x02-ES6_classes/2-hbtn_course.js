// class, getters, setters

/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  // name: String, length: Number, students: array of Strings
  constructor(name, length, students) {
    // checkname:
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // check length:
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    // check array:
    students.forEach((stdt) => {
      if (typeof stdt !== 'string') {
        throw new TypeError('Student must be a string');
      }
    });

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nm;
  }

  get name() {
    return this._name;
  }

  set length(l) {
    if (typeof l !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = l;
  }

  get length() {
    return this._length;
  }

  set students(stdt) {
    if (typeof stdt !== 'string') {
      throw new TypeError('Student must be a string');
    }
    this._students.push(stdt);
  }

  get students() {
    return this._students.pop();
  }
}
