"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ProductSelect from "./components/product";
import { products } from "./components/products";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter 1",
  image: 'https://cdn.builder.io/hero-image.jpg',
  inputs: [
    {
      name: "initialCount",
      type: "number",
      
    },
  ],
});

Builder.registerComponent(ProductSelect, {
  name: "ProductSelect",
  
  inputs: [
    {
      name: "Products",
      type: "enum",
      enum: products,
      defaultValue: [],
    },
  ],
});