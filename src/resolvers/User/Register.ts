import { Request } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";

export default {
  register: async (
    _: void,
    {
      username,
      email,
      password,
      confirmPassword,
      firstName,
      lastName
    }: {
      username: string,
      email: string;
      password: string;
      confirmPassword: string;
      firstName: string;
      lastName:string;
    },
    { req }: { req: Request }
  ) => {
      const hashedPassword = await bcrypt.hash(password, 12);
      if(password != confirmPassword){
        return {
          user: null,
          error:{
            field:["password"],
            message:"password mismatch"
          },
        };
      }

      const checkEmail: User | undefined = await User.findOne({ where: { email } });
      if(checkEmail){
        return {
          user: null,
          error:{
            field:["email"],
            message:"Email exist"
          },
        };
      }

      const checkUser: User | undefined = await User.findOne({ where: { username } });
      if(checkUser){
        return {
          user: null,
          error:{
            field:["username"],
            message:"User with this name exist"
          },
        };
      }

      const resp:any = await User.create({
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword,
        confirmed: true
      }).save();


      if (resp.error) {

        return {
          user: null,
          error: {
            field:[""],
            message: resp.error.message
          },
        };
      } 

      // await sendEmail(
      //   username,
      //   email,
      //   await createConfirmationUrl(resp.id)
      // );

      return {
        user: resp.User,
        error: null,
      };
    
  },
};
