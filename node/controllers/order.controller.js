import OrderServices from '../services/order.service';

const OrderController = {
  makeOrder(req, res) {
    const orderMade = req.body;
    const newOrder = OrderServices.makeOrder(orderMade);
    return res
      .json({
        status: 'success',
        data: newOrder
      })
      .status(200);
  },
  getAllOrders(req, res) {
    const allOrders = OrderServices.getAllOrders();
    return res
      .json({
        status: 'success',
        allOrders
      })
      .status(200);
  },
  updateAnOrder(req, res) {
    const updatedOrder = req.body;
    const { id } = req.params;
    const newOrder = OrderServices.updateAnOrder(id, updatedOrder);
    return res.json({
      status: 'success',
      newOrder
    });
  },
  deleteAnOrder(req, res) {
    const { id } = req.params;
    const deletedStatus = OrderServices.deleteAnOrder(id);
    return res.json({
      deletedStatus
    });
  }
};

export default OrderController;
