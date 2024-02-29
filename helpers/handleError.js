const handleError = (error, res) => {
  let statusCode = error.statusCode || 500;
  let name = error.name || "InternalServerError";
  let message = error.message || "An unknown error occurred";

  if (name == "MongoServerError") {
    if (error.code == 11000)
      return res.status(400).json({
        success: false,
        message: `${Object.keys(error.keyValue)[0]} already exists`,
      });
    else
      return res.status(500).json({
        success: false,
        message: "Database server error",
      });
  }

  if (name == "ValidationError")
    return res.status(400).json({
      success: false,
      message: Object.values(error.errors)[0].message,
    });

  res.status(statusCode).json({ success: false, message });
};

export default handleError;
