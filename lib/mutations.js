const MongoLib = require('./helpers/mongolib');
let MongoDB = new MongoLib()
module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: "",
      topic: ""
    };
    const newCourse = Object.assign(defaults, input);
    await MongoDB.create('courses',newCourse)
    return newCourse ; 

  },
  updateCourse: async (root, { _id, input }) => {
    let course = await MongoDB.update('courses',_id,input)
    return course;
  },
  deleteCourse: async (root, { _id }) => {
     await MongoDB.delete('courses',_id)
     let course = await MongoDB.get('courses',id)
      return course || [];
  },
  createEvent: async (root, { input }) => {
    const defaults = {
      name: "",
      url: ""
    };
    const newProject = Object.assign(defaults, input);
    await MongoDB.create('courses',newProject)
    return newProject;
  },
  updateEvent: async (root, { _id, input }) => {
    let project =  await MongoDB.update('projects',_id,input)
    return project;
  },
  deleteEvent: async (root, { _id }) => {
    await MongoDB.delete('projects',_id)
    let project = await MongoDB.get('projects',id)
     return project || [];
  },
  addProject: async (root, {_courseID,_projectID})=>{
    let course = await MongoDB.get('courses',_courseID)
    let project = await MongoDB.get('projects',_projectID)
    if(!course || !project) throw new Error('No existe ninguno de los parametros :C')
    await MongoDB.addProject('courses',_projectID,_courseID)
    return course;
  }
  
};
