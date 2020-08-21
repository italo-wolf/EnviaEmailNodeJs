import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({

  email:{
    type: String,
    required: true,
  },
  Telefone:{
    type: String,
    required: false,
  },
  conteudo:{
    type: String,
    required: true,
  },
  read:{
    type: Boolean,
    required:true,
    default: false,
  },
},{
  timestamps: true,
});

export default mongoose.model('Email', EmailSchema);
