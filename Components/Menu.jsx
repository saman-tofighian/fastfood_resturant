import Image from 'next/image';
import { useState } from 'react';
import {
  FaAward,
  FaCoffee,
  FaHamburger,
  FaIceCream,
  FaStar,
} from 'react-icons/fa';
import { GiChickenLeg } from 'react-icons/gi';
import { HiShoppingBag } from 'react-icons/hi2';

export default function Menu() {
  const categories = [
    { name: 'Best seller', icon: FaAward },
    { name: 'Hamburger', icon: FaHamburger },
    { name: 'Drink', icon: FaCoffee },
    { name: 'Dessert', icon: FaIceCream },
    { name: 'Fried chicken', icon: GiChickenLeg },
  ];

  const products = [
    {
      id: 1,
      category: 'Best seller',
      title: 'Cheese Beef Hamburger',
      desc: 'fried chicken balls, french fries',
      image: '/img/cheese-beef.png',
      rating: 5,
      reviews: 5,
      price: '5.39',
      sale: false,
    },
    {
      id: 2,
      category: 'Best seller',
      title: 'Combo funny',
      desc: 'fried chicken balls, french fries',
      image: '/img/combo-funny.png',
      rating: 5,
      reviews: 5,
      price: '10.3',
      sale: true,
    },
    {
      id: 3,
      category: 'Best seller',
      title: 'Chicken with Spicy Sauce',
      desc: 'chili garlic sauce, black pepper sauce',
      image: '/img/spicy-chicken.png',
      rating: 5,
      reviews: 5,
      price: '7.2',
      sale: false,
    },
    {
      id: 4,
      category: 'Best seller',
      title: 'Salad mixed vinegar',
      desc: 'Salad, vinegar, tomato',
      image: '/img/salad.png',
      rating: 5,
      reviews: 5,
      price: '5.4',
      sale: true,
    },
    {
      id: 5,
      category: 'Best seller',
      title: 'Chicken burger',
      desc: 'fried chicken',
      image: '/img/chicken-burger.png',
      rating: 5,
      reviews: 5,
      price: '5.39',
      sale: false,
    },
    {
      id: 6,
      category: 'Best seller',
      title: 'Lipton',
      desc: '',
      image: '/img/lipton.png',
      rating: 5,
      reviews: 5,
      price: '2.8',
      sale: true,
    },
  ];

  const [activeTab, setActiveTab] = useState('Best seller');
  const filteredProducts = products.filter((p) => p.category === activeTab);

  return (
    <section className='mt-20 px-[6%] w-full'>
      <div className='px-5 w-full'>
        <h2 className='inline-block relative mb-8 font-extrabold text-[#C90000] text-3xl sm:text-4xl'>
          <span className='z-10 relative'>MENU</span>
          <span className='-bottom-0.5 left-0 z-0 absolute bg-[#FFF3B0] w-full h-3' />
        </h2>
      </div>
      <div className='px-5 w-full'>
        <ul className='flex flex-wrap gap-3 mb-10'>
          {categories.map(({ name, icon: Icon }) => (
            <li key={name}>
              <button
                onClick={() => setActiveTab(name)}
                className={`flex items-center gap-x-2 px-5 py-3 rounded-full text-sm font-semibold duration-300 cursor-pointer ${
                  activeTab === name
                    ? 'bg-[#FFC300] text-[#504F4F]'
                    : 'bg-[#E3E3E3] text-[#504F4F] hover:bg-[#e8e8e8]'
                }`}
              >
                <Icon size={16} />
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='gap-x-8 gap-y-13 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5'>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className='relative bg-white p-5 border border-[#ECECEC] rounded-2xl'
          >
            {product.sale && (
              <span
                className='top-2 left-2 z-10 absolute flex justify-center items-center bg-[#FFC300] w-14 h-14 font-semibold text-[#C90000] text-xs rotate-[-12deg]'
                style={{
                  clipPath:
                    'polygon(50% 0%, 61% 12%, 75% 6%, 78% 21%, 92% 25%, 88% 40%, 100% 50%, 88% 60%, 92% 75%, 78% 79%, 75% 94%, 61% 88%, 50% 100%, 39% 88%, 25% 94%, 22% 79%, 8% 75%, 12% 60%, 0% 50%, 12% 40%, 8% 25%, 22% 21%, 25% 6%, 39% 12%)',
                }}
              >
                Sale
              </span>
            )}

            <figure className='relative w-full aspect-[4/3]'>
              <span className='-bottom-12 left-0 z-0 absolute bg-[#FFFDE6] rounded-xl w-full h-[50%] -translate-y-1/2' />
              <Image
                src={product.image}
                alt={product.title}
                fill
                className='z-10 relative p-2 object-contain'
              />
            </figure>

            <h3 className='mt-4 font-bold text-[#1D1D1D] text-lg'>
              {product.title}
            </h3>

            {product.desc && (
              <p className='mt-1 text-[#9A9A9A] text-sm'>{product.desc}</p>
            )}

            <div className='flex items-center gap-x-1 mt-2'>
              {Array.from({ length: product.rating }).map((_, i) => (
                <FaStar key={i} className='text-[#FFC300]' size={14} />
              ))}
              <span className='ml-1 text-[#9A9A9A] text-sm'>
                ({product.reviews})
              </span>
            </div>

            <div className='flex justify-between items-center mt-4'>
              <span className='font-bold text-[#1D1D1D] text-xl'>
                {product.price}$
              </span>
              <button
                aria-label='افزودن به سبد'
                className='flex justify-center items-center bg-[#C90000] hover:bg-[#a10000] rounded-2xl w-11 h-11 text-white duration-300 cursor-pointer'
              >
                <HiShoppingBag size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-12'>
        <button className='font-medium text-[#1D1D1D] text-sm underline underline-offset-4 cursor-pointer'>
          See all
        </button>
      </div>
    </section>
  );
}
