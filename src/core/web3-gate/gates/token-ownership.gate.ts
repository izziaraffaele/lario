import { InvalidParamsError } from '../errors/invalid-params.error';
import { makeGate } from './common.gate';

export type VerifyTokenOwnershipParams = {
  token: string;
  tokenId?: string | number;
  tokenType?: 'token' | 'nft';
};

export const tokenOwnershipGate = makeGate<VerifyTokenOwnershipParams>(
  (ctx, wallet, params) => {
    if (!params || !params.token) {
      throw new InvalidParamsError('Token address must be provided.');
    }

    const tokenType = params.tokenType || 'token';

    switch (tokenType) {
      case 'nft':
        return ctx.walletRepository.isHolderOfNFT(wallet, params.token, {
          tokenId: String(params.tokenId),
        });
      case 'token':
        return ctx.walletRepository.isHolderOfToken(wallet, params.token);
      default:
        throw new InvalidParamsError('Invalid token type');
    }
  }
);
