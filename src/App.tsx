import { useState } from "react";
import Confetti from "react-confetti";

function App() {
  const [hide, setHide] = useState(false);
  const [confetti, setConfetti] = useState(false);

  return (
    <main className={`app ${hide ? "show-background" : ""}`}>
      <p className={`text ${hide ? "show" : ""}`}>
        Chúc em ngày 20/11 thật vui vẻ, hạnh phúc và xinh đẹp ^_^!
      </p>

      <button
        className={`open-suprise ${hide ? "hide" : ""}`}
        onClick={() => {
          setHide(true);
          const timeout = setTimeout(() => {
            setConfetti(true);
          }, 1000);
          timeout;

          return () => clearTimeout(timeout);
        }}
      >
        Em ấn vào đây để hiện ra bí mật nha
      </button>

      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        run={confetti}
      />
    </main>
  );
}

export default App;
