'use client';
import { useState, useEffect } from 'react';

interface Card {
    key: string;
    name: string;
    elixir: number;
    type: string;
    rarity: string;
    arena: number;
}

export default function Results() {

    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        fetch('https://royaleapi.github.io/cr-api-data/json/cards.json')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map((card: { key: string; name: string; elixir: number; type: string; rarity: string; arena: number; }) => ({
                    key: card.key,
                    name: card.name,
                    elixir: card.elixir,
                    type: card.type,
                    rarity: card.rarity,
                    arena: card.arena
                }));
                setCards(formattedData);
            });
    }, [])

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 gap-x-4 gap-y-4">
                {cards.map(card => (
                    <div key={card.key} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h5>
                        </a>
                        <div className="flex justify-between">
                            <p className='bg-purple-200 text-purple-800 font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-300 w-max'>
                                {card.elixir}
                            </p>
                            <p className='bg-blue-200 text-blue-800 font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-300 w-max'>
                                {card.rarity}
                            </p>
                            <p className='bg-red-200 text-red-800 font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full dark:bg-red-900 dark:text-red-300 hover:bg-red-300 w-max'>
                                {card.arena}
                            </p>
                            <p className="flex flex-row items-center justify-center space-x-2 bg-green-200 text-green-800 font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-300 w-max">
                                {card.type}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}