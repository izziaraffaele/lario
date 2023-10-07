import { BigNumberish } from 'moralis/common-core';

export type GateParams = { [key: string]: unknown };

export type Gate<T extends GateParams = GateParams, S = string> = (
  subject: S,
  params?: T
) => Promise<boolean>;

export type WalletRepository = {
  isHolderOfNFT(
    wallet: string,
    token: string,
    options?: {
      tokenId?: string;
      chainId?: string;
      format?: 'decimal' | 'hex';
    }
  ): Promise<boolean>;
  isHolderOfToken(
    wallet: string,
    token: string,
    options?: {
      minBalance: BigNumberish;
      maxBalance: BigNumberish;
      chainId?: string;
      format?: 'decimal' | 'hex';
    }
  ): Promise<boolean>;
};

export type GateContext = { walletRepository: WalletRepository };
