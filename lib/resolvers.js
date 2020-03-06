// const courses = [
//   {
//     name:'graphQL',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan justo eget eleifend tempus. Suspendisse non dui semper, venenatis lectus id, elementum velit. ',
//     teacher:'Jose A.',
//     topic:'Programing'
//   },
//   {
//     name:'Vuejs',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan justo eget eleifend tempus. Suspendisse non dui semper, venenatis lectus id, elementum velit. ',
//     teacher:'Jesus A.',
//     topic:'Programing'
//   },
//   {
   
//     name:'Gravity Design',
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan justo eget eleifend tempus. Suspendisse non dui semper, venenatis lectus id, elementum velit. ',
//     teacher:'Erick',
//     topic:'Diseño'
//   }
// ]
const {ObjectID} = require('mongodb')
const connectDB = require('./db')
console.log("goola")
module.exports = {
  
  Query:{
    hello: () => 'Hello world!',
    welcome: () => 'welcome graphQL!', 
    getCourses: async () => {
      let db
      let courses = []
      try {
        db = await connectDB()
        courses = await db.collection('projects').find().toArray()
      } catch (error) {
        console.error(error)
      }
      return courses
    },
    getCourse: async (root,{id}) => {
      let db
      let course
      try {
        db = await connectDB()
        course = await db.collection('projects').findOne({_id:ObjectID(id)})
      } catch (error) {
        console.error(error)
      }
      return course
    }
  }
 
}