import { Schema, Types, models, model } from "mongoose";

const userSchema = new Schema(
  {
    active: {
      type: Boolean,
      default: false,
    },
    ipAddress: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, "Username is required"],
      minLength: [2, "Username should atleast have 2 characters"],
      maxlength: [30, "Username cannot exceed 30 characters"],
      validate: {
        validator: function (value) {
          return /^[a-z][\w\.]*[a-z0-9]$/i.test(value);
        },
        message:
          "Username is invalid, It cannot contain special characters or multiple spaces",
      },
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, "Email is required"],
      minLength: [5, "Email should atleast have 5 characters"],
      maxlength: [60, "Email cannot exceed 60 characters"],
      validate: {
        validator: function (value) {
          return /^([a-z\d][\w\-\.]+[a-z\d])@([a-z\d]([a-z\d-]*[a-z\d])*)\.([a-z]+(\.[a-z]{2,6})?)$/i.test(
            value
          );
        },
        message: "Email format is invalid",
      },
    },
    name: {
      type: String,
      trim: true,
      minLength: [4, "Name should atleast have 4 characters"],
      maxlength: [40, "Name cannot exceed 40 characters"],
      default: null,
      validate: {
        validator: function (value) {
          return /^([a-z\d]+\s)*[a-z\d]+$/i.test(value);
        },
        message:
          "Name format is invalid, It cannot contain special characters or multiple spaces",
      },
    },
    description: {
      type: String,
      trim: true,
      maxlength: [150, "Decription cannot exceed 150 characters"],
      default: "Welcome to my profile check out my snippets",
    },
    snippets: [
      {
        type: Types.ObjectId,
        ref: "Snippet",
      },
    ],
  },
  { timestamps: true }
);

export default models.User || model("User", userSchema);
