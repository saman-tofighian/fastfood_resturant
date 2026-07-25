import Image from 'next/image';
import { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { HiShoppingBag } from 'react-icons/hi2';

export default function Motto() {
  const [quantity, setQuantity] = useState(3);
  const unitPrice = 5.39 / 3;
  const totalPrice = (unitPrice * quantity).toFixed(2);

  return (
    <section className='mt-10 w-full'>
      <div className='items-center gap-x-6 grid grid-cols-12 w-full'>
        <div className='col-span-5 col-start-2'>
          <h1 className='w-[70%] font-bold text-[#C90000] text-[48px] leading-tight'>
            Order your favourite food
          </h1>
          <p className='mt-4 max-w-sm text-[#504F4F]'>
            Hamburger has many flavors, have you tried Cheese Beef Hamburger?
          </p>

          <span className='block mt-6 text-[#504F4F] text-sm'>
            Total Order :{' '}
            <b className='text-[#1D1D1D] text-[18px]'>{totalPrice}</b>
          </span>

          <div className='flex items-center gap-x-4 mt-4'>
            <div className='flex items-center gap-x-4 bg-white px-4 py-3 border border-[#E5E5E5] rounded-full'>
              <button
                onClick={() => setQuantity((q) => Math.min(q + 1, 99))}
                className='text-[#7D7C7C] hover:text-[#C90000] cursor-pointer'
                aria-label='افزایش تعداد'
              >
                <HiPlus size={16} />
              </button>
              <span className='min-w-[1ch] font-semibold text-[#F5A623] text-sm text-center'>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                className='text-[#7D7C7C] hover:text-[#C90000] cursor-pointer'
                aria-label='کاهش تعداد'
              >
                <HiMinus size={16} />
              </button>
            </div>
            <button className='flex items-center gap-x-2 bg-[#F5A623] hover:bg-[#e0951a] shadow-lg px-6 py-3 rounded-full font-semibold text-white text-sm duration-300 cursor-pointer'>
              <HiShoppingBag size={18} />
              Order now
            </button>
          </div>
        </div>

        <figure className='relative col-span-6'>
          <div className='top-35 -left-10 z-10 absolute flex items-center gap-x-2 bg-[#F1F1F1] shadow-sm px-4 py-2 rounded-full'>
            <FaClock className='text-[#1D1D1D]' size={14} />
            <div className='leading-tight'>
              <p className='font-semibold text-[#1D1D1D] text-sm'>Delivery</p>
              <p className='text-[#9A9A9A] text-xs'>30 mins</p>
            </div>
          </div>

          <Image
            src='/img/motto.png'
            alt='Order your favourite food - Cheese Beef Hamburger'
            width={703}
            height={678}
            className='w-full h-auto object-contain'
            priority
          />
        </figure>
      </div>
    </section>
  );
}
