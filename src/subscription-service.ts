import {
  SubscriptionPaid as SubscriptionPaidEvent,
  SubscriptionPaused as SubscriptionPausedEvent,
  SubscriptionPlanActivated as SubscriptionPlanActivatedEvent,
  SubscriptionPlanCreated as SubscriptionPlanCreatedEvent,
  SubscriptionPlanDeactivated as SubscriptionPlanDeactivatedEvent,
  SubscriptionPlanUpdated as SubscriptionPlanUpdatedEvent,
  SubscriptionResumed as SubscriptionResumedEvent,
  SubscriptionStarted as SubscriptionStartedEvent,
} from "../generated/SubscriptionService/SubscriptionService"
import {
  SubscriptionPaid,
  SubscriptionPaused,
  SubscriptionPlanActivated,
  SubscriptionPlanCreated,
  SubscriptionPlanDeactivated,
  SubscriptionPlanUpdated,
  SubscriptionResumed,
  SubscriptionStarted,
} from "../generated/schema"

export function handleSubscriptionPaid(event: SubscriptionPaidEvent): void {
  let entity = new SubscriptionPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionPaused(event: SubscriptionPausedEvent): void {
  let entity = new SubscriptionPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.subscriber = event.params.subscriber
  entity.planId = event.params.planId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionPlanActivated(
  event: SubscriptionPlanActivatedEvent,
): void {
  let entity = new SubscriptionPlanActivated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.planId = event.params.planId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionPlanCreated(
  event: SubscriptionPlanCreatedEvent,
): void {
  let entity = new SubscriptionPlanCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.creator = event.params.creator
  entity.planfee = event.params.planfee
  entity.planName = event.params.planName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionPlanDeactivated(
  event: SubscriptionPlanDeactivatedEvent,
): void {
  let entity = new SubscriptionPlanDeactivated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.planId = event.params.planId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionPlanUpdated(
  event: SubscriptionPlanUpdatedEvent,
): void {
  let entity = new SubscriptionPlanUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.creator = event.params.creator
  entity.planfee = event.params.planfee
  entity.planName = event.params.planName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionResumed(
  event: SubscriptionResumedEvent,
): void {
  let entity = new SubscriptionResumed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.subscriber = event.params.subscriber
  entity.planId = event.params.planId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionStarted(
  event: SubscriptionStartedEvent,
): void {
  let entity = new SubscriptionStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.subscriber = event.params.subscriber
  entity.planId = event.params.planId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
