[assemblyscript-json](../README.md) / ThrowingJSONHandler

# Class: ThrowingJSONHandler

Extend from this class to handle events from parser.
This implementation crashes on every unimplemented set/push method
to allow easier validation of input.

## Hierarchy

- [`JSONHandler`](jsonhandler.md)

  ↳ **`ThrowingJSONHandler`**

## Table of contents

### Constructors

- [constructor](throwingjsonhandler.md#constructor)

### Methods

- [popArray](throwingjsonhandler.md#poparray)
- [popObject](throwingjsonhandler.md#popobject)
- [pushArray](throwingjsonhandler.md#pusharray)
- [pushObject](throwingjsonhandler.md#pushobject)
- [setBoolean](throwingjsonhandler.md#setboolean)
- [setFloat](throwingjsonhandler.md#setfloat)
- [setInteger](throwingjsonhandler.md#setinteger)
- [setNull](throwingjsonhandler.md#setnull)
- [setString](throwingjsonhandler.md#setstring)

## Constructors

### constructor

• **new ThrowingJSONHandler**()

#### Inherited from

[JSONHandler](jsonhandler.md).[constructor](jsonhandler.md#constructor)

## Methods

### popArray

▸ **popArray**(): `void`

#### Returns

`void`

#### Inherited from

[JSONHandler](jsonhandler.md).[popArray](jsonhandler.md#poparray)

#### Defined in

[decoder.ts:22](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L22)

___

### popObject

▸ **popObject**(): `void`

#### Returns

`void`

#### Inherited from

[JSONHandler](jsonhandler.md).[popObject](jsonhandler.md#popobject)

#### Defined in

[decoder.ts:28](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L28)

___

### pushArray

▸ **pushArray**(`name`): `bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`bool`

#### Overrides

[JSONHandler](jsonhandler.md).[pushArray](jsonhandler.md#pusharray)

#### Defined in

[decoder.ts:68](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L68)

___

### pushObject

▸ **pushObject**(`name`): `bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`bool`

#### Overrides

[JSONHandler](jsonhandler.md).[pushObject](jsonhandler.md#pushobject)

#### Defined in

[decoder.ts:73](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L73)

___

### setBoolean

▸ **setBoolean**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `bool` |

#### Returns

`void`

#### Overrides

[JSONHandler](jsonhandler.md).[setBoolean](jsonhandler.md#setboolean)

#### Defined in

[decoder.ts:41](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L41)

___

### setFloat

▸ **setFloat**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Overrides

[JSONHandler](jsonhandler.md).[setFloat](jsonhandler.md#setfloat)

#### Defined in

[decoder.ts:60](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L60)

___

### setInteger

▸ **setInteger**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Overrides

[JSONHandler](jsonhandler.md).[setInteger](jsonhandler.md#setinteger)

#### Defined in

[decoder.ts:52](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L52)

___

### setNull

▸ **setNull**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Overrides

[JSONHandler](jsonhandler.md).[setNull](jsonhandler.md#setnull)

#### Defined in

[decoder.ts:48](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L48)

___

### setString

▸ **setString**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Overrides

[JSONHandler](jsonhandler.md).[setString](jsonhandler.md#setstring)

#### Defined in

[decoder.ts:37](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/decoder.ts#L37)
