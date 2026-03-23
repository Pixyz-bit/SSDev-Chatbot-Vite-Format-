import { useState} from 'react'
import {Chatbot} from 'supersimpledev'
import LoadingImage from '../assets/loading-spinner.gif'
import './ChatInput.css';
import dayjs from 'dayjs';
export function ChatInput({ chatMessages, setChatMessages }) { //2nd Children of App()
      const [inputText, setInputText] = useState(''); //[Current Data, Updater Function]
      const [isLoading, setIsLoading] = useState(false);
      const time = dayjs().format("hh:mm A");

      async function sendMessage() { //Asynchronous (async) code lets a program start an operation that takes time without blocking the main thread. This keeps apps responsive.
        if (isLoading || inputText === '') {
          return;
        }
        setIsLoading(true);

        const newChatMessages = [
          ...chatMessages, { //Spread(...) - takes the values in an array, and copies them into a new array
            message: inputText,
            sender: 'user',
            time: time,
            id: crypto.randomUUID()
          }
        ]

        setChatMessages(newChatMessages);
        setChatMessages([
          ...newChatMessages,
          {
            message: <img className="icon-loading" src={LoadingImage} />,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);
        setInputText('');
        const response = await Chatbot.getResponseAsync(inputText); //await can be used only inside async functions. It pauses the function’s execution until the awaited Promise settles (fulfilled or rejected)
        setChatMessages([
          ...newChatMessages, {
            message: response,
            sender: 'robot',
            time: time,
            id: crypto.randomUUID()
          }
        ]);
        setIsLoading(false);

        //setInputText('');
      }

      function clearTxtBox(){
        setChatMessages([]);
      }
      return (
        <div className="chat-input-container">
          <input
            placeholder="Send a message to chatbot"
            size="30"
            onChange={(event) => { setInputText(event.target.value) }}
            // onChange fires whenever the input’s value changes (on every keystroke for text inputs). 
            // event.target.value - Get the current value of the element that triggered this event.

            value={inputText} //value is the current text/content shown in a form element like textbox. Partnered with onChange
            onKeyDown={(event) => { event.key === 'Enter' && sendMessage() }}
            //onKeyDown runs when any key is pressed down while the input is focused. Used for Enter
            //condition && doSomething() executes the right side only if the condition is true.

            className="chat-input"
          />
          <button
            onClick={sendMessage}
            className='send-button'>
            Send
          </button>
        <button onClick={clearTxtBox} className='clear-button'>Clear</button>
        </div>
      )
    }