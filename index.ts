import express from 'express';
import tweetsRoutes from './src/routes/tweet';
import userRoutes from './src/routes/user';

const app = express();
app.use(express.json());

// New route for '/'
// app.get('/', (req, res) => {
//  res.send('Welcome to API313!');
// });

app.use('/api/tweet', tweetsRoutes);
app.use('/api/user', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});