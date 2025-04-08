import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { QuestionIconToolTip } from "@clue-hunt-ui/question-icon-tooltip";
import { SubmitButton } from "@clue-hunt-ui/sumit-button";
import messages from "./messages.json";

import styles from "./QuestionForm.module.css";

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}
type QuestionFormProps = {
  questionIconSize?: "small" | "medium" | "large";
  handleUnlock?: () => void;
  firstQuestion?: string;
  firstHint?: string;
  firstPlaceholder?: string;
  secondQuestion?: string;
  secondHint?: string;
  secondPlaceholder?: string;
  successMessage?: string;
  darkMode?: boolean;
};

export const QuestionForm = ({
  questionIconSize = "medium",
  handleUnlock,
  firstQuestion = "What is your first question?",
  firstHint = "What is your first hint?",
  firstPlaceholder = "What is your first placeholder?",
  secondQuestion = "What is your second question?",
  secondHint = "What is your second hint?",
  secondPlaceholder = "What is your second placeholder?",
  successMessage = "What is your success message?",
  darkMode,
}: QuestionFormProps) => {
  const initialValues: FormValues = { answerOne: "", answerTwo: "" };
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{
    [key in keyof FormValues]?: boolean;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mode = darkMode ? styles.dark : styles.light;

  const submit = () => {
    console.log(formValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setTouched({ answerOne: true, answerTwo: true });
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
    }
  };

  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    const a1 = "React";
    const a2 = "586f6b697e";
    const regex1 = RegExp("^$|^" + a1 + "|^([FG]?\\d{5}|\\d{5}[AB])$");
    const regex2 = RegExp("^$|^" + a2 + "|^([FG]?\\d{5}|\\d{5}[AB])$");

    if (!values.answerOne) {
      errors.answerOne = messages.REQUIRED;
    } else if (values.answerOne.length < 4) {
      errors.answerOne = messages.SHORT;
    } else if (!regex1.test(values.answerOne)) {
      errors.answerOne = messages.FIRST_Q_WRONG;
    }

    if (!values.answerTwo) {
      errors.answerTwo = messages.REQUIRED;
    } else if (values.answerTwo.length < 4) {
      errors.answerTwo = messages.SHORT;
    } else if (!regex2.test(values.answerTwo)) {
      errors.answerTwo = messages.SECOND_Q_WRONG;
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
      if (handleUnlock) handleUnlock();
    }
  }, [formErrors, isSubmitting, handleUnlock]);

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className={styles.successMessage}>{successMessage}</span>
      )}
      <div className={[styles.formContainer, mode].join(" ")}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.formRow}>
            <label
              className={[styles.formLabel, mode].join(" ")}
              htmlFor="answerOne"
            >
              {firstQuestion}
              <QuestionIconToolTip
                size={questionIconSize}
                content={firstHint}
              />
            </label>
            <input
              placeholder={
                touched.answerOne && formErrors.answerOne
                  ? formErrors.answerOne
                  : firstPlaceholder
              }
              type="text"
              name="answerOne"
              id="answerOne"
              value={formValues.answerOne}
              onBlur={handleOnBlur}
              onChange={handleChange}
              className={
                touched.answerOne && formErrors.answerOne
                  ? styles.formInputError
                  : styles.formInput
              }
            />
          </div>

          <div className={styles.formRow}>
            <label
              className={[styles.formLabel, mode].join(" ")}
              htmlFor="answerTwo"
            >
              {secondQuestion}
              <QuestionIconToolTip
                size={questionIconSize}
                content={secondHint}
              />
            </label>
            <input
              placeholder={
                touched.answerTwo && formErrors.answerTwo
                  ? formErrors.answerTwo
                  : secondPlaceholder
              }
              type="text"
              name="answerTwo"
              id="answerTwo"
              value={formValues.answerTwo}
              onBlur={handleOnBlur}
              onChange={handleChange}
              className={
                touched.answerTwo && formErrors.answerTwo
                  ? styles.formInputError
                  : styles.formInput
              }
            />
          </div>
          <SubmitButton submit size={"medium"} label={messages.SUBMIT_BUTTON} />
        </form>
      </div>
    </>
  );
};
