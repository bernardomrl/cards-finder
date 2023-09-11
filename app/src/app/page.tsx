'use client';
import { Header, Search, Filters, Results } from "@/components";
import { useState, useEffect } from 'react';
import Card from '@/components/interfaceCard';

export default function Index() {
    const [cards, setCards] = useState<Card[]>([]);
    const [sortBy, setSortBy] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>(''); 

    useEffect(() => {
        fetch("https://royaleapi.github.io/cr-api-data/json/cards.json")
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.map(
                    (card: Card) => ({
                        key: card.key,
                        name: card.name,
                        description: card.description,
                        elixir: card.elixir,
                        type: card.type,
                        rarity: card.rarity,
                        arena: card.arena,
                    })
                );
                setCards(formattedData);
            });
    }, []);

    const handleSortChange = (property: string) => {
        setSortBy(property);
    }

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }

    return (
        <>
            <Header />
            <div className="flex flex-col p-6 space-y-8">
                <Search onSearch={handleSearch}/>
                <Filters onSortChange={handleSortChange} />
                <div className="divider"></div>
                <Results cards={cards} sortBy={sortBy} searchTerm={searchTerm}/>
            </div>
        </>
    )
}