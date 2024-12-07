import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export interface User {
  id?: string;
  name: string;
  email: string;
}
