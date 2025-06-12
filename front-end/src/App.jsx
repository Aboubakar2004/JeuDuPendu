import React, { useEffect, useState } from "react";

function Data() {
  const [Word, setWord] = useState("");
  const [foundLetters, setFoundLetters] = useState([]);
  const [life, setLife] = useState("5");
  const [theme, setTheme] = useState("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const FetchData = async () => {
    const response = await fetch("https://trouve-mot.fr/api/size/5");
    const data = await response.json();
    setWord(data[0].name);
    console.log(data[0].name);
    setTheme(data[0].categorie);
    console.log(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  const GuessingWord = Word.split("");

  function removeAccents(str) {
    return str
      .join("")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split("");
  }

  const word = removeAccents(GuessingWord);
  console.log(word);

  function Bonjour(letter) {
    if (word.includes(letter)) {
      setFoundLetters([...foundLetters, letter]);
    } else {
      console.log("Rien à Signaler");
      setLife(life - 1);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col gap-8">
        <div>
          <h1 className="mb-">Catégorie : {theme}</h1>
        </div>
        <div className="flex gap-6 text-2xl">
          {word.map((letter, index) => (
            <div key={index}>
              <div className="bg-gray-200 p-6 border border-b-slate-950 w-30 h-30 items-center">
                <span
                  className={foundLetters.includes(letter) ? "" : "invisible"}
                >
                  {letter}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 flex gap-3">
          {alphabet.map((row, dex) => (
            <div
              key={dex}
              className="bg-gray-400 p-2 border border-black gap-4"
              onClick={() => Bonjour(row)}
            >
              {row}
            </div>
          ))}
        </div>
        <div>
          <h1>Nombre de vie : {life}</h1>
        </div>
      </div>
    </>
  );
}

export default Data;
