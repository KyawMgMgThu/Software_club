import { Document, Schema, model, models } from "mongoose";

export interface Announcement extends Document {
  _id: string;
  title: string;
  description?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  url?: string;
  organizer: { _id: string, username: string }
}

const AnnouncementSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  url: { type: String },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Announcement = models.Event || model('Announcement', AnnouncementSchema);

export default Announcement;