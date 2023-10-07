import Moralis from 'moralis';

import { WalletRepository } from '../types';
import { BigNumber } from 'moralis/common-core';

export const walletRepository: WalletRepository = {
  async isHolderOfNFT(wallet, token, options) {
    const { result } = await Moralis.EvmApi.nft.getWalletNFTs({
      address: wallet,
      chain: options?.chainId,
      format: options?.format,
      tokenAddresses: [token],
    });

    if (!result.length) {
      return false;
    }

    if (!options?.tokenId) {
      return true;
    }

    return Boolean(result.find((nft) => nft.tokenId === options.tokenId));
  },
  async isHolderOfToken(wallet, token, options) {
    const { result } = await Moralis.EvmApi.token.getWalletTokenBalances({
      address: wallet,
      chain: options?.chainId,
      tokenAddresses: [token],
    });

    const minBalance = BigNumber.create(options?.minBalance || 1);
    const maxBalance =
      options?.maxBalance && BigNumber.create(options.maxBalance);

    return result.some(
      (item) =>
        item.amount.toBigInt() >= minBalance.toBigInt() &&
        (!maxBalance || item.amount.toBigInt() <= maxBalance.toBigInt())
    );
  },
};
