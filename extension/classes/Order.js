class Order {
    constructor({ firstName, lastName, address, quantity }) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.address = address || '';
        this.quantity = quantity || 1;
    }
}

export default Order;