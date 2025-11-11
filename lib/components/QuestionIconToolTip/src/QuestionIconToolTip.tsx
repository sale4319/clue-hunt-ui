"use client";

import { useState } from "react";
import QuestionIcon from "../../assets/question-icon.svg";
import styles from "./QuestionIconToolTip.module.css";

interface QuestionIconToolTipProps {
  content?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const QuestionIconToolTip = ({
  size = "medium",
  content = "Tooltip text",
  ...props
}: QuestionIconToolTipProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  return (
    <div
      className={styles.questionTooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button type="button" className={styles.questionButton} {...props}>
        <img
          src={QuestionIcon}
          className={[styles.questionIcon, styles[size]].join(" ")}
          alt="hint"
        />
      </button>
      {isTooltipVisible && (
        <div className={styles.questionTooltip}>{content}</div>
      )}
    </div>
  );
};
