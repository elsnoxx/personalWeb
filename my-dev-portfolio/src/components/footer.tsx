
function CurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © <CurrentYear /> <a href="https://flowbite.com/" className="hover:underline">Richard Ficek</a>. All Rights Reserved.
            </span>
            <p className="text-gray-500 dark:text-gray-400">
                Software Developer | MES | .NET | React | Python
            </p>
        </footer>
    );
}
