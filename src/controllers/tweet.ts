import numbers from '../data/numbers';

class TweetController {
    async getAllTweets() {
        // Filtrar solo los números pares
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        return evenNumbers;
    }
}

export default TweetController;