import { useState, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào! Đây là Space Chatbot, trợ lý đắc lực dành cho bạn! Bạn muốn tìm kiếm thông tin về những gì? Đừng quên chọn nguồn tham khảo phù hợp để mình có thể giúp bạn tìm kiếm thông tin chính xác nhất nha.",
    },
  ]);

  useEffect(() => {
    const introductionMessage = "Xin chào! Đây là Space Chatbot, trợ lý đắc lực dành cho bạn! Bạn muốn tìm kiếm thông tin về những gì? Đừng quên chọn nguồn tham khảo phù hợp để mình có thể giúp bạn tìm kiếm thông tin chính xác nhất nha.";
    let index = 0;
    const interval = setInterval(() => {
      setMessages((prev) => [
        ...prev.slice(0, prev.length - 1),
        { sender: "bot", text: introductionMessage.slice(0, index + 1) },
      ]);
      index++;
      if (index === introductionMessage.length) {
        clearInterval(interval);
      }
    }, 10); // Hiển thị mỗi ký tự trong 50ms
    setMessages([{ sender: "bot", text: "" }]); // Khởi tạo tin nhắn rỗng ban đầu
  }, []);
  

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Hàm typewriter để hiện từng chữ một
  const typewriter = (text, callback) => {
    let index = 0;
    const interval = setInterval(() => {
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage && lastMessage.sender === "bot") {
          return [
            ...prev.slice(0, prev.length - 1),
            { ...lastMessage, text: lastMessage.text + text.charAt(index) },
          ];
        }
        return [...prev, { sender: "bot", text: text.charAt(index) }];
      });
      index++;
      if (index === text.length) {
        clearInterval(interval);
        callback && callback();
      }
    }, 20); // Tốc độ hiển thị mỗi ký tự
  };

  // Xử lý gửi tin nhắn
  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setInput("");
    setLoading(true);

    // Giả lập thời gian phản hồi của chatbot
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "" }]);
      typewriter(" Cảm ơn bạn đã gửi câu hỏi! Mình sẽ phản hồi sớm nhé.", () => {
        setLoading(false);
      });
    }, 1500); // 1.5 giây loading
  };

  // Xử lý khi click câu hỏi phổ biến
  const handlePopularQuestionClick = (question) => {
    handleSendMessage(question); // Gửi câu hỏi như tin nhắn
  };

  const popularQuestions = [
    "Điều kiện nhận học bổng?",
    "Bao nhiêu điểm thì học lực Xuất sắc?",
    "Bao nhiêu điểm thì học lực Giỏi?",
    "Bao nhiêu điểm thì học lực Khá?",
    "Điều kiện nhận học bổng?",
    "Bao nhiêu điểm thì học lực Xuất sắc?",
    "Bao nhiêu điểm thì học lực Giỏi?",
    "Bao nhiêu điểm thì học lực Khá?",
    "Điều kiện nhận học bổng?",
    "Bao nhiêu điểm thì học lực Xuất sắc?",
    "Bao nhiêu điểm thì học lực Giỏi?",
    "Bao nhiêu điểm thì học lực Khá?",
    "Điều kiện nhận học bổng?",
    "Bao nhiêu điểm thì học lực Xuất sắc?",
    "Bao nhiêu điểm thì học lực Giỏi?",
    "Bao nhiêu điểm thì học lực Khá?",
  ];

  return (
    <div className="flex h-[34.4rem]">
      <div className="hidden md:block w-1/4 bg-white shadow-md rounded-l-lg p-4 overflow-y-auto border-t">
        <h2 className="text-lg font-semibold text-purple-700 mb-4">Những câu hỏi phổ biến</h2>
        <ul className="space-y-3">
          {popularQuestions.map((question, index) => (
            <li
              key={index}
              className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => handlePopularQuestionClick(question)} // Gửi câu hỏi khi click
            >
              <span className="mr-2">💬</span>
              <p className="text-gray-700">{question}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full md:w-3/4 flex-col h-full bg-gradient-to-b from-blue-50 to-blue-100 px-4 py-6">
        <div className="flex-1 overflow-y-auto bg-white shadow-md rounded-lg p-4 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              } mb-3`}
            >
              {message.sender === "bot" && (
                <img
                  src="/chatbot.jpg"
                  alt="Chatbot"
                  className="w-10 h-10 rounded-full mr-3"
                />
              )}
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg ${
                  message.sender === "bot"
                    ? "bg-blue-100 text-gray-700"
                    : "bg-blue-500 text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {loading && !messages.some(m => m.sender === "bot" && m.text === "") && (
            <div className="flex justify-start mb-3">
              <img
                src="/chatbot.jpg"
                alt="Chatbot"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="max-w-[70%] px-4 py-2 rounded-lg bg-blue-100 text-gray-700">
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            placeholder="Nhập câu hỏi tại đây..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(input)}
          />
          <button
            onClick={() => handleSendMessage(input)}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            ➤
          </button>
        </div>
        <p className="text-sm text-center text-gray-500 mt-4">
          Lưu ý: Mô hình có thể đưa ra câu trả lời không chính xác ở một số trường hợp, vì vậy hãy luôn kiểm chứng thông tin bạn nhé!
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
