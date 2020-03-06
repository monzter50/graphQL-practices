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
      course = await db.collection("projects").insertOne(newCourse);
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
        .collection("projects")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });
      course = await db.collection("projects").findOne({ _id: ObjectID(_id) });
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
      await db.collection("projects").deleteOne({ _id: ObjectID(_id) });
      course = await db.collection("projects").findOne({ _id: ObjectID(_id) });
    } catch (err) {
      console.error(err);
    }
    return course;
  }
};
