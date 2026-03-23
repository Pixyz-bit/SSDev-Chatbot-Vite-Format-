    import { ChatMessage } from "./ChatMessage";
    import { useAutoScroll } from "../App";
    import './ChatMessages.css';

    function ChatMessages({ chatMessages }) { //const chatMessages = props.chatMessages
      const chatMessagesRef = useAutoScroll([chatMessages]); 
      return (
        <div className="chat-messages-container"
          ref={chatMessagesRef}>
          {chatMessages.map((chatMessage) => ( //.map() takes an array,loops through, then returns a new array with each item changed.
            <ChatMessage
              sender={chatMessage.sender}
              message={chatMessage.message}
              time={chatMessage.time}
              key={chatMessage.id} />
          )
          )}
        </div>
      )
    }

    export default ChatMessages;