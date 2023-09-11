interface FiltersProps {
    onSortChange: (property: string) => void;
}

export default function Filters({ onSortChange }: FiltersProps) {
    const sortCards = (property: string) => {
        onSortChange(property);
    }

    return (
        <div className="flex flex-col justify-start items-start w-full max-w-md space-y-4">
            <h1 className="text-xl font-inter font-medium">Ordenar por:</h1>
            <div className="flex justify-between items-center w-full">
                <button onClick={() => sortCards("elixir")} className="bg-purple-500/50 text-white font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full w-max">
                    Elixir
                </button>
                <button onClick={() => sortCards("rarity")} className="bg-blue-500/50 text-white font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full w-max">
                    Rarity
                </button>
                <button onClick={() => sortCards("arena")} className="bg-red-500/50 text-white font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full w-max">
                    Arena
                </button>
                <button onClick={() => sortCards("type")} className="bg-green-500/50 text-white font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full w-max">
                    Type
                </button>
            </div>
        </div>
    )
}
