class ProductsController {
  get(req, res) {
    return res.send([{
      name: 'Default product',
      description: 'Product description',
      price: 100
    }])
  }
}

export default ProductsController;
