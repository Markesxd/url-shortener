import {Schema} from 'mongoose';
import {connection} from '../database/connection';

interface url {
    originUrl: string;
    code: string;
    shortUrl: string;
}
const urlSchema = new Schema<url>({
    originUrl: String,
    code: String,
    shortUrl: String
});

export const URL = connection.model<url>('Url', urlSchema);