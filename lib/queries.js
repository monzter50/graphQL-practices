const connectDb = require("./db");
const { ObjectID } = require("mongodb");
module.exports = {
  getCourses: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDb();
      courses = await db
        .collection("courses")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  getCourse: async (root, { id }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db.collection("courses").findOne({ _id: ObjectID(id) });
    } catch (error) {
      console.error(error);
    }

    return course;
  },
  getProjects: async () => {
    let db;
    let projects = [];

    try {
      db = await connectDb();
      projects = await db
        .collection("projects")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return projects;
  },
  getProject: async (root, { id }) => {
    let db;
    let project;

    try {
      db = await connectDb();
      project = await db.collection("projects").findOne({ _id: ObjectID(id) });
    } catch (error) {
      console.error(error);
    }
    return project;
  }
};