import { useState, useEffect } from "react";

function useContactPageLogic() {
  const [text, setText] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer;
    if (countdown > 0 && text) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(timer);
      setCountdown(5);
      setText(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, text]);

  const handleClick = () => {
    if (message.trim() === "") {
      setShowEmptyMessage(true);
    } else {
      setText(true);
      setShowEmptyMessage(false);
      setCountdown(5);
    }
  };

  return {
    text,
    message,
    showEmptyMessage,
    countdown,
    handleClick,
    setMessage
  };
}

export default useContactPageLogic;
