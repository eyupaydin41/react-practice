export function getProducts(req, res) {
    res.send('List of products');
}

export async function postProducts(req, res) {
    const product = req.body;
    const enrichedProduct = {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    console.log('Received product:', enrichedProduct);
    res.status(201).json({ message: 'Product created', enrichedProduct });
}
