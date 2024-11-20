import { Link } from "react-router-dom";

function HomePage() {
    return (
        <main className="mt-[8rem] flex-1 flex flex-col items-center justify-center text-center px-4">
            <img
                src="/chatbot.jpg"
                alt="Chatbot"
                className="w-36 h-36 mb-6"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
                Xin chào! Mình là{" "}
                <span className="text-purple-500">Space Chatbot</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-md mb-6">
                Giúp bạn giải đáp thắc mắc, tra cứu thông tin một cách nhanh chóng và
                chính xác nhất!
            </p>
            <button className="bg-blue-500 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-600 transition">
                <Link to="/chat">
                    BẮT ĐẦU NGAY
                </Link>
            </button>
        </main>
    )
}

export default HomePage;