import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AdditionSuccessful } from "../generated/schema"
import { AdditionSuccessful as AdditionSuccessfulEvent } from "../generated/ModalContract/ModalContract"
import { handleAdditionSuccessful } from "../src/modal-contract"
import { createAdditionSuccessfulEvent } from "./modal-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let _amount = BigInt.fromI32(234)
    let newAdditionSuccessfulEvent = createAdditionSuccessfulEvent(
      user,
      _amount
    )
    handleAdditionSuccessful(newAdditionSuccessfulEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdditionSuccessful created and stored", () => {
    assert.entityCount("AdditionSuccessful", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdditionSuccessful",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AdditionSuccessful",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
