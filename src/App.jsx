import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";
import axios from "axios";

function App() {
  const flashcards = [
    {
      id: `1`,
      question: "What is 2 + 2?",
      answer: "4",
      // options: ["option 1", "option 2", "option 3", "option 4"],
    },
  ];

  // const [flashcards, setFlashcards] = useState([]);
  // const [categories, setCategories] = useState([]);

  // const categoryEl = useRef();
  // const amountEl = useRef();

  // useEffect(() => {
  //   axios.get("https://opentdb.com/api_category.php").then((res) => {
  //     setCategories(res.data.trivia_categories);
  //   });
  // }, []);

  // useEffect(() => {}, []);

  // function decodeString(str) {
  //   const textArea = document.createElement("textarea");
  //   textArea.innerHTML = str;
  //   return textArea.value;
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios
  //     .get("https://opentdb.com/api.php", {
  //       params: {
  //         amount: amountEl.current.value,
  //         category: categoryEl.current.value,
  //       },
  //     })
  //     .then((res) => {
  //       setFlashcards(
  //         res.data.results.map((questionItem, index) => {
  //           const answer = decodeString(questionItem.correct_answer);
  //           const options = [
  //             ...questionItem.incorrect_answers.map((a) => decodeString(a)),
  //             answer,
  //           ];
  //           return {
  //             id: `${index}-${Date.now()}`,
  //             question: decodeString(questionItem.question),
  //             answer: answer,
  //             options: options.sort(() => Math.random() - 0.5),
  //           };
  //         })
  //       );
  //     });
  // }

  return (
    <>
      {}
      <form className="header">
        <div className="form-group">
          <label htmlFor="category">Category</label>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;
