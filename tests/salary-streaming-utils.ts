import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  StreamCreated,
  StreamPaused,
  StreamResumed,
  StreamStopped,
  disbursementSuccessful
} from "../generated/SalaryStreaming/SalaryStreaming"

export function createStreamCreatedEvent(
  streamId: BigInt,
  recipient: Address,
  intervalType: i32
): StreamCreated {
  let streamCreatedEvent = changetype<StreamCreated>(newMockEvent())

  streamCreatedEvent.parameters = new Array()

  streamCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "streamId",
      ethereum.Value.fromUnsignedBigInt(streamId)
    )
  )
  streamCreatedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  streamCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "intervalType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(intervalType))
    )
  )

  return streamCreatedEvent
}

export function createStreamPausedEvent(
  recipient: Address,
  intervalType: i32
): StreamPaused {
  let streamPausedEvent = changetype<StreamPaused>(newMockEvent())

  streamPausedEvent.parameters = new Array()

  streamPausedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  streamPausedEvent.parameters.push(
    new ethereum.EventParam(
      "intervalType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(intervalType))
    )
  )

  return streamPausedEvent
}

export function createStreamResumedEvent(
  recipient: Address,
  intervalType: i32
): StreamResumed {
  let streamResumedEvent = changetype<StreamResumed>(newMockEvent())

  streamResumedEvent.parameters = new Array()

  streamResumedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  streamResumedEvent.parameters.push(
    new ethereum.EventParam(
      "intervalType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(intervalType))
    )
  )

  return streamResumedEvent
}

export function createStreamStoppedEvent(
  recipient: Address,
  intervalType: i32
): StreamStopped {
  let streamStoppedEvent = changetype<StreamStopped>(newMockEvent())

  streamStoppedEvent.parameters = new Array()

  streamStoppedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  streamStoppedEvent.parameters.push(
    new ethereum.EventParam(
      "intervalType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(intervalType))
    )
  )

  return streamStoppedEvent
}

export function createdisbursementSuccessfulEvent(
  sender: Address,
  recipient: Address,
  amount: BigInt
): disbursementSuccessful {
  let disbursementSuccessfulEvent = changetype<disbursementSuccessful>(
    newMockEvent()
  )

  disbursementSuccessfulEvent.parameters = new Array()

  disbursementSuccessfulEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  disbursementSuccessfulEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  disbursementSuccessfulEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return disbursementSuccessfulEvent
}
