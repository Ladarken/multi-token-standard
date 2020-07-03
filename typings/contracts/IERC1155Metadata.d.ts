/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IERC1155MetadataInterface extends Interface {
  functions: {
    uri: TypedFunctionDescription<{ encode([_id]: [BigNumberish]): string }>;
  };

  events: {};
}

export class IERC1155Metadata extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IERC1155Metadata;
  attach(addressOrName: string): IERC1155Metadata;
  deployed(): Promise<IERC1155Metadata>;

  on(event: EventFilter | string, listener: Listener): IERC1155Metadata;
  once(event: EventFilter | string, listener: Listener): IERC1155Metadata;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IERC1155Metadata;
  removeAllListeners(eventName: EventFilter | string): IERC1155Metadata;
  removeListener(eventName: any, listener: Listener): IERC1155Metadata;

  interface: IERC1155MetadataInterface;

  functions: {
    uri(_id: BigNumberish): Promise<string>;
  };

  uri(_id: BigNumberish): Promise<string>;

  filters: {};

  estimate: {
    uri(_id: BigNumberish): Promise<BigNumber>;
  };
}
