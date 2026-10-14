import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CartSummary from './components/CartSummary';

function App() {
  const { theme, toggleTheme } = useTheme();

  const [currentPage, setCurrentPage] = useState<'home' | 'cart'>('home');

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">

        <div className="flex items-center justify-between p-6">
          <h1 className="text-3xl font-bold">
            Kids Clothing Store
          </h1>

          <div className="flex items-center gap-4">

            <button
              onClick={() => setCurrentPage('home')}
              className="rounded-lg border px-4 py-2"
            >
              Home
            </button>

            <button
              onClick={() => setCurrentPage('cart')}
            >
              <CartSummary />
            </button>

            <button
              onClick={toggleTheme}
              className="rounded-lg bg-pink-500 px-4 py-2 text-white"
            >
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>

          </div>
        </div>

        {currentPage === 'home' ? <HomePage /> : <CartPage />}

      </div>
    </div>
  );
}

export default App;