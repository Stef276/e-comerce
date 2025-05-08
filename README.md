# E-Commerce React App

Este es un proyecto de e-commerce desarrollado con React como entrega final del curso. Permite a los usuarios navegar productos, filtrarlos por categorías, agregarlos al carrito y finalizar una compra, la cual se registra en Firebase Firestore.

## Funcionalidades

- Listado dinámico de productos desde Firebase Firestore.
- Filtro por categorías y vista de detalle de cada producto.
- Selección de cantidad con validaciones (mínimo 1, hasta el stock disponible).
- Carrito de compras persistente con Context API.
- Checkout con generación de orden en Firestore y muestra del ID de compra.
- Navegación SPA con React Router.
- Renderizado condicional para UX mejorada (mensajes como , "carrito vacío", etc.).

## Tecnologías

- React
- React Router DOM
- Firebase (Firestore)
- Context API

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/tuUsuario/tuRepositorio.git
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Ejecutar la app:
   ```
   npm run dev
   ```

4. Configurar el archivo `firebaseconfig.js` con las credenciales de tu proyecto Firebase (ubicado en `src/config/`).

## Estructura del proyecto

- `components/`: contiene los componentes de UI (NavBar, Cart, Item, ItemDetail, etc.)
- `context/`: incluye `CartContext` para la lógica del carrito.
- `config/`: archivo de configuración de Firebase.
- `App.jsx`: configuración de rutas y navegación.

## Cumplimiento de requisitos

✅ Listado y detalle de productos dinámico  
✅ Separación entre contenedores y presentación  
✅ ItemCount con validaciones de stock  
✅ Navegación SPA con React Router  
✅ Context API para el carrito  
✅ Firestore para productos y órdenes  
✅ Renderizado condicional  
✅ ID de orden mostrado al usuario

---

**Autor:** [Stefano Bisi]  
**Curso:** Desarrollo Web con React  
**Fecha de entrega:** Mayo 2025