import express from 'express';
import { TweetHttpsHandler } from '../handler/tweet';
const router = express.Router();

const tweetHttpsHandler = new TweetHttpsHandler();

router.get('/', tweetHttpsHandler.getTweets);
router.get('/:id', tweetHttpsHandler.getUTweetById);
router.post('/:id', tweetHttpsHandler.updateTweet);
router.delete('/:id', tweetHttpsHandler.deleteTweet);

export default router;