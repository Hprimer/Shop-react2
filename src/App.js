import React, { useState, useEffect } from "react";
import Categories from './Components/Categories/Categories';
import Header from './Components/Header/Header';
import Presentation from './Components/Presentation/Presentation';
import itemsData from './data/products'
import Items from './Components/Items/Items';
import Footer from './Components/Footer/Footer';
import Main from "./pages/main/Main";
import Registration from "./pages/Registration/Registration";

function App() {

  const [items, setItems] = useState([]); // Все товары
  const [currentItems, setCurrentItems] = useState([]); // Текущие товары на экране
  const [orders, setOrders] = useState([]); // Корзина

  // Функция загрузки товаров
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://furniture-api.fly.dev/v1/products?limit=100&sort=name_asc");
        if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
        const data = await response.json();
        setItems(data.data); // Сохраняем товары в состояние
        setCurrentItems(data.data); // Устанавливаем текущие товары
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    fetchData();
  }, []);

  // Фильтрация по категориям
  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter(el => el.category === category));
    }
  };
  // Удаление товара из корзины
  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
  };

  // Добавление товара в корзину
  const addOrder = (item) => {
    if (!orders.some(el => el.id === item.id)) {
      setOrders([...orders, item]);
    }
  };

  return (
    <div className="App">
      {/* <Registration/> */}
      <Header orders={orders} onDelete={deleteOrder} />
      <Main onChoose={chooseCategory} items={currentItems} onAdd={addOrder}/>
      {/* <Presentation/>
      <div className='categ_items container'>
        <Categories onChoose={chooseCategory} />
        <Items items={currentItems} onAdd={addOrder} />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
