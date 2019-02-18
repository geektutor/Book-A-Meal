const date = new Date();
const month = `${date.getMonth() + 1}`;
const today = `${date.getDate()}-${month.padStart(2, '0')}-${date.getFullYear()}`;

class Orders {
  constructor() {
    this.id = null;
    this.customerId = null;
    this.date = today;
    this.meal = [];
    this.total = null;
    this.delivered = false;
  }

  modifyOrder() {
    this.modifiedDate = today;
    this.modified = true;
  }
}

export default Orders;
