import WecLogo from '../../../Components/WecLogo.png';
export default function Navbar() {
    return (
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" class="flex items-center ml-16 mt-4">
                    <img src={WecLogo} width="160px" alt="Company Logo" height="80px" class="mr-4 pt-2"></img>
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Human Resource System</span>
                </a>
            </div>
        </nav>
    )
}