import Orders from '../models/order.model';
import dummyData from '../data/dummyData';

const { orders } = dummyData;

const OrdersServices = {
  makeOrder(order) {
    const existingLength = orders.length;
    const highestId = orders[existingLength - 1].orderId;
    const newId = highestId + 1;
    const newOrder = new Orders();
    newOrder.id = newId;
    newOrder.customerId = order.customerId;
    newOrder.meal = order.meal;
    newOrder.total = order.total;
    orders.push(newOrder);
    return newOrder;
  },
  getAllOrders() {
    return orders;
  },
  updateAnOrder(id, updatedOrder) {
    const orderToUpdate = orders.find(order => Number(order.orderId) === Number(id));
    const orderIndex = orders.indexOf(orderToUpdate);
    if (!orderToUpdate) {
      return 'Order not found';
    }
    orderToUpdate.mealsOrdered = updatedOrder.mealsOrdered;
    orderToUpdate.total = updatedOrder.total;
    if (orderToUpdate instanceof Orders) {
      orderToUpdate.modifyOrder();
    } else {
      orderToUpdate.modified = true;
    }
    orders.splice(orderIndex, 1, orderToUpdate);
    return orderToUpdate;
  },
  deleteAnOrder(id) {
    const orderToDelete = orders.find(order => Number(order.orderId) === Number(id));
    if (!orderToDelete) {
      return "Order not found. Non-existing order can't be deleted";
    }
    const orderIndex = orders.indexOf(orderToDelete);
    orders.splice(orderIndex, 1);
    return 'Order deleted successfully';
  }
};

export default OrdersServices;
