import usersData from './Users.json';
import productsData from './Products.json';
import categoriesData from './Categories.json';
import shoppingCartData from './ShoppingCart.json';

import type { User } from '../interfaces/User';
import type { Product } from '../interfaces/Product';
import type { Category } from '../interfaces/Category';
import type { ShoppingCart } from '../interfaces/ShoppingCart';

export const users: User[] = usersData;
export const products: Product[] = productsData;
export const categories: Category[] = categoriesData;
export const shoppingCarts: ShoppingCart[] = shoppingCartData;