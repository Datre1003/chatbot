const FeedbackPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-bold text-center text-purple-600 mb-4">
            Báo lỗi hoặc góp ý
          </h1>
          <p className="text-sm text-center text-gray-600 mb-6">
            Sự đóng góp ý kiến từ các bạn sẽ là sự hỗ trợ đặc lực giúp chúng tôi
            ngày càng tốt hơn.
          </p>
          <form className="space-y-4">
            <div>
              <textarea
                className="w-full p-3 border border-gray-300 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập phản hồi của bạn tại đây!"
                rows="4"
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email của bạn"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              Gửi ý kiến
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default FeedbackPage;
  