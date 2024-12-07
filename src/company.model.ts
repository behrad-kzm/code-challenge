import { Schema } from 'mongoose';

export const CompanySchema = new Schema({
  name: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

export interface Company {
  id?: string; // Optional MongoDB ObjectId
  name: string;
  userId: string;
}
