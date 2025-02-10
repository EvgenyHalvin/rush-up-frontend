import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import stickerGif from "./assets/sticker.gif";

const API_URL = import.meta.env.VITE_API_URL;

// Добавим вспомогательные функции для генерации случайных значений
const generateRandomTelegramId = () => {
  // Telegram ID обычно 8-10 значный номер
  return Math.floor(Math.random() * 9000000000) + 1000000000;
};

const generateRandomUsername = () => {
  const adjectives = ['Happy', 'Clever', 'Funny', 'Smart', 'Cool'];
  const nouns = ['Monkey', 'Panda', 'Tiger', 'Lion', 'Bear'];
  const number = Math.floor(Math.random() * 1000);
  
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]}${
    nouns[Math.floor(Math.random() * nouns.length)]}${number}`;
};

function MainPage() {
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
          telegramId: generateRandomTelegramId(),
          username: generateRandomUsername(),
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
      <button onClick={sendUserDataHandler} className="button" disabled={isLoading}>
        {isLoading ? "Отправляем ответ..." : "Да"}
        {isLoading && <div className="button-spinner" />}
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
