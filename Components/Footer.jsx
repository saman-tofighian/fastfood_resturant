import Image from 'next/image';
import { CiInstagram } from 'react-icons/ci';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#FFFDE6] mt-10 lg:mt-16 px-[6%] pt-10 lg:pt-12 w-full'>
      <div className='gap-y-12 lg:gap-y-0 grid grid-cols-12 w-full'>
        <div className='flex flex-col justify-center items-center order-1 col-span-12 lg:col-span-4'>
          <Image
            src='/img/footer.png'
            width={300}
            height={70}
            alt='footer logo'
            className='w-[220px] sm:w-[260px] lg:w-[300px] h-auto'
          />

          <div className='flex justify-center items-center gap-x-6 mt-5'>
            <span className='hover:scale-110 transition cursor-pointer'>
              <CiInstagram color='#7D7C7C' size='1.4rem' />
            </span>

            <span className='hover:scale-110 transition cursor-pointer'>
              <FaTelegram color='#7D7C7C' size='1.3rem' />
            </span>

            <span className='hover:scale-110 transition cursor-pointer'>
              <FaWhatsapp color='#7D7C7C' size='1.3rem' />
            </span>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center order-2 col-span-12 sm:col-span-6 lg:col-span-4'>
          <h6 className='font-medium text-[#323232] text-[20px]'>
            USEFUL LINKS
          </h6>

          <ul className='flex flex-col items-center mt-7 w-full'>
            <li className='mb-5 text-[#323232]'>HomePage</li>

            <li className='mb-5 text-[#323232]'>Menu</li>

            <li className='mb-5 text-[#323232]'>SaleOff</li>

            <li className='mb-5 text-[#323232]'>News</li>

            <li className='mb-5 text-[#323232]'>Contact</li>
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center order-3 col-span-12 sm:col-span-6 lg:col-span-4'>
          <h6 className='font-medium text-[#323232] text-[20px]'>
            OPENING HOUR
          </h6>

          <ul className='flex flex-col items-center mt-7 w-full'>
            <li className='mb-5 text-[#323232] text-center'>
              Monday - Friday: 9:00 - 23:00h
            </li>

            <li className='mb-5 text-[#323232] text-center'>
              Saturday: 09:00 - 16:00h
            </li>

            <li className='mb-5 text-[#323232] text-center'>
              Sunday: 12:00 - 18:00h
            </li>
          </ul>
        </div>
      </div>

      <div className='flex justify-center items-center mt-5 py-5 border-t w-full text-sm sm:text-base text-center'>
        <span className='text-[#323232]'>
          created by <strong className='text-[#C90000]'>Saman Tofighian</strong>{' '}
          | all rights reserved
        </span>
      </div>
    </footer>
  );
}
