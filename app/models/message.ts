import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);
const Message =
  mongoose.models.Feedbacks || mongoose.model("Feedbacks", messageSchema);
  
export default Message;
