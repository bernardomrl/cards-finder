
'use client';
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const filters = [
    { name: 'Elixir', value: 'elixir', color: 'purple' },
    { name: 'Raridade', value: 'rarity', color: 'blue' },
    { name: 'Arena', value: 'arena', color: 'red' }
]

export default function Example() {
    const [isTypeOpen, setIsTypeOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsTypeOpen(!isTypeOpen);
    }

    return (
        <div className="flex flex-col w-full px-6">
            <h1 className="text-gray-900 dark:text-gray-100 font-poppins font-semibold text-xl my-8">Filtros</h1>
            <div className="flex items-center justify-between w-full max-w-md space-x-2">
                <button className='bg-purple-200 text-purple-800 font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-300'>
                    Elixir
                </button>
                <button className='bg-blue-200 text-blue-800 font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-300'>
                    Raridade
                </button>
                <button className='bg-red-200 text-red-800 font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full dark:bg-red-900 dark:text-red-300 hover:bg-red-300'>
                    Arena
                </button>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button onClick={handleDropdownClick} className="flex flex-row items-center justify-center space-x-2 bg-green-200 text-green-800 font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-300">
                            Tipo
                            <ChevronDownIcon className={`-mr-1 h-5 w-5 text-green-800 transition-transform ${isTypeOpen ? 'transform rotate-180' : ''}`} />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm hover:bg-gray-200 transition-colors'
                                            )}
                                        >
                                            Tropa
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm hover:bg-gray-200 transition-colors'
                                            )}
                                        >
                                            Contrução
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm hover:bg-gray-200 transition-colors'
                                            )}
                                        >
                                            Feitiço
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}