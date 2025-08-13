import express from 'express';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/api", productRoutes);
