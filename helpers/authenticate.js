import { verify } from "jsonwebtoken";
import UserModel from "database/models/User";

const authenticate = async (authToken, throwError) => {
  const verifiedToken = verify(
    authToken,
    process.env.JWT_SECRET_KEY,
    function (error, token) {
      if (error) throwError("User not logged in", 401);
      return token;
    }
  );

  const foundUser = await UserModel.findById(verifiedToken._id).populate(
    "snippets"
  );
  if (!foundUser) throwError("User account does not exist", 401);

  return foundUser;
};

export default authenticate;
