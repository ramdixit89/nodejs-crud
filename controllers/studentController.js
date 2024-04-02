import StudentModel from "../models/Student.js";
class studentController {
    
    static createDoc = async (req, res) =>{

       try {
        const {name, age, fees} = req.body;
        const doc = new StudentModel({
            name: name,
            age: age,
            fees: fees
        });
        //saving document in database
        const result = await doc.save();
        console.log(result);
        res.redirect('/student');
       } catch (error) {
         console.log(error);
       }

       /*  try {
            const { name, age, fees } = req.body;
            const newStudent = new StudentModel({
                name: name,
                age: age,
                fees: fees
            });
            await newStudent.save();
            res.redirect('/student');
        } catch (error) {
            console.error("Error creating document:", error);
            res.status(409).json({ message: error.message });
        }
        */
    }

    static getAllDoc = async (req, res) =>{
       try {
         const result = await StudentModel.find();
         res.render("index",{data : result})
        }catch (error) {
          console.log(error);
       }
       
    }
    
    //Show edit form with data
    static editDoc = async(req, res) =>{
        //console.log(req.params.id);
      try {
        const result = await StudentModel.findById(req.params.id);
        res.render("edit", {data: result})
      } catch (error) {
        console.log(error);
      }
    }

    
    static updateDocById = async (req, res) =>{
        // console.log(req.params.id)
        // console.log(req.body);

        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/student')
        } catch (error) {
            console.log(error);
        }
    }

    static deleteDocById = async(req, res) =>{
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id, req.body)
            res.redirect('/student')
        } catch (error) {
            console.log(error);
        }
    }

}
export default studentController; 
// export default {getAllDoc};