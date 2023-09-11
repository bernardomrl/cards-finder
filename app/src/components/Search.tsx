'use client';
import { useState } from 'react';

export default function Search({ onSearch }: { onSearch: (searchTerm: string) => void }) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = () => {
        onSearch(searchTerm);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="flex flex-col justify-start items-start w-full max-w-md">
            <label htmlFor="search" className="label">
                <span className="label-text">Encontre qualquer carta por aqui</span>
            </label>
            <div className="flex w-full">
                <input
                    type="text"
                    className="input input-md input-bordered bg-base-200 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

            </div>
        </div>
    )
}