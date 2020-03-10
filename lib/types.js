
const MongoLib = require('./helpers/mongolib');
const { ObjectID } = require("mongodb");
let MongoDB = new MongoLib()
const types = {
  Course:{
    project: async ({project}) => {
      console.log("---------------------------")
      const ids = project ? project.map(id => ObjectID(id)):[]
      console.log("projects:",project,"ids:",ids)
      const data = ids.length > 0 ? await MongoDB.getAll('projects',{_id:{$in:ids}}) : []
      
      if(!data)  throw new Error('Erorr de parametros :C') 
      return data
    }
  }
}
module.exports = types