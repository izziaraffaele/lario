import curry from 'lodash/curry';
import { GateContext, GateParams, Gate } from '../types';

export const makeGate =
  <T extends GateParams = GateParams, S = string>(
    execute: (ctx: GateContext, subject: S, params?: T) => Promise<boolean>
  ) =>
  (ctx: GateContext): Gate<T, S> =>
    curry(execute)(ctx);
