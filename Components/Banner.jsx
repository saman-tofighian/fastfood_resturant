import Image from 'next/image';

export default function Banner() {
  return (
    <section className='flex justify-center mt-16 sm:mt-20 xl:mt-35 mb-10 px-[6%] w-full'>
      <div className='relative flex justify-center items-center bg-[#323232] px-6 py-14 rounded-[20px] w-full lg:w-[90%] min-h-[260px] md:min-h-[350px] overflow-hidden'>
        <div className='top-6 md:top-12 left-[-60px] sm:left-[-50px] absolute'>
          <Image
            src='/img/salad.png'
            alt='salad'
            width={212}
            height={173}
            className='w-[120px] md:w-[170px] lg:w-[212px]'
          />
        </div>
        <div className='bottom-[-40px] md:bottom-[-50px] lg:bottom-[-80px] left-4 md:left-10 lg:left-20 absolute'>
          <Image
            src='/img/chicken-burger.png'
            alt='burger'
            width={227}
            height={101}
            className='w-[130px] md:w-[180px] lg:w-[227px]'
          />
        </div>

        <div className='z-10 flex flex-col items-center w-full ]'>
          <h4 className='font-medium text-[#FFFDE6] text-[20px] md:text-[40px] lg:text-[48px] text-center leading-tight'>
            FIND A FOODELI STORE NEAR YOU
          </h4>

          <p className='mt-3 px-4 text-[#f1f1f1] text-[12px] md:text-[16px] text-center'>
            see the convenience store address with you most
          </p>

          <div className='flex gap-3 bg-[#FFC300] mt-8 p-1 rounded-[30px] w-full max-w-[520px] sm:overflow-hidden'>
            <input
              type='text'
              placeholder='Typing location'
              className='flex-1 bg-transparent px-6 rounded-full outline-none h-[50px] text-[14px] placeholder:text-[#504F4F]'
            />

            <button className='bg-[#FFEAE6] px-9 py-3 rounded-[100px] font-medium text-[12px] md:text-[14px] cursor-pointer'>
              See on map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
