const mongoose = require('mongoose');


//mongoose connection to databases........
const url= 'mongodb://localhost/Mydb';
mongoose.connect(url)
.then(() => console.log('Connected to MongoDB..'))
.catch(err => console.error('Could note connect to Mongo..', err))

const courseSchema = new mongoose.Schema({
        name:String,
        author:String,
        tag:[String],
        date:{type:Date, default:Date.now},
        isPublished:Boolean,
    });

const Course = mongoose.model('course',courseSchema);


//Function for save a ducoment
async function createCourse(){
    const course = new Course({
        name:'Mongo',
        author: 'suman',
        tag:['mongoes','Database'],
        isPublished: true
    });
const result = await course.save();
console.log(result);
}
// csll the createCourse function
//--- createCourse();

// Function for get a ducoment
async function getCourse(){
    const result=await Course.find(); 
    console.log(result)
}

// call getCourse Function

// getCourse();

// Function for Update 
async function updateCourse(id){
    const course = await Course.findById(id);
    if(!course) return;
    course.isPublished =true; 
    course.author='Mosh hamedi';

    const result=await course.save();
    console.log(result);

}
//call update Fuction
// updateCourse('6285f8472919ce5fdfd3f637')

async function removeCourse(id){
    // const result = await Course.deleteMany({_id: id})
    const result = await Course.findByIdAndRemove(id);
    console.log(result);
}
removeCourse('6285f8472919ce5fdfd3f637');