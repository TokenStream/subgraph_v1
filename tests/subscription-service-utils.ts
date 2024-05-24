import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  SubscriptionPaid,
  SubscriptionPaused,
  SubscriptionPlanActivated,
  SubscriptionPlanCreated,
  SubscriptionPlanDeactivated,
  SubscriptionPlanUpdated,
  SubscriptionResumed,
  SubscriptionStarted
} from "../generated/SubscriptionService/SubscriptionService"

export function createSubscriptionPaidEvent(
  from: Address,
  to: Address,
  fee: BigInt
): SubscriptionPaid {
  let subscriptionPaidEvent = changetype<SubscriptionPaid>(newMockEvent())

  subscriptionPaidEvent.parameters = new Array()

  subscriptionPaidEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  subscriptionPaidEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  subscriptionPaidEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return subscriptionPaidEvent
}

export function createSubscriptionPausedEvent(
  subscriber: Address,
  planId: BigInt
): SubscriptionPaused {
  let subscriptionPausedEvent = changetype<SubscriptionPaused>(newMockEvent())

  subscriptionPausedEvent.parameters = new Array()

  subscriptionPausedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )
  subscriptionPausedEvent.parameters.push(
    new ethereum.EventParam("planId", ethereum.Value.fromUnsignedBigInt(planId))
  )

  return subscriptionPausedEvent
}

export function createSubscriptionPlanActivatedEvent(
  planId: BigInt
): SubscriptionPlanActivated {
  let subscriptionPlanActivatedEvent = changetype<SubscriptionPlanActivated>(
    newMockEvent()
  )

  subscriptionPlanActivatedEvent.parameters = new Array()

  subscriptionPlanActivatedEvent.parameters.push(
    new ethereum.EventParam("planId", ethereum.Value.fromUnsignedBigInt(planId))
  )

  return subscriptionPlanActivatedEvent
}

export function createSubscriptionPlanCreatedEvent(
  creator: Address,
  planfee: BigInt,
  planName: string
): SubscriptionPlanCreated {
  let subscriptionPlanCreatedEvent = changetype<SubscriptionPlanCreated>(
    newMockEvent()
  )

  subscriptionPlanCreatedEvent.parameters = new Array()

  subscriptionPlanCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  subscriptionPlanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "planfee",
      ethereum.Value.fromUnsignedBigInt(planfee)
    )
  )
  subscriptionPlanCreatedEvent.parameters.push(
    new ethereum.EventParam("planName", ethereum.Value.fromString(planName))
  )

  return subscriptionPlanCreatedEvent
}

export function createSubscriptionPlanDeactivatedEvent(
  planId: BigInt
): SubscriptionPlanDeactivated {
  let subscriptionPlanDeactivatedEvent =
    changetype<SubscriptionPlanDeactivated>(newMockEvent())

  subscriptionPlanDeactivatedEvent.parameters = new Array()

  subscriptionPlanDeactivatedEvent.parameters.push(
    new ethereum.EventParam("planId", ethereum.Value.fromUnsignedBigInt(planId))
  )

  return subscriptionPlanDeactivatedEvent
}

export function createSubscriptionPlanUpdatedEvent(
  creator: Address,
  planfee: BigInt,
  planName: string
): SubscriptionPlanUpdated {
  let subscriptionPlanUpdatedEvent = changetype<SubscriptionPlanUpdated>(
    newMockEvent()
  )

  subscriptionPlanUpdatedEvent.parameters = new Array()

  subscriptionPlanUpdatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  subscriptionPlanUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "planfee",
      ethereum.Value.fromUnsignedBigInt(planfee)
    )
  )
  subscriptionPlanUpdatedEvent.parameters.push(
    new ethereum.EventParam("planName", ethereum.Value.fromString(planName))
  )

  return subscriptionPlanUpdatedEvent
}

export function createSubscriptionResumedEvent(
  subscriber: Address,
  planId: BigInt
): SubscriptionResumed {
  let subscriptionResumedEvent = changetype<SubscriptionResumed>(newMockEvent())

  subscriptionResumedEvent.parameters = new Array()

  subscriptionResumedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )
  subscriptionResumedEvent.parameters.push(
    new ethereum.EventParam("planId", ethereum.Value.fromUnsignedBigInt(planId))
  )

  return subscriptionResumedEvent
}

export function createSubscriptionStartedEvent(
  subscriber: Address,
  planId: BigInt
): SubscriptionStarted {
  let subscriptionStartedEvent = changetype<SubscriptionStarted>(newMockEvent())

  subscriptionStartedEvent.parameters = new Array()

  subscriptionStartedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )
  subscriptionStartedEvent.parameters.push(
    new ethereum.EventParam("planId", ethereum.Value.fromUnsignedBigInt(planId))
  )

  return subscriptionStartedEvent
}
