import { useState } from "react";

import "./App.css";
import stickerGif from "./assets/sticker.gif";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendUserDataHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          telegramId: 123456789,
          username: "testUser",
        }),
      });

      const data = await response.json();
      if (data.message === "success") {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div>
        <h1>Поздравляем! Вы хорошая обезьяна!</h1>
        <div className="gif-container">
          <img src={stickerGif} alt="sticker" />
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Что-то сломалось, попробуйте позже.</div>;
  }

  return (
    <div>
      <h1>Вы любите спать и кушать?</h1>
      <button
        onClick={sendUserDataHandler}
        className="button"
        disabled={isLoading}
        
      >
        {isLoading ? "Отправляем ответ..." : "Да"}
      </button>
    </div>
  );
}

export default App;
