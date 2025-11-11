"use client";

import { GalaxyBackground } from "@clue-hunt-ui/galaxy-background";
import styles from "./Container.module.css";

/**
 * Theme options for the Container component
 */
export type ContainerTheme = "light" | "dark";

/**
 * Padding size options for responsive design
 */
export type PaddingSize = "none" | "small" | "medium" | "large" | "extra-large";

/**
 * Layout width constraints
 */
export type MaxWidth =
  | "small"
  | "medium"
  | "large"
  | "extra-large"
  | "full"
  | "none";

/**
 * Layout variant options
 */
export type LayoutVariant = "default" | "centered" | "full-height" | "minimal";

/**
 * Props for the Container component
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to be rendered inside the container */
  children: React.ReactNode;

  /** Theme for the galaxy background and overall styling */
  theme?: ContainerTheme;

  /** Custom CSS class name for additional styling */
  className?: string;

  /** Padding size for responsive spacing */
  padding?: PaddingSize;

  /** Maximum width constraint for the content area */
  maxWidth?: MaxWidth;

  /** Layout variant for different use cases */
  variant?: LayoutVariant;

  /** Whether to show the galaxy background */
  showBackground?: boolean;

  /** Custom top padding override */
  topPadding?: string | number;

  /** ARIA label for accessibility */
  "aria-label"?: string;
}
export const Container = ({
  children,
  theme = "dark",
  className = "",
  padding = "medium",
  maxWidth = "large",
  variant = "default",
  showBackground = true,
  topPadding,
  "aria-label": ariaLabel,
  ...props
}: ContainerProps) => {
  // Generate CSS class names based on props
  const containerClasses = [
    styles.container,
    styles[`padding-${padding}`],
    styles[`variant-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const sectionClasses = [
    styles.sectionContainer,
    styles[`maxWidth-${maxWidth}`],
  ]
    .filter(Boolean)
    .join(" ");

  // Custom inline styles
  const containerStyle = topPadding
    ? {
        paddingTop:
          typeof topPadding === "number" ? `${topPadding}px` : topPadding,
      }
    : undefined;

  return (
    <div
      className={containerClasses}
      style={containerStyle}
      role="main"
      aria-label={ariaLabel}
      {...props}
    >
      {showBackground && <GalaxyBackground theme={theme} />}
      <article>
        <section className={sectionClasses}>{children}</section>
      </article>
    </div>
  );
};
