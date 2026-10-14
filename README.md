# Kids Clothing Store

A frontend e-commerce web application for a children's clothing store built using React, TypeScript, Context API, Tailwind CSS, and mock JSON data.

## Current Features

- Product listing
- Product categories and filtering
- Reusable product cards
- Shopping cart
- Add products to cart
- Increase and decrease product quantity
- Remove products from cart
- Cart item count
- Total cart bill calculation
- Light and dark mode
- Theme persistence using localStorage
- Cart persistence using sessionStorage
- Context API for shared theme and cart state
- TypeScript interfaces for application data

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Context API
- localStorage
- sessionStorage

## Project Structure

```text
src/
├── components/
├── context/
├── Data/
│   ├── Users.json
│   ├── Products.json
│   ├── ShoppingCart.json
│   ├── Categories.json
│   └── data.ts
├── interfaces/
│   ├── User.ts
│   ├── Product.ts
│   ├── Category.ts
│   └── ShoppingCart.ts
├── pages/
│   ├── HomePage.tsx
│   └── CartPage.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Mock Data

The project does not use a backend or database.

Application data is stored locally inside the `src/Data` folder using JSON files.

## TypeScript Interfaces

Interfaces are used to define and validate the structure of:

- Users
- Products
- Categories
- Shopping carts
- Cart items

## Context API

Two contexts are currently implemented:

### ThemeContext

Manages:

- Light mode
- Dark mode
- Theme switching
- Theme persistence using localStorage

### CartContext

Manages:

- Cart items
- Add to cart
- Increase quantity
- Decrease quantity
- Remove from cart

## Storage

### localStorage

Used to persist the selected theme even after the browser is closed and reopened.

### sessionStorage

Used to temporarily persist shopping cart data during the browser session.

## Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```
