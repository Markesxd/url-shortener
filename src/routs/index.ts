import {NextFunction, Request, Response, Router} from 'express';
import Url from '../controler/url.controler';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const {url} = req.body;
    try{
        const shortUrl = await Url.put(url)
        res.send(`<h1>Sua nova URL: ${shortUrl}</h1>`);
    } catch(err){
        next(err);
    }
});

router.get('/:code', async (req: Request, res: Response, next: NextFunction) => {
    const {code} = req.params;
    try{
        const originUrl = await Url.pick(code);
        res.redirect(originUrl);
    } catch(err) { 
        next(err);
    }
});

export default router;