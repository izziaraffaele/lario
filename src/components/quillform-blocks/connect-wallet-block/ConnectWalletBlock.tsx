import { useEffect } from 'react';
import { useTheme } from '@quillforms/renderer-core';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { BlockTypeDisplayProps } from '../types';

export  function ConnectWalletBlock(props: BlockTypeDisplayProps) {
  const theme = useTheme();

  const {
    setIsAnswered,
    showNextBtn,
    setIsValid,
    setValidationErr,
    showErrMsg,
    setVal,
    attributes,
  } = props;

  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (!address) {
      setIsAnswered(false);
      showNextBtn(false);
      if (attributes.required) {
        setIsValid(false);
        setValidationErr('The field is required!');
      }
    } else {
      setVal(address);
      setIsAnswered(true);
      showNextBtn(true);
      setIsValid(true);
      showErrMsg(false);
    }
  }, [address]);

  return !isConnected ? (
    <ConnectButton />
  ) : (
    <div style={{ color: theme.answersColor }}>Connected with {address}</div>
  );
}
