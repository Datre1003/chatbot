const Message = ({ text, isUser }) => {
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
        <div
          className={`px-4 py-2 rounded-lg ${
            isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          } max-w-xs`}
        >
          {text}
        </div>
      </div>
    );
  };
  
  export default Message;
  