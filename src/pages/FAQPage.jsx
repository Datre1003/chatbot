import Accordion from "../components/Accordion";

const faqItems = [
  {
    question: "Chatbot hoạt động như thế nào?",
    answer:
      "Chatbot hoạt động bằng cách từ câu hỏi của người dùng, sử dụng kỹ thuật tìm văn bản liên quan đến câu hỏi trong bộ dữ liệu đã được vector hóa (text similarity) và lưu trữ thông qua vector database. Giúp lấy ra những đoạn văn bản có liên quan sau đó dùng mô hình ngôn ngữ lớn (LLM) để sinh câu trả lời.",
  },
  {
    question: "Cách sử dụng chatbot để tra cứu thông tin",
    answer: "Bạn có thể nhập câu hỏi vào chatbot và nhận câu trả lời chi tiết.",
  },
  {
    question: "Thông tin từ chatbot có đáng tin cậy không?",
    answer:
      "Thông tin từ chatbot là kết quả của các thuật toán và dữ liệu, tuy nhiên bạn nên kiểm chứng với nguồn chính xác khi cần thiết.",
  },
  {
    question: "Tôi có thể liên hệ hỗ trợ như thế nào?",
    answer:
      "Bạn có thể liên hệ với chúng tôi qua email hoặc số điện thoại hỗ trợ để được giải đáp chi tiết.",
  },
  {
    question: "Tôi có thể liên hệ hỗ trợ như thế nào?",
    answer:
      "Bạn có thể liên hệ với chúng tôi qua email hoặc số điện thoại hỗ trợ để được giải đáp chi tiết.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 my-[2rem]">
        <h1 className="text-xl font-bold text-center text-purple-600 mb-4">
          Những câu hỏi thường gặp (FAQs)
        </h1>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};

export default FAQPage;
