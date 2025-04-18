const productos = [
  {
    id: "1",
    nombre: "Shampoo para autos",
    descripcion: "Ideal para lavar sin dañar la pintura.",
    imagen: "",
    categoria: "limpieza",
    stock: 10,
    precio: 2500,
  },
  {
    id: "2",
    nombre: "Cera líquida",
    descripcion: "Protege y da brillo a tu vehículo.",
    imagen: "",
    categoria: "accesorios",
    stock: 5,
    precio: 1800,
  },
  {
    id: "3",
    nombre: "Paño de microfibra",
    descripcion: "Suave y absorbente.",
    imagen: "",
    categoria: "accesorios",
    stock: 15,
    precio: 900,
  },
  {
    id: "4",
    nombre: "Limpiador de interiores",
    descripcion: "Elimina polvo y manchas del interior del vehículo.",
    imagen: "",
    categoria: "limpieza",
    stock: 8,
    precio: 2200,
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === id);
      resolve(producto);
    }, 1000);
  });
};
