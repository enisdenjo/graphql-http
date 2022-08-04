import { ExecutionResult } from 'graphql';
import { Client } from '../../client';
import { RequestParams } from '../../common';

export function texecute<D = unknown, E = unknown>(
  client: Client,
  params: RequestParams,
): [request: Promise<ExecutionResult<D, E>>, cancel: () => void] {
  let cancel!: () => void;
  const request = new Promise<ExecutionResult<D, E>>((resolve, reject) => {
    let result: ExecutionResult<D, E>;
    cancel = client.subscribe<D, E>(params, {
      next: (data) => (result = data),
      error: reject,
      complete: () => resolve(result),
    });
  });
  return [request, cancel];
}