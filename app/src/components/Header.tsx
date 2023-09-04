export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4">
            <h1 className="text-gray-900 dark:text-gray-100 font-semibold font-poppins text-xl">API: Clash Royale</h1>
            <li className="flex justify-between items-center font-inter space-x-4">
                <a href="https://github.com/bernardomrl" className="text-gray-900 dark:text-gray-100 font-medium transition-opacity hover:opacity-75">@bernardomrl</a>
                <a href="https://github.com/vihstorck" className="text-gray-900 dark:text-gray-100 font-medium transition-opacity hover:opacity-75">@vihstorck</a>
            </li>
        </header>
    )
}