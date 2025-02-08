import Swrapper from "../extras/Swrapper";

// Footer
const Footer = () => {
    return (

        <footer className="bg-transparent rounded-lg shadow shadow-cuaternary p-4 sm:px-20 xl:px-40 lg:px-24 2xl:px-96 dark:bg-gray-800">
            <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024
                    <a href="" className="hover:underline">  Carlos Hernandez™</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;