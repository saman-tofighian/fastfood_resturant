import Image from 'next/image';
import Link from 'next/link';

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
    <header className='grid grid-cols-12 px-[6%] py-3 w-full h-14'>
      <figure className='flex items-center col-span-2 h-full'>
        <Image src='/img/logo.png' alt='logo' width={54} height={56} />
      </figure>
      <nav className='col-span-7 h-full'>
        <ul className='flex justify-center items-center gap-x-10 w-full h-full'>
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
      <div className='col-span-3 h-full'></div>
    </header>
  );
}
