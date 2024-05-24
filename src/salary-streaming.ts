import {
  StreamCreated as StreamCreatedEvent,
  StreamPaused as StreamPausedEvent,
  StreamResumed as StreamResumedEvent,
  StreamStopped as StreamStoppedEvent,
  disbursementSuccessful as disbursementSuccessfulEvent,
} from "../generated/SalaryStreaming/SalaryStreaming"
import {
  StreamCreated,
  StreamPaused,
  StreamResumed,
  StreamStopped,
  disbursementSuccessful,
} from "../generated/schema"

export function handleStreamCreated(event: StreamCreatedEvent): void {
  let entity = new StreamCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.streamId = event.params.streamId
  entity.recipient = event.params.recipient
  entity.intervalType = event.params.intervalType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStreamPaused(event: StreamPausedEvent): void {
  let entity = new StreamPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.recipient = event.params.recipient
  entity.intervalType = event.params.intervalType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStreamResumed(event: StreamResumedEvent): void {
  let entity = new StreamResumed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.recipient = event.params.recipient
  entity.intervalType = event.params.intervalType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStreamStopped(event: StreamStoppedEvent): void {
  let entity = new StreamStopped(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.recipient = event.params.recipient
  entity.intervalType = event.params.intervalType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handledisbursementSuccessful(
  event: disbursementSuccessfulEvent,
): void {
  let entity = new disbursementSuccessful(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
