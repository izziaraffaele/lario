import Moralis from 'moralis';
import { tokenOwnershipGate } from './gates/token-ownership.gate';
import { GateContext } from './types';
import { walletRepository } from './infrastructure/wallet.repository';
import { InvalidParamsError } from './errors/invalid-params.error';

export type Web3GateInit = { moralisApiKey: string };

async function init(params: Web3GateInit) {
  if (!Moralis.Core.isStarted) {
    await Moralis.start({
      apiKey: params.moralisApiKey,
    });
  }

  const gateCtx: GateContext = { walletRepository };

  return {
    verifyTokenOwnership: tokenOwnershipGate(gateCtx),
  };
}

async function fromDefaults(params: Partial<Web3GateInit> = {}) {
  const { moralisApiKey = process.env.MORALIS_API_KEY, ...others } = params;

  if (!moralisApiKey) {
    throw new InvalidParamsError('Moralis api key must be provided.');
  }

  return init({ moralisApiKey, ...others });
}

export const Web3Gate = {
  init,
  fromDefaults,
};

export type Web3GateInstance = Awaited<ReturnType<typeof init>>;
