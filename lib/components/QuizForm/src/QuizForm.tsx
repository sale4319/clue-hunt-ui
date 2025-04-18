"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Button } from "@clue-hunt-ui/button";

import messages from "./messages.json";
import styles from "./styles.module.css";

type QuizProps = {
  questions?: {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
  }[];
  handleUnlock?: () => void;
  theme?: "light" | "dark";
};

type QuestionProps = {
  question: {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
  };
  setAnswerStatus: (isCorrect: boolean) => void;
};

type ProgressBarProps = {
  currentQuestionIndex: number;
  totalQuestionsCount: number;
};

// Question Component
const Question = ({ question, setAnswerStatus }: QuestionProps) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      setAnswerStatus(selectedAnswerIndex === question.correctAnswerIndex);
    }
  }, [selectedAnswerIndex, question.correctAnswerIndex, setAnswerStatus]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
  }, [question]);

  const getClasses = (index: number) => {
    let classes: string[] = [];
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === index) {
        classes.push(styles.selected);
      }
      if (index === question.correctAnswerIndex) {
        if (selectedAnswerIndex === index) {
          classes.push(styles.correct);
        } else {
          classes.push(styles.incorrect);
        }
      }
    }
    return classes.join(" ");
  };

  return (
    <div className={styles.question}>
      <div className={styles.questionText}>{question.question}</div>
      <div className={styles.answers}>
        {question.answers.map((answer, index) => (
          <div
            key={index}
            className={`${styles.answer} ${getClasses(index)}`}
            onClick={() =>
              selectedAnswerIndex === null && setSelectedAnswerIndex(index)
            }
          >
            <span className={styles.answerText}>{answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ProgressBar Component
const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestionIndex,
  totalQuestionsCount,
}) => {
  const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100;

  return (
    <div className={styles.progressBar}>
      <div className={styles.text}>
        {currentQuestionIndex} answered (
        {totalQuestionsCount - currentQuestionIndex} remaining)
      </div>
      <div
        className={styles.inner}
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

// Quiz Component
const QuizForm: React.FC<QuizProps> = ({
  theme = "dark",
  questions = [],
  handleUnlock,
}) => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);
  const [answerStatus, setAnswerStatus] = useState<boolean | null>(null);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);

  useEffect(() => {
    setAnswerStatus(null);
  }, [questionIndex]);

  useEffect(() => {
    if (answerStatus) {
      setCorrectAnswerCount((count) => count + 1);
    }
  }, [answerStatus]);

  const onNextClick = () => {
    if (questions && questionIndex === questions.length - 1) {
      setQuizComplete(true);
    } else {
      setQuestionIndex(questionIndex === null ? 0 : questionIndex + 1);
    }
  };

  const onRestartClick = () => {
    setQuizComplete(false);
    setQuestionIndex(null);
    setCorrectAnswerCount(0);
  };

  if (questionIndex === null) {
    return (
      <div className={[styles.quiz, styles[theme]].join(" ")}>
        <h1>{messages.TITLE}</h1>
        <p>{messages.DESCRIPTION}</p>
        <p>
          <Button
            mode="up"
            onClick={onNextClick}
            label={messages.START_BUTTON}
            size="medium"
          />
        </p>
      </div>
    );
  }

  return (
    <div className={[styles.quiz, styles[theme]].join(" ")}>
      {quizComplete ? (
        <Fragment>
          <h1>{messages.TITLE_COMPLETE}</h1>
          <p>
            {messages.CORRECT_ANSWERS} {correctAnswerCount}{" "}
            {messages.TOTAL_QUESTIONS} {questions && questions.length}
          </p>
          {questionIndex !== null && correctAnswerCount === 6 ? (
            <p>
              <Button
                mode="slide"
                onClick={handleUnlock}
                label={messages.UNLOCK_BUTTON}
                size="medium"
              />
            </p>
          ) : (
            <p>
              <Button
                mode="raise"
                onClick={onRestartClick}
                label={messages.RESTART_BUTTON}
                size="medium"
              />
            </p>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <ProgressBar
            currentQuestionIndex={questionIndex}
            totalQuestionsCount={questions?.length || 0}
          />
          <Question
            question={questions![questionIndex]}
            setAnswerStatus={(isCorrect: boolean) => setAnswerStatus(isCorrect)}
          />
          {answerStatus !== null && (
            <div>
              <Button
                mode="slide"
                onClick={onNextClick}
                size="medium"
                label={
                  questions && questionIndex === questions.length - 1
                    ? messages.RESULTS_BUTTON
                    : messages.NEXT_BUTTON
                }
              />
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default QuizForm;
