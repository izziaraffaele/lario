import { useEffect } from 'react';
import { useTheme } from '@quillforms/renderer-core';
import { useAccount, useEnsName } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { BlockTypeDisplayProps } from '../types';
import { LinearProgress } from '@mui/material';

export function ConnectWalletBlock(props: BlockTypeDisplayProps) {
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
  const { data, isFetched } = useEnsName({ address, chainId: 1 });

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

  if (!isConnected) return <ConnectButton />;

  if (!isFetched) return <LinearProgress />;

  return (
    <div style={{ color: theme.answersColor }}>
      Connected with {data || address}
    </div>
  );
}
