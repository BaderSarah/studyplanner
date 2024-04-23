// import Course from "./Course.js";

export default class CoursesRepository {
  #courses = [];

  addCourse(name) {
    this.#courses.push(new Course(name));
  }

  giveCourse(name) {
    return this.#courses.find((c) => c.name == name);
  }

  giveAllCoursesNames() {
    return [...new Set(this.#courses.map((c) => c.name))].sort();
  }

  get courses() {
    return this.#courses;
  }
}
