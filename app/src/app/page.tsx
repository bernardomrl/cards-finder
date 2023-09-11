import { Header, Search, Filters, Results } from "@/components";

export default function Index() {
    return (
        <>
            <Header />
            <div className="flex flex-col space-y-6 mt-10">
                <Search />
                <Filters />
                <Results />
            </div>
        </>
    )
}