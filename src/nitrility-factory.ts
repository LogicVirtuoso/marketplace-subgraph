import {
  CollectionCreated as CollectionCreatedEvent,
  Licenseburnt as LicenseburntEvent,
  Licensetransfer as LicensetransferEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SoldLicenseEvent as SoldLicenseEventEvent
} from "../generated/NitrilityFactory/NitrilityFactory"
import {
  CollectionCreated,
  Licenseburnt,
  Licensetransfer,
  OwnershipTransferred,
  SoldLicenseEvent
} from "../generated/schema"

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let entity = new CollectionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.artistId = event.params.artistId
  entity.collectionAddr = event.params.collectionAddr

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLicenseburnt(event: LicenseburntEvent): void {
  let entity = new Licenseburnt(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLicensetransfer(event: LicensetransferEvent): void {
  let entity = new Licensetransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSoldLicenseEvent(event: SoldLicenseEventEvent): void {
  let entity = new SoldLicenseEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyerAddr = event.params.buyerAddr
  entity.listedId = event.params.listedId
  entity.tokenId = event.params.tokenId
  entity.tokenURI = event.params.tokenURI
  entity.artistId = event.params.artistId
  entity.price = event.params.price
  entity.licensingType = event.params.licensingType
  entity.eventType = event.params.eventType
  entity.mediaListingType = event.params.mediaListingType
  entity.copies = event.params.copies

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
