import { JSXElement } from "solid-js";
import themeStyles from "../../styles/theme.module.scss";
import styles from "./ErrorBoundary.module.scss";

type ErrorBoundaryFallbackPropsType = {
  err: any;
  reset: () => void;
};

export const ErrorBoundaryFallback = ({
  err,
  reset,
}: ErrorBoundaryFallbackPropsType): JSXElement => {
  return (
    <div class={`${themeStyles.backgroundMain} ${themeStyles.centralized}`}>
      <div class={styles.errorDisclaimer}>Something went wrong:</div>
      <div class={styles.errorMsg}>{err.message}</div>
      <button class={styles.errorResetBtn} onClick={reset}>
        Go to main page
      </button>
    </div>
  );
};
