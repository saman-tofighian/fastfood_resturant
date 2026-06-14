import Image from 'next/image';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

export default function Header() {
  const Links = [
    {
      id: 1,
      title: 'Homepage',
      url: '/',
    },
    {
      id: 2,
      title: 'Menu',
      url: '/menu',
    },
    {
      id: 3,
      title: 'Sale off',
      url: '/saleoff',
    },
    {
      id: 4,
      title: 'News',
      url: '/news',
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact',
    },
  ];
  return (
    <>
      <header className='grid grid-cols-12 px-[6%] py-3 w-full h-14'>
        <figure className='flex items-center order-1 col-span-3 lg:col-span-2 h-full'>
          <Image src='/img/logo.png' alt='logo' width={54} height={56} />
        </figure>
        <nav className='order-3 col-span-3 lg:col-span-7 h-full'>
          <span className='lg:hidden flex justify-end items-center h-full'>
            <FaHamburger
              size='2.1rem'
              className='cursor-pointer'
              color='#504F4F'
            />
          </span>
          <ul className='hidden lg:flex justify-center items-center gap-x-10 w-full h-full'>
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  className={`w-fit h-fit  ${
                    link.id === 1
                      ? 'text-[#C90000] font-semibold'
                      : 'text-[#7D7C7C] font-medium'
                  }`}
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex justify-center items-center gap-x-8 order-2 lg:order-3 col-span-6 lg:col-span-3 h-full'>
          <button className='bg-white hover:bg-[#C90000] px-5 py-2 border border-[#C90000] rounded-[100px] text-[#C90000] hover:text-white duration-700 cursor-pointer'>
            Sign in
          </button>
          <button className='bg-[#C90000] hover:bg-white px-5 py-2 border border-[#C90000] rounded-[100px] text-white hover:text-[#C90000] duration-700 cursor-pointer'>
            Logn in
          </button>
        </div>
      </header>
      <div className='top-0 left-0 fixed bg-gray-300 w-[20vw] h-screen'></div>
    </>
  );
}
