import {
  MediaSyncLicenseEvent as MediaSyncLicenseEventEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/NitrilitySync/NitrilitySync"
import {
  MediaSyncLicenseEvent,
  OwnershipTransferred,
} from "../generated/schema"

export function handleMediaSyncLicenseEvent(
  event: MediaSyncLicenseEventEvent,
): void {
  let entity = new MediaSyncLicenseEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.listedId = event.params.listedId
  entity.artistId = event.params.artistId
  entity.tokenURI = event.params.tokenURI
  entity.purchasingId = event.params.purchasingId
  entity.buyerAddr = event.params.buyerAddr
  entity.purchasingPrice = event.params.purchasingPrice
  entity.licensingType = event.params.licensingType
  entity.eventType = event.params.eventType
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
