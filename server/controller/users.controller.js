import UserModel from "../model/user.model.js";

export const signupUser= async (req,res)=>{
try{
   const user=req.body;
   const newUser=  new UserModel(user)
   await newUser.save()
   return res.status(200).send("Signup Successful")

}
catch(e){
    console.log(e.message)
    return res.status(500).send("Internal Server Error")
}
}