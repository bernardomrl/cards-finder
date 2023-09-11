export default function Header() {
    return (
        <header className="navbar bg-base-300 p-2">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">
                    CardsFinder
                </a>
            </div>
            <div className="flex-none space-x-4 p-2">
                <a href="https://github.com/bernardomrl/atividade-framework" className="btn btn-ghost hover:text-primary normal-case font-inter">Repositório GitHub</a>
            </div> 
        </header>
    )
}