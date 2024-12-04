import React from 'react'
import '../styles/Navigation.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/react'


const lista = [
    { name: "HOME", link: "#home" },
    { name: "PORTFOLIO", link: "#portfolio" },
    { name: "SKILLS", link: "#skills" },
    { name: "ABOUT", link: "#about" },
    { name: "CONTACT", link: "#contact" }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
/*
fixed flex max-w-7xl 
        xl:fixed bg-primary xl:flex flex-row justify-evenly items-center w-screen h-20 z-50 pl-[600px] shadow-sm shadow-senary*/

const Navigation = () => {

    return (

        <Disclosure as="nav" className='bg-primary fixed z-50 inset-x-0'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 2xl:shadow-2xl 2xl:mt-2 z-50'>
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-start
                        rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none
                        focus:ring-2 focus:ring-inset focus:ring-white">
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    {/*Logo que se expande como opciones del navegador */}
                    <div class="flex items-center justify-center sm:items-stretch sm:justify-start " >
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 ">
                                <ul className='list-home-1'>
                                    {lista.map((item) =>
                                        <li key={item.name} className='text-white font-bold' >
                                            <a href={item.link} className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white' aria-current="page">
                                                {item.name}
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Iconos de redes sociales*/}
                    <div className="flex items-start justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 ">
                                <ul className='img-contact'>
                                    <li>
                                        <a target='blank' href='https://www.linkedin.com/in/carlos-hernandez-llaocua-08993a237/'>
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='blank' href='https://www.instagram.com/car.loshernandez23/'>
                                            <i class='bx bxl-instagram' ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='blank' href='https://github.com/CarlosHernandezLl'>
                                            <i className='bx bxl-github'></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {lista.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.link}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                'relative block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>


        </Disclosure  >

    );
}
export default Navigation;