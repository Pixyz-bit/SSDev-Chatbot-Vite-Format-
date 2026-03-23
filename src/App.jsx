import { useState, useRef, useEffect } from "react";
import { ChatInput } from "./components/ChatInput"; //common export{} - for multiple exports
import { Chatbot } from "supersimpledev";

import ChatMessages from "./components/ChatMessages"; //default export - when only one is being exported
import "./App.css";

export function useAutoScroll(dependencies) {
  const reference = useRef(); //useRef is a React hook that lets you remember a value without causing the component to re-render.
  useEffect(() => {
    //Run this code after React renders, or when something changes. Has 2 parts: effect function and dependency array(what changes)
    const containerElem = reference.current; //Grabs the value frrom the DOM node for the messages container (the <div> with ref={chatMessagesRef}).

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight; //Setting scrollTop equal to scrollHeight effectively scrolls to the very bottom (last message).
    }
  }, dependencies); //The effect re-runs only when the messages array changes—i.e., when a new user/robot message is added or the list updates. That’s the moment you want to auto‑scroll.
  return reference;
}

function App() {
  //Root Component
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: "Goodbye. Have a great day!",
      "i love you!": "I love you too!",
      time: `It's currently ${new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}`,
    });
  }, []);
  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="txt-intro">
          Welcome to Chatbot Project! Send a message using the textbox below
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
