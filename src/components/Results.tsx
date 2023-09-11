'use client';
import React, { useState, useEffect } from "react";
import Card from '@/components/interfaceCard';

interface ResultsProps {
    cards: Card[];
    sortBy: string;
    searchTerm: string;
}

export default function Results({ cards, sortBy, searchTerm }: ResultsProps) {
    const [sortedCards, setSortedCards] = useState<Card[]>([]);

    useEffect(() => {
        let newSortedCards = [...cards];

        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            newSortedCards = newSortedCards.filter((card) => {
                return card.name.toLowerCase().includes(lowerCaseSearchTerm);
            });
        }

        if (sortBy === 'elixir') {
            newSortedCards.sort((a, b) => a.elixir - b.elixir);
        } else if (sortBy === 'rarity') {
            newSortedCards.sort((a, b) => a.rarity.localeCompare(b.rarity));
        } else if (sortBy === 'arena') {
            newSortedCards.sort((a, b) => a.arena - b.arena);
        } else if (sortBy === 'type') {
            newSortedCards.sort((a, b) => a.type.localeCompare(b.type));
        }

        setSortedCards(newSortedCards);
    }, [cards, sortBy, searchTerm]);

    return (
        <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {sortedCards.map((card) => (
                    <div key={card.key} className="card max-w-md shadow-xl bg-base-300">
                        <div className="card-body flex flex-col space-y-2">
                            <h2 className="card-title">{card.name}</h2>
                            <p>
                                {card.description}
                            </p>
                            <div className="divider"></div>
                            <div className="card-actions justify-between">
                                <button className="bg-purple-500/50 text-white font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full w-10">
                                    {card.elixir}
                                </button>
                                <button className="bg-blue-500/50 text-white font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full w-24">
                                    {card.rarity}
                                </button>
                                <button className="bg-red-500/50 text-white font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full w-12">
                                    {card.arena}
                                </button>
                                <button className="bg-green-500/50 text-white font-inter font-bold text-xs px-4 py-1 transition-colors rounded-full w-20">
                                    {card.type}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
