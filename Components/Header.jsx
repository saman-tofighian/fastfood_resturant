'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

gsap.registerPlugin(useGSAP);

export default function Header() {
  const Links = [
    { id: 1, title: 'Homepage', url: '/' },
    { id: 2, title: 'Menu', url: '/menu' },
    { id: 3, title: 'Sale off', url: '/saleoff' },
    { id: 4, title: 'News', url: '/news' },
    { id: 5, title: 'Contact', url: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scopeRef = useRef(null);
  const backdropRef = useRef(null);
  const panelRef = useRef(null);
  const linksRef = useRef([]);

  // مهم
  linksRef.current = [];

  const addLinkRef = (el) => {
    if (el) linksRef.current.push(el);
  };

  useGSAP(
    () => {
      // مقدار اولیه فقط یک بار
      gsap.set(backdropRef.current, {
        opacity: 0,
        pointerEvents: 'none',
      });

      gsap.set(panelRef.current, {
        xPercent: 100,
      });

      gsap.set(linksRef.current, {
        opacity: 0,
        x: 24,
      });
    },
    { scope: scopeRef }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      if (isMenuOpen) {
        tl.set(backdropRef.current, {
          pointerEvents: 'auto',
        })
          .to(
            backdropRef.current,
            {
              opacity: 1,
              duration: 0.4,
            },
            0
          )
          .to(
            panelRef.current,
            {
              xPercent: 0,
              duration: 0.55,
              ease: 'power4.out',
            },
            0
          )
          .to(
            linksRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.08,
            },
            0.25
          );
      } else {
        tl.to(linksRef.current, {
          opacity: 0,
          x: 24,
          duration: 0.2,
          stagger: 0.04,
        })
          .to(
            panelRef.current,
            {
              xPercent: 100,
              duration: 0.4,
            },
            '-=0.1'
          )
          .to(
            backdropRef.current,
            {
              opacity: 0,
              duration: 0.3,
            },
            '-=0.3'
          )
          .set(backdropRef.current, {
            pointerEvents: 'none',
          });
      }
    },
    {
      scope: scopeRef,
      dependencies: [isMenuOpen],
    }
  );

  return (
    <>
      <header className='z-50 relative grid grid-cols-12 px-[6%] py-3 w-full h-14'>
        <figure className='flex items-center order-1 col-span-3 lg:col-span-2 h-full'>
          <Image src='/img/logo.png' alt='logo' width={54} height={56} />
        </figure>

        <nav className='order-3 col-span-3 lg:col-span-7 h-full'>
          <span className='lg:hidden flex justify-end items-center h-full'>
            <FaHamburger
              size='2.1rem'
              className='cursor-pointer'
              color='#504F4F'
              onClick={() => setIsMenuOpen(true)}
            />
          </span>

          <ul className='hidden lg:flex justify-center items-center gap-x-10 w-full h-full'>
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  className={`w-fit h-fit ${
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
            Log in
          </button>
        </div>
      </header>

      <div ref={scopeRef}>
        <div
          ref={backdropRef}
          onClick={() => setIsMenuOpen(false)}
          className='lg:hidden z-40 fixed inset-0 bg-black/40'
        />

        <div
          ref={panelRef}
          className='lg:hidden top-0 right-0 z-50 fixed bg-white shadow-2xl w-[70vw] max-w-xs h-screen'
        >
          <div className='flex justify-end p-5'>
            <IoMdClose
              size='2rem'
              className='cursor-pointer'
              color='#C90000'
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          <ul className='flex flex-col items-center gap-y-10 mt-8'>
            {Links.map((link) => (
              <li key={link.id} ref={addLinkRef}>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-fit h-fit ${
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
        </div>
      </div>
    </>
  );
}
