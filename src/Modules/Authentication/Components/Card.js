export default function Card(props) {
    return (
        <div class="flex justify-center mt-4">
            <div class="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 mx-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                {props.children}
            </div>
        </div>
    );
}