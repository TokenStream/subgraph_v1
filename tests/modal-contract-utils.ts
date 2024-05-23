import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdditionSuccessful,
  DeductionSuccessful,
  DepositSuccessful,
  TransferSuccessful,
  WithdrawalSuccessful
} from "../generated/ModalContract/ModalContract"

export function createAdditionSuccessfulEvent(
  user: Address,
  _amount: BigInt
): AdditionSuccessful {
  let additionSuccessfulEvent = changetype<AdditionSuccessful>(newMockEvent())

  additionSuccessfulEvent.parameters = new Array()

  additionSuccessfulEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  additionSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return additionSuccessfulEvent
}

export function createDeductionSuccessfulEvent(
  user: Address,
  _amount: BigInt
): DeductionSuccessful {
  let deductionSuccessfulEvent = changetype<DeductionSuccessful>(newMockEvent())

  deductionSuccessfulEvent.parameters = new Array()

  deductionSuccessfulEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  deductionSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return deductionSuccessfulEvent
}

export function createDepositSuccessfulEvent(
  user: Address,
  _amount: BigInt
): DepositSuccessful {
  let depositSuccessfulEvent = changetype<DepositSuccessful>(newMockEvent())

  depositSuccessfulEvent.parameters = new Array()

  depositSuccessfulEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return depositSuccessfulEvent
}

export function createTransferSuccessfulEvent(
  sender: Address,
  receiver: Address,
  _amount: BigInt
): TransferSuccessful {
  let transferSuccessfulEvent = changetype<TransferSuccessful>(newMockEvent())

  transferSuccessfulEvent.parameters = new Array()

  transferSuccessfulEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  transferSuccessfulEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  transferSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return transferSuccessfulEvent
}

export function createWithdrawalSuccessfulEvent(
  user: Address,
  _amount: BigInt
): WithdrawalSuccessful {
  let withdrawalSuccessfulEvent = changetype<WithdrawalSuccessful>(
    newMockEvent()
  )

  withdrawalSuccessfulEvent.parameters = new Array()

  withdrawalSuccessfulEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawalSuccessfulEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return withdrawalSuccessfulEvent
}
