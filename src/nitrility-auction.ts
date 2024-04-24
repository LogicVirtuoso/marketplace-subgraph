import {
  OfferEvent as OfferEventEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/NitrilityAuction/NitrilityAuction"
import { OfferEvent, OwnershipTransferred } from "../generated/schema"

export function handleOfferEvent(event: OfferEventEvent): void {
  let entity = new OfferEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.offerId = event.params.offerId
  entity.buyerAddr = event.params.buyerAddr
  entity.listedId = event.params.listedId
  entity.offerPrice = event.params.offerPrice
  entity.offerTime = event.params.offerTime
  entity.tokenURI = event.params.tokenURI
  entity.eventType = event.params.eventType
  entity.licensingType = event.params.licensingType
  entity.mediaListingType = event.params.mediaListingType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
