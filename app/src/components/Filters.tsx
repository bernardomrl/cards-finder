import { ElixirIcon, RarityIcon, ArenaIcon, TypeIcon } from "@/components/icons";

const filters = [
    { name: 'Elixir', icon: ElixirIcon },
    { name: 'Raridade', icon: RarityIcon },
    { name: 'Arena', icon: ArenaIcon },
    { name: 'Tipo', icon: TypeIcon }
]

export default function Filters() {
    return (
        <div className="flex flex-col w-full max-w-screen-md pl-6">
            <h1 className="text-gray-900 dark:text-gray-100 font-poppins font-semibold text-xl my-8">Filtros</h1>
            <div className="flex items-center space-x-10">
                {filters.map((filter) => (
                    <button className="text-center p-4 flex flex-col items-center justify-center border border-gray-500 rounded-xl text-gray-500 text-base dark:text-gray-700 font-medium font-inter">
                        <filter.icon className="h-6 w-6 mb-2 text-gray-300" />
                        {filter.name}
                    </button>
                ))}
            </div>
        </div>
    )
}