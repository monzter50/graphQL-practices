const connectDB = require(`./db`);
const { ObjectID } = require("mongodb");
module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: "",
      topic: ""
    };
    const newCourse = Object.assign(defaults, input);
    let db;
    try {
      db = await connectDB();
      course = await db.collection("courses").insertOne(newCourse);
      newCourse._id = course.insertedId;
    } catch (err) {
      console.error(err);
    }
    return newCourse;
  },
  updateCourse: async (root, { _id, input }) => {
    let course;
    let db;
    try {
      db = await connectDB();
      await db
        .collection("courses")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });
      course = await db.collection("courses").findOne({ _id: ObjectID(_id) });
    } catch (err) {
      console.error(err);
    }
    return course;
  },
  deleteCourse: async (root, { _id }) => {
    let course;
    let db;
    try {
      db = await connectDB();
      await db.collection("courses").deleteOne({ _id: ObjectID(_id) });
      course = await db.collection("courses").findOne({ _id: ObjectID(_id) });
    } catch (err) {
      console.error(err);
    }
    return course;
  },
  createProject: async (root, { input }) => {
    const defaults = {
      name: "",
      url: ""
    };
    const newProject = Object.assign(defaults, input);
    let db;
    try {
      db = await connectDB();
      project = await db.collection("projects").insertOne(newProject);
      newProject._id = project.insertedId;
    } catch (err) {
      console.error(err);
    }
    return newProject;
  },
  updateProject: async (root, { _id, input }) => {
    let project;
    let db;
    try {
      db = await connectDB();
      await db
        .collection("projects")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });
        project = await db.collection("projects").findOne({ _id: ObjectID(_id) });
    } catch (err) {
      console.error(err);
    }
    return project;
  },
  deleteProject: async (root, { _id }) => {
    let project;
    let db;
    try {
      db = await connectDB();
      await db.collection("projects").deleteOne({ _id: ObjectID(_id) });
      project = await db.collection("projects").findOne({ _id: ObjectID(_id) });
    } catch (err) {
      console.error(err);
    }
    return project;
  },
  addProject: async (root, {_courseID,_projectID})=>{
    let db;
    let project;
    let course;
    try {
      db = await connectDB();
      project = await db.collection("projects").findOne({ _id: ObjectID(_projectID) });
      course = await db.collection("courses").findOne({ _id: ObjectID(_courseID) });
      if(!course || !project) throw new Error('No existe ninguno de los parametros :C')

      await db.collection('courses').updateOne({ _id: ObjectID(_courseID) }, { $addToSet: {
        project: ObjectID(_projectID)
      } });
    } catch (err) {
      console.error(err);
    }
    return course;
  }
  
};
