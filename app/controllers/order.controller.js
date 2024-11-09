import { Order } from "../models/order.model.js";

const createOrder = async (req, res) => {
  try {
    //para crear orden primero necesitamos calcular el total de orden
    const { products, userId, comments } = req.body;
    //products = [{id:1, quantity:2}, {id:2,quantity:3}]

    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
      const productId = products[i].id;
      const quantity = products[i].quantity;

      const product = await product.findById(productId);

      const productTotal = product.price * quantity;
      totalPrice += productTotal;

      if (!product) {
        return res
          .status(404)
          .send({ message: `Producto con ID ${productId} no encontrado` });
      }
    }
    //Crear la orden
    const newOrder = new Order({
      user,
      comments,
      products,
      totalPrice,
      createdAt: new Date(),
    });

    await newOrder.save();

    res.status(201).json({ message: "Orden creada", order: newOrder });
    console.log(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { createOrder };
