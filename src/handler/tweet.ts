import { Request, Response, NextFunction } from 'express';
import TweetController from '../controllers/tweet';

const tweetController = new TweetController();


export class TweetHttpsHandler{

    async getTweets(request: Request, response: Response, next: NextFunction)  {
        try {
            const tweets = await tweetController.getAllTweets();
            response.json(tweets);
        } catch (error) {
            response.status(500).json({ error: 'Error al obtener los tweets' });
        }
    }
    async getUTweetById(request: Request, response: Response, next: NextFunction)  {

    }
    async updateTweet(request: Request, response: Response, next: NextFunction)  {

    }

    async deleteTweet(request: Request, response: Response, next: NextFunction)  {

    }

    
}