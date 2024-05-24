import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { StreamCreated } from "../generated/schema"
import { StreamCreated as StreamCreatedEvent } from "../generated/SalaryStreaming/SalaryStreaming"
import { handleStreamCreated } from "../src/salary-streaming"
import { createStreamCreatedEvent } from "./salary-streaming-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let streamId = BigInt.fromI32(234)
    let recipient = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let intervalType = 123
    let newStreamCreatedEvent = createStreamCreatedEvent(
      streamId,
      recipient,
      intervalType
    )
    handleStreamCreated(newStreamCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("StreamCreated created and stored", () => {
    assert.entityCount("StreamCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "streamId",
      "234"
    )
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "recipient",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "intervalType",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
