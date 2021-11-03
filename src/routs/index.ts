import {Request, Response, Router} from 'express';
import Url from '../controler/url.controler';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const {url} = req.body;

    const shortUrl = await Url.put(url)
    res.send(`<h1>Sua nova URL: ${shortUrl}</h1>`);
});

router.get('/:code', async (req: Request, res: Response) => {
    const {code} = req.params;
    const originUrl = await Url.pick(code);
    res.redirect(originUrl);
});

export default router;