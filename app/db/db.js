import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gabrielp:admin123@krugerbackendap.lcbem.mongodb.net/products?retryWrites=true&w=majority&appName=KrugerBackEndAP"
    );
    console.log("conexion exitosa");
  } catch (error) {
    console.error("error al conectar la bdd", error);
  }
};
