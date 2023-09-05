import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

export default function Search() {
    return (
        <div className='max-w-md pl-6 mt-20 font-inter'>
            <div className="relative flex items-center w-full h-12 rounded-full shadow-md transition-shadow transition-duration-600 focus-within:shadow-lg bg-white overflow-hidden pl-6 pr-4">
                <input
                    className="peer h-full w-full outline-none text-sm text-black placeholder:text-black/50 pr-2"
                    type="text"
                    id="search"
                    placeholder="Encontre qualquer carta por aqui.." />
                <div className="grid place-items-center h-full w-12 text-black">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </div>
            </div>
        </div>
    )
}