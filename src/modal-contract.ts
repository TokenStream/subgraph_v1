import {
  AdditionSuccessful as AdditionSuccessfulEvent,
  DeductionSuccessful as DeductionSuccessfulEvent,
  DepositSuccessful as DepositSuccessfulEvent,
  TransferSuccessful as TransferSuccessfulEvent,
  WithdrawalSuccessful as WithdrawalSuccessfulEvent
} from "../generated/ModalContract/ModalContract"
import {
  AdditionSuccessful,
  DeductionSuccessful,
  DepositSuccessful,
  TransferSuccessful,
  WithdrawalSuccessful
} from "../generated/schema"

export function handleAdditionSuccessful(event: AdditionSuccessfulEvent): void {
  let entity = new AdditionSuccessful(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeductionSuccessful(
  event: DeductionSuccessfulEvent
): void {
  let entity = new DeductionSuccessful(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositSuccessful(event: DepositSuccessfulEvent): void {
  let entity = new DepositSuccessful(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSuccessful(event: TransferSuccessfulEvent): void {
  let entity = new TransferSuccessful(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalSuccessful(
  event: WithdrawalSuccessfulEvent
): void {
  let entity = new WithdrawalSuccessful(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
