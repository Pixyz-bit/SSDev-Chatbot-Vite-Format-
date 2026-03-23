    import RobotProfileImage from '../assets/robot.png' //When importing an image, we just give it a name without curly brackets
//import UserProfileImage from '../assets/user.png'
import UserProfileImage from '../assets/me.jpg'

import './ChatMessage.css';

    export function ChatMessage({ sender, message, time }) {
      return (
        <div className={sender === 'user' ? 'chat-message-user' : "chat-message-robot"}>{/*Using conditional statement when setting a class name; if true do left of colon; if false do right*/}

          {sender === 'robot' && (<img src={RobotProfileImage} alt="" className="chat-message-profile" />)} {/*If the left side is true, execute right; if it is false, disregard*/}
          <div className="chat-message-text">
            {message}
            <div className='timeDate'> {time}</div>
            </div>
          {sender === 'user' && (<img src={UserProfileImage} alt="" className="chat-message-profile" />)} {/*Left side: boolean condition; Right Side: Execute if true*/}
        </div>
      );
    }