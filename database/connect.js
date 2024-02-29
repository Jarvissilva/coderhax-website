import { set, connections, connect } from "mongoose";
import throwError from "helpers/throwError";

import UserModel from "database/models/User";
import SnippetModel from "database/models/Snippet";

const connectDatabase = async () => {
  set("strictQuery", false);
  if (connections[0].readyState) return;
  return connect(process.env.DATABASE_CONNECTION_URI).catch(() =>
    throwError("Could not connect to the database", 500)
  );
};

export default connectDatabase;
