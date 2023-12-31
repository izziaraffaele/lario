import { useEffect } from 'react';
import { useTheme } from '@quillforms/renderer-core';

import { BlockTypeDisplayProps } from '../types';
import { QuillformButton } from '../QuillformButton';

export function MintNFTBlock(props: BlockTypeDisplayProps) {
  const theme = useTheme();

  const {
    setIsAnswered,
    showNextBtn,
    setIsValid,
    setValidationErr,
    showErrMsg,
    attributes,
  } = props;

  const handleMint = () => {
    setTimeout(() => {
      setIsAnswered(true);
      showNextBtn(true);
      setIsValid(true);
      showErrMsg(false);
    }, 2000);
  };
  useEffect(() => {
    setIsAnswered(false);
    showNextBtn(false);
    if (attributes.required) {
      setIsValid(false);
      setValidationErr('The field is required!');
    }
  }, []); // eslint-disable-line

  return (
    <div style={{ color: theme.answersColor }}>
      <QuillformButton onClick={handleMint}>Mint</QuillformButton>
    </div>
  );
}
