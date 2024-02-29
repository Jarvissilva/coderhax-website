import connectDatabase from "database/connect";
import throwError from "helpers/throwError";
import handleError from "helpers/handleError";

const handleApi = (handler) => async (req, res) => {
  try {
    await connectDatabase();
    await handler(req, res, throwError);
  } catch (error) {
    handleError(error, res);
  }
};

export default handleApi;
