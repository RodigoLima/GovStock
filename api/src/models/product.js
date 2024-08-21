import mongoose from "mongoose";

const variationSchema = new mongoose.Schema(
  {
    packagingType: { type: String, required: [true, "Packaging type is required"] }, // Exemplo: "Pacote", "Fardo", "KG", "Unidade", "Cartela", "Caixa"
    quantity: { type: Number, required: [true, "Quantity is required"] }, // Exemplo: 30 (para quantidade de unidades ou peso)
    unit: { type: String, required: [true, "Unit is required"] }, // Exemplo: "Unidades", "KG", "Pacote", "Fardo", "Cartela", "Caixa"
  },
  { _id: false } // Para evitar a criação de um _id separado para cada variação
);

const productSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.ObjectId,
    },
    name: { type: String, required: [true, "Name is required"] },
    brand: { type: String, required: [true, "Brand is required"] },
    variations: [variationSchema], // Lista de variações para o produto
  },
  { versionKey: false }
);

const Product = mongoose.model("products", productSchema);

export { Product, productSchema };
