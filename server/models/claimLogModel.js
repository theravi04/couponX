import mongoose from 'mongoose';

const claimLogSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  cookie: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('ClaimLog', claimLogSchema);
