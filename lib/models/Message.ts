import mongoose, { Schema, models, model } from "mongoose";

export interface IMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip?: string;
  createdAt: Date;
}

const MessageSchema = new Schema<IMessage>({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, maxlength: 200 },
  subject: { type: String, required: true, trim: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  ip: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default models.Message || model<IMessage>("Message", MessageSchema);

// Prevent unused-import lint issues in isolated builds
export type _MongooseType = typeof mongoose;
