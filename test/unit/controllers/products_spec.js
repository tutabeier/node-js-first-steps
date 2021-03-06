import ProductsController from '../../../src/controllers/products';
import sinon from 'sinon';

describe('Controllers: Products', () => {
  const defaultProducts = [{
    name: 'Default product',
    description: 'Product description',
    price: 100
  }];

  describe('get() products', () => {
    it('should return a list of products', () => {
      const request = {};
      const response = {
        send: sinon.spy()
      };

      const productsController = new ProductsController();
      productsController.get(request, response);

      expect(response.send.called).to.be.true;
      expect(response.send.calledWith(defaultProducts)).to.be.true;
    });
  });
})
