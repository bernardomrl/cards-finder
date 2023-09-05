const filters = [
    { name: 'Elixir', value: 'elixir', color: 'purple' },
    { name: 'Raridade', value: 'rarity', color: 'blue' },
    { name: 'Arena', value: 'arena', color: 'red' },
    { name: 'Tipo', value: 'type', color: 'green' }
]

export default function Filters() {
    return (
        <div className="flex flex-col w-full max-w-md pl-6">
            <h1 className="text-gray-900 dark:text-gray-100 font-poppins font-semibold text-xl my-8">Filtros</h1>
            <div className="flex items-center justify-between w-full ">
                <button className='bg-purple-200 text-purple-800 font-inter font-bold text-xs mr-2 px-4 py-1 transition-colors rounded-full dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-300'>
                    Elixir
                </button>
                <button className='bg-blue-200 text-blue-800 font-inter font-bold text-xs mr-2 px-4 py-1 transition-colors rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-300'>
                    Raridade
                </button>
                <button className='bg-red-200 text-red-800 font-inter font-bold text-xs mr-2 px-4 py-1 transition-colors rounded-full dark:bg-red-900 dark:text-red-300 hover:bg-red-300'>
                    Arena
                </button>
                <button className='bg-green-200 text-green-800 font-inter font-bold text-xs mr-2 px-4 py-1 transition-colors rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-300'>
                    Tipo
                </button>
            </div>
        </div>

    )
}