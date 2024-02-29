import { Schema, Types, models, model } from "mongoose";

export const snippetSchema = new Schema(
  {
    category: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Category is required"],
      enum: {
        values: ["javascript", "python", "java", "c"],
        message: "{VALUE} is not supported category",
      },
    },
    title: {
      type: String,
      trim: true,
      maxlength: [250, "Title cannot exceed 250 characters"],
      required: [true, "Title is required"],
      validate: {
        validator: function (value) {
          return /^([a-z\d]+\s)*[a-z\d]+$/i.test(value);
        },
        message:
          "Title format is invalid, It cannot contain special characters or multiple spaces",
      },
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Slug is required"],
      validate: {
        validator: function (value) {
          return /^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(value);
        },
        message: "Slug format is invalid",
      },
    },
    code: {
      type: String,
      unique: true,
      trim: true,
      maxlength: [100000, "Code cannot exceed 100000 characters"],
      required: [true, "Code is required"],
    },
    output: {
      type: String,
      trim: true,
      maxlength: [10000, "Output cannot exceed 10000 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [4000, "Description cannot exceed 4000 characters"],
    },
    creator: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "Creator is required"],
    },
  },
  { timestamps: true }
);

export default models.Snippet || model("Snippet", snippetSchema);
