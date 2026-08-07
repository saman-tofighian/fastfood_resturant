import Image from 'next/image';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function MobileApp() {
  return (
    <section className='mt-16 sm:mt-20 xl:mt-35 px-[6%] lg:pr-[6%] lg:pl-0 w-full'>
      <div className='bg-[#E3E3E3] lg:px-14 py-10 sm:py-12 lg:py-4 lg:rounded-l-none rounded-tl-[500px] rounded-tr-[500px] lg:rounded-tr-[500px] lg:rounded-br-[500px]'>
        <div className='items-center gap-x-10 gap-y-10 lg:gap-y-0 grid grid-cols-1 lg:grid-cols-12'>
          <div className='order-1 lg:order-2 col-span-12 lg:col-span-6 lg:text-left text-center'>
            <p className='mt-12 lg:mt-0 font-medium text-[#7D7C7C] xl:text-[20px] text-sm sm:text-base lg:text-lg'>
              Exclusive offers and more
            </p>
            <h2 className='mt-2 font-medium text-[#C90000] xl:text-[48px] text-xl sm:text-2xl lg:text-3xl'>
              MCDONALD&apos;S MOBILE APP
            </h2>
            <p className='mx-auto lg:mx-0 mt-4 max-w-xs sm:max-w-md lg:max-w-3xl text-[#323232] xl:text-[16px] text-sm leading-7 xl:leading-8'>
              As a global No. 1 fast food brand, McDonald&apos;s wishes to bring
              customers not only delicious and hygienic food at international
              standards but also the best service experience.
            </p>

            <div className='flex sm:flex-row flex-col justify-center lg:justify-start items-center gap-3 sm:gap-4 mt-6 sm:mt-8'>
              <button className='flex items-center gap-x-2 bg-[#504F4F] hover:bg-black px-5 sm:px-6 py-2 rounded-[50px] text-white duration-300 cursor-pointer'>
                <FaApple size={18} className='sm:w-5 sm:h-5' />
                <span className='text-left leading-tight'>
                  <span className='block text-[9px] text-white/70 sm:text-[10px]'>
                    Download on the
                  </span>
                  <span className='block font-semibold text-xs sm:text-sm'>
                    App Store
                  </span>
                </span>
              </button>

              <button className='flex items-center gap-x-2 bg-[#504F4F] hover:bg-black px-5 sm:px-6 py-2 rounded-full text-white duration-300 cursor-pointer'>
                <FaGooglePlay size={16} className='sm:w-[18px] sm:h-[18px]' />
                <span className='text-left leading-tight'>
                  <span className='block text-[9px] text-white/70 sm:text-[10px]'>
                    Download on the
                  </span>
                  <span className='block font-semibold text-xs sm:text-sm'>
                    Google Play
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className='flex justify-center order-2 lg:order-1 col-span-12 lg:col-span-6'>
            <div className='flex justify-center w-[350px] lg:w-[401px]'>
              <Image
                src='/img/mobile-app-mockup.png'
                alt='McDonald’s mobile app'
                width={401}
                height={436}
                className='w-full object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
