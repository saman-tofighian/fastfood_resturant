import Image from 'next/image';
import { HiShoppingBag } from 'react-icons/hi2';

export default function SaleOff() {
  const deals = [
    {
      id: 1,
      label: 'Fast food',
      title: 'COMBO FUNNY',
      desc: 'buy 1 funny combo get 1 coca cola',
      image: '/img/combo-funny.png',
      oldPrice: '13.3',
      newPrice: '10.3',
      highlight: false,
    },
    {
      id: 2,
      label: 'Fast food',
      title: 'SALAD MIXED VINEGAR',
      desc: '',
      image: '/img/salad.png',
      oldPrice: '5.4',
      newPrice: '3.4',
      highlight: true,
    },
    {
      id: 3,
      label: 'House',
      title: 'CHICKEN BUGGER',
      desc: 'fried chicken',
      image: '/img/chicken-burger.png',
      oldPrice: '8.3',
      newPrice: '6.3',
      highlight: false,
    },
  ];

  return (
    <section className='mt-25 xl:mt-35 px-[6%] w-full'>
      <h2 className='block relative mb-10 font-semibold text-[#C90000] lg:text-[40px] text-3xl sm:text-4xl text-center'>
        <span className='z-10 relative'>SALE OFF</span>
        <span className='bottom-0 left-1/2 z-0 absolute bg-[#FFF3B0] w-24 h-3 -translate-x-1/2' />
      </h2>

      <div className='gap-x-10 gap-y-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {deals.map((deal) => (
          <div
            key={deal.id}
            className={`relative rounded-[20px] p-6 min-h-[335px] overflow-hidden ${
              deal.highlight ? 'bg-[#C90000] shadow-2xl' : 'bg-[#E3E3E3]'
            }`}
          >
            <div className='z-20 relative flex items-center gap-x-2'>
              <span
                className={`text-xs font-medium ${
                  deal.highlight ? 'text-white/70' : 'text-[#7D7C7C]'
                }`}
              >
                {deal.label}
              </span>
              <span
                className={`flex-1 h-px ${
                  deal.highlight ? 'bg-white/30' : 'bg-[#D9D9D9]'
                }`}
              />
            </div>
            <h3
              className={`z-20 relative mt-2  font-extrabold text-[32px] leading-13  ${
                deal.highlight
                  ? 'text-[#FFC300] max-w-[75%]'
                  : 'text-[#C90000] '
              }`}
            >
              {deal.title}
            </h3>

            {deal.desc && (
              <p
                className={`z-20 relative mt-2 max-w-[60%] text-sm leading-snug ${
                  deal.highlight ? 'text-white/80' : 'text-[#7D7C7C]'
                }`}
              >
                {deal.desc}
              </p>
            )}

            <div className='z-20 relative flex items-center gap-x-2 mt-4'>
              <span
                className={`text-sm line-through ${
                  deal.highlight ? 'text-white/50' : 'text-[#9A9A9A]'
                }`}
              >
                {deal.oldPrice}$
              </span>
              <span
                className={`font-bold text-lg ${
                  deal.highlight ? 'text-white' : 'text-[#C90000]'
                }`}
              >
                {deal.newPrice}$
              </span>
            </div>

            <button
              className={`z-20 relative flex items-center gap-x-2 mt-5  py-3 px-6 rounded-full font-semibold text-xs duration-300 cursor-pointer ${
                deal.highlight
                  ? 'bg-[#FFFDE6] text-[#C90000] hover:bg-[#FFF3B0]'
                  : 'bg-[#504F4F] text-white hover:bg-[#1D1D1D]'
              }`}
            >
              <HiShoppingBag size={14} />
              Order now
            </button>

            <div className='right-[-9%] bottom-[8%] z-10 absolute w-[60%] h-[75%]'>
              <Image
                src={deal.image}
                alt={deal.title}
                fill
                className='object-bottom object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
