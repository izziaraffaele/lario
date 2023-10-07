import { BlockAttributes } from '@quillforms/types';

export type BlockTypeDisplayProps<T = unknown> = {
  inputRef?: React.Ref<any>;
  id: string;
  next: () => {};
  attributes: BlockAttributes;
  val: T;
  setIsValid: (v: boolean) => unknown;
  setIsAnswered: (v: boolean) => unknown;
  setIsPending: (v: boolean) => unknown;
  setPendingMsg: (v: boolean) => unknown;
  setValidationErr: (v: string) => unknown;
  setVal: (v: T) => unknown;
  showNextBtn: (v: boolean) => unknown;
  showErrMsg: (v: boolean) => unknown;
};
