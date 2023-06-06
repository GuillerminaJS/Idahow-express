import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, default: null },
  surname: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  rol: { type: String, enum: ['STANDARD', 'ADMIN'], default: 'STANDARD' },
  token: { type: String },
});

const Users = mongoose.model('Users', usersSchema);
export default Users;