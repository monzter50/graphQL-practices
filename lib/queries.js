const MongoLib = require('./helpers/mongolib');
let MongoDB = new MongoLib()
module.exports = {
  getCourses:async ()=>{
    const data = await MongoDB.getAll('courses')
    return data || []; 
  },
  getCourse: async (root, { id }) => {
    const data = await MongoDB.get('courses',id)
    return data || []; 
  },
  getEvents: async () => {
    const data = await MongoDB.getAll('projects')
    return data || []; 
  },
  getEvent: async (root, { id }) => {
    const data = await MongoDB.get('projects',id)
    return data || []; 
  }
};