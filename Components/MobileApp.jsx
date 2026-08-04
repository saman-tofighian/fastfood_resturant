import Image from 'next/image';
import {
  FaApple,
  FaGift,
  FaGooglePlay,
  FaUndo,
  FaUtensils,
} from 'react-icons/fa';

export default function MobileApp() {
  const badges = [
    { id: 1, icon: FaUndo, label: 'Refund', position: 'top-[38%] left-[8%]' },
    {
      id: 2,
      icon: FaGift,
      label: 'Use Promotions',
      position: 'top-[22%] left-[38%]',
    },
    {
      id: 3,
      icon: FaUtensils,
      label: 'Foods',
      position: 'top-[68%] left-[2%]',
    },
  ];

  return (
    <section className='mt-25 xl:mt-35 px-[6%] w-full'>
      <div className='relative bg-[#F1F1F1] px-8 sm:px-14 py-14 rounded-[40px] overflow-hidden'>
        <div className='items-center gap-x-10 grid grid-cols-1 lg:grid-cols-12'>
          <div className='relative col-span-5 mb-10 lg:mb-0 h-[340px] sm:h-[400px]'>
            <div className='top-1/2 left-1/2 absolute w-[220px] sm:w-[260px] h-[320px] sm:h-[380px] -translate-x-1/2 -translate-y-1/2'>
              <Image
                src='/img/mobile-app-mockup.png'
                alt='McDonald’s mobile app'
                fill
                className='object-contain'
              />
            </div>

            {badges.map(({ id, icon: Icon, label, position }) => (
              <div
                key={id}
                className={`absolute ${position} z-10 flex items-center gap-x-2 bg-[#FFF3D6] shadow-sm px-3 py-2 rounded-full`}
              >
                <span className='flex justify-center items-center bg-[#FFC300] rounded-full w-5 h-5'>
                  <Icon size={10} className='text-[#1D1D1D]' />
                </span>
                <span className='font-medium text-[#1D1D1D] text-xs whitespace-nowrap'>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* متن و دکمه‌ها */}
          <div className='col-span-7 lg:text-left text-center'>
            <p className='text-[#9A9A9A] text-sm'>Exclusive offers and more</p>
            <h2 className='mt-2 font-extrabold text-[#C90000] text-2xl sm:text-3xl'>
              MCDONALD&apos;S MOBILE APP
            </h2>
            <p className='mt-4 max-w-md text-[#7D7C7C] text-sm leading-7'>
              As a global No. 1 fast food brand, McDonald&apos;s wishes to bring
              customers not only delicious and hygienic food at international
              standards but also the best service experience.
            </p>

            <div className='flex sm:flex-row flex-col justify-center lg:justify-start items-center gap-4 mt-8'>
              <button className='flex items-center gap-x-2 bg-[#1D1D1D] hover:bg-black px-5 py-3 rounded-full text-white duration-300 cursor-pointer'>
                <FaApple size={20} />
                <span className='text-left leading-tight'>
                  <span className='block text-[10px] text-white/70'>
                    Download on the
                  </span>
                  <span className='block font-semibold text-sm'>App Store</span>
                </span>
              </button>

              <button className='flex items-center gap-x-2 bg-[#1D1D1D] hover:bg-black px-5 py-3 rounded-full text-white duration-300 cursor-pointer'>
                <FaGooglePlay size={18} />
                <span className='text-left leading-tight'>
                  <span className='block text-[10px] text-white/70'>
                    Download on the
                  </span>
                  <span className='block font-semibold text-sm'>
                    Google Play
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
