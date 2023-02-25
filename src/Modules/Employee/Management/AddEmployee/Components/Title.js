export default function Title({title, description}) {
    return (
        <div>
            <h1 class="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">{title}</h1>
            <p class="text-center mb-6 text-sm font-normal text-gray-500 lg:text-md sm:px-8 xl:px-16 dark:text-gray-400">{description}</p>
        </div>
    )
}