import '@quillforms/renderer-core';

declare module '@quillforms/renderer-core' {
  export type FormObj = {
    blocks: FormBlocks;
    themesList?: Theme[];
    theme?: Partial<FormTheme>;
    messages?: Partial<FormMessages>;
    logic?: FormLogic;
    settings?: {
      disableProgressBar?: boolean;
      disableWheelSwiping?: boolean;
      disableNavigationArrows?: boolean;
      animationDirection?: 'vertical' | 'horizontal';
      showQuestionsNumbers?: boolean;
      showLettersOnAnswers?: boolean;
      saveAnswersInBrowser?: boolean;
      displayBranding?: boolean;
    };
    hiddenFields?: Object;
    customCSS?: string;
    correctIncorrectQuiz?: {
      enabled: boolean;
      questions: {
        [key: string]: {
          correctAnswers: string[];
          explanation: string;
        };
      };
      showAnswersDuringQuiz?: boolean;
    };
  };
}

declare module '@quillforms/react-renderer-utils' {
  export function registerCoreBlocks(): void;
}
