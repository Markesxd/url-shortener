import {URL} from '../model/urls';
import {nanoid} from 'nanoid';
import NoContent from '../errors/nocontent';

class Url {

    async put(url: string):Promise<string>{
        const match = await URL.find({originUrl: url});
        if(match.length !== 0) return match[0].shortUrl;
        
        const code = nanoid(10);
        const newUrl = {
            originUrl: url,
            shortUrl: process.env.HOST+ '/' + code,
            code
        };

        URL.create(newUrl);

        return newUrl.shortUrl;
        }

    async pick(code: string):Promise<string>{
        const url = await URL.find({code: code});
        if(url.length === 0) throw new NoContent('Url não encontrada');
        return url[0].originUrl;
    }

}

export default new Url;