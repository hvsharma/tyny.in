import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myPic from '../pages/images/my_pic.jpg'
import Head from 'next/head';

export default function Layout({ children }: any) {

  const navigation = (): JSX.Element => {
    return <>
      <nav className="fixed inset-x-0 top-0 font-sans flex flex-row text-center items-center py-4 px-6 bg-cyan-900 shadow w-full">
        <div>
          <Link href="/">
            <a className="text-3xl no-underline text-grey-darkest hover:text-gray-300">Tyny.in - Shorten Links</a>
          </Link>
        </div>
        <div className="ml-auto flex flex-row justify-center items-center">
          <div>
            <Link href="/view">
              <a className="text-lg no-underline text-grey-darkest hover:text-gray-300 ml-2">My Links</a>
            </Link>
          </div>
          <div className="flex items-center ml-10">
            <button type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <Image className="w-8 h-8 rounded-full"
                src={myPic} alt="user photo" width={"50px"} height={"50px"} />
            </button>
            <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown">
              <div className="py-3 px-4">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>

        </div>
      </nav>
    </>
  }

  const footer = (): JSX.Element => {
    return <>
      <div className="fixed inset-x-0 bottom-0">
        <div className="flex my-4 justify-center items-center">
          <div className="text-sm font-semibold py-1">
            Copyright © <span id="get-current-year">2022</span>
            <a href="https://www.neutronxinnovation.com"
              className="ml-1 hover:text-gray-400">
              NeutronX Innovation
            </a>
          </div>
        </div>
      </div>
    </>
  }

  return <>
    <Head>
      <title>Tyny.in - Shorten URLs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="title" content="Tyny.in - Shorten URLs" />
      <meta name="description" content="Shorten URLs" />
      <meta name="keywords" content="URL, URL shortener, shorten URLs, tyny, tyny.in, URL shorten service" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="10 days" />
      <meta name="author" content="neutronxinnovation.com" />
    </Head>
    {navigation()}
    <div className='page-container'>{children}</div>
    {footer()}
  </>;
}