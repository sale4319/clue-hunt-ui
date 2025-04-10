"use client";

import { useState } from "react";

import styles from "./UnlockToolTip.module.css";

interface UnlockToolTipProps {
  submit?: boolean;
  content?: string;
  size?: number;
  onClick?: () => void;
}

export const UnlockToolTip = ({
  submit = false,
  size = 30,
  content = "Tooltip text",
  ...props
}: UnlockToolTipProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button type="button" className={styles.tooltipButton} {...props} />

      {isTooltipVisible && <div className={styles.tooltip}>{content}</div>}
    </div>
  );
};
