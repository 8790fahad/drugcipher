[assemblyscript-json](../README.md) / DecoderState

# Class: DecoderState

## Table of contents

### Constructors

- [constructor](decoderstate.md#constructor)

### Properties

- [buffer](decoderstate.md#buffer)
- [lastKey](decoderstate.md#lastkey)
- [readIndex](decoderstate.md#readindex)

### Accessors

- [ptr](decoderstate.md#ptr)

### Methods

- [readString](decoderstate.md#readstring)

## Constructors

### constructor

• **new DecoderState**(`buffer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Uint8Array` |

#### Defined in

[decoder.ts:106](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L106)

## Properties

### buffer

• **buffer**: `Uint8Array`

___

### lastKey

• **lastKey**: `string` = `""`

#### Defined in

[decoder.ts:105](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L105)

___

### readIndex

• **readIndex**: `number` = `0`

#### Defined in

[decoder.ts:106](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L106)

## Accessors

### ptr

• `get` **ptr**(): `number`

#### Returns

`number`

#### Defined in

[decoder.ts:109](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L109)

## Methods

### readString

▸ **readString**(`start`, `end?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`string`

#### Defined in

[decoder.ts:113](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L113)
