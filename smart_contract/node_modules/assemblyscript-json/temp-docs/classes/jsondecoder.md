[assemblyscript-json](../README.md) / JSONDecoder

# Class: JSONDecoder<JSONHandlerT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `JSONHandlerT` | extends [`JSONHandler`](jsonhandler.md) |

## Table of contents

### Constructors

- [constructor](jsondecoder.md#constructor)

### Properties

- [\_state](jsondecoder.md#_state)
- [handler](jsondecoder.md#handler)

### Accessors

- [state](jsondecoder.md#state)

### Methods

- [deserialize](jsondecoder.md#deserialize)
- [isWhitespace](jsondecoder.md#iswhitespace)
- [parseArray](jsondecoder.md#parsearray)
- [parseBoolean](jsondecoder.md#parseboolean)
- [parseKey](jsondecoder.md#parsekey)
- [parseNull](jsondecoder.md#parsenull)
- [parseNumber](jsondecoder.md#parsenumber)
- [parseObject](jsondecoder.md#parseobject)
- [parseString](jsondecoder.md#parsestring)
- [parseValue](jsondecoder.md#parsevalue)
- [peekChar](jsondecoder.md#peekchar)
- [readAndAssert](jsondecoder.md#readandassert)
- [readChar](jsondecoder.md#readchar)
- [readEscapedChar](jsondecoder.md#readescapedchar)
- [readHexDigit](jsondecoder.md#readhexdigit)
- [readString](jsondecoder.md#readstring)
- [skipWhitespace](jsondecoder.md#skipwhitespace)

## Constructors

### constructor

• **new JSONDecoder**<`JSONHandlerT`\>(`handler`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `JSONHandlerT` | extends [`JSONHandler`](jsonhandler.md)<`JSONHandlerT`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `JSONHandlerT` |

#### Defined in

[decoder.ts:120](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L120)

## Properties

### \_state

• **\_state**: ``null`` \| [`DecoderState`](decoderstate.md) = `null`

#### Defined in

[decoder.ts:120](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L120)

___

### handler

• **handler**: `JSONHandlerT`

#### Defined in

[decoder.ts:119](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L119)

## Accessors

### state

• `get` **state**(): [`DecoderState`](decoderstate.md)

#### Returns

[`DecoderState`](decoderstate.md)

#### Defined in

[decoder.ts:126](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L126)

• `set` **state**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DecoderState`](decoderstate.md) |

#### Returns

`void`

#### Defined in

[decoder.ts:130](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L130)

## Methods

### deserialize

▸ **deserialize**(`buffer`, `decoderState?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `buffer` | `Uint8Array` | `undefined` |
| `decoderState` | ``null`` \| [`DecoderState`](decoderstate.md) | `null` |

#### Returns

`void`

#### Defined in

[decoder.ts:134](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L134)

___

### isWhitespace

▸ `Private` **isWhitespace**(`charCode`): `bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `charCode` | `number` |

#### Returns

`bool`

#### Defined in

[decoder.ts:406](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L406)

___

### parseArray

▸ `Private` **parseArray**(): `bool`

#### Returns

`bool`

#### Defined in

[decoder.ts:210](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L210)

___

### parseBoolean

▸ `Private` **parseBoolean**(): `bool`

#### Returns

`bool`

#### Defined in

[decoder.ts:370](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L370)

___

### parseKey

▸ `Private` **parseKey**(): `void`

#### Returns

`void`

#### Defined in

[decoder.ts:203](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L203)

___

### parseNull

▸ `Private` **parseNull**(): `bool`

#### Returns

`bool`

#### Defined in

[decoder.ts:385](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L385)

___

### parseNumber

▸ `Private` **parseNumber**(): `bool`

#### Returns

`bool`

#### Defined in

[decoder.ts:323](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L323)

___

### parseObject

▸ `Private` **parseObject**(): `bool`

#### Returns

`bool`

#### Defined in

[decoder.ts:176](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L176)

___

### parseString

▸ `Private` **parseString**(): `bool`

#### Returns

`bool`

#### Defined in

[decoder.ts:236](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L236)

___

### parseValue

▸ `Private` **parseValue**(): `bool`

#### Returns

`bool`

#### Defined in

[decoder.ts:163](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L163)

___

### peekChar

▸ `Private` **peekChar**(): `number`

#### Returns

`number`

#### Defined in

[decoder.ts:148](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L148)

___

### readAndAssert

▸ `Private` **readAndAssert**(`str`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`void`

#### Defined in

[decoder.ts:394](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L394)

___

### readChar

▸ `Private` **readChar**(): `number`

#### Returns

`number`

#### Defined in

[decoder.ts:155](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L155)

___

### readEscapedChar

▸ `Private` **readEscapedChar**(): `string`

#### Returns

`string`

#### Defined in

[decoder.ts:274](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L274)

___

### readHexDigit

▸ `Private` **readHexDigit**(): `number`

#### Returns

`number`

#### Defined in

[decoder.ts:310](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L310)

___

### readString

▸ `Private` **readString**(): `string`

#### Returns

`string`

#### Defined in

[decoder.ts:244](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L244)

___

### skipWhitespace

▸ `Private` **skipWhitespace**(): `void`

#### Returns

`void`

#### Defined in

[decoder.ts:400](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L400)
