// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: String,
// });

class UserModel {
  // user = mongoose.model("user", userSchema);

  getUser(text1: string, text2: string) {
    // this.user.findById(id)
    console.log(`${text1} called db model user get from ${text2}`);
  }

  // saveUser(user: userSchema){
  //     this.user.save(user)
  // }
}

export default UserModel;
