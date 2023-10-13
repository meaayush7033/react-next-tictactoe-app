import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Board from "./components/Board";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button className={styles.btn} onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="tic tac toe game" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </main>
    </>
  );
}
