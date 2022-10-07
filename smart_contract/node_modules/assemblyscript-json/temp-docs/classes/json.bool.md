[assemblyscript-json](../README.md) / [JSON](../modules/json.md) / Bool

# Class: Bool

[JSON](../modules/json.md).Bool

## Hierarchy

- [`Value`](json.value.md)

  ↳ **`Bool`**

## Table of contents

### Constructors

- [constructor](json.bool.md#constructor)

### Properties

- [\_bool](json.bool.md#_bool)

### Accessors

- [isArr](json.bool.md#isarr)
- [isBool](json.bool.md#isbool)
- [isFloat](json.bool.md#isfloat)
- [isInteger](json.bool.md#isinteger)
- [isNull](json.bool.md#isnull)
- [isNum](json.bool.md#isnum)
- [isObj](json.bool.md#isobj)
- [isString](json.bool.md#isstring)

### Methods

- [stringify](json.bool.md#stringify)
- [valueOf](json.bool.md#valueof)
- [Array](json.bool.md#array)
- [Bool](json.bool.md#bool)
- [Float](json.bool.md#float)
- [Integer](json.bool.md#integer)
- [Null](json.bool.md#null)
- [Number](json.bool.md#number)
- [Object](json.bool.md#object)
- [String](json.bool.md#string)

## Constructors

### constructor

• **new Bool**(`_bool`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bool` | `bool` |

#### Overrides

[Value](json.value.md).[constructor](json.value.md#constructor)

#### Defined in

[JSON.ts:269](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L269)

## Properties

### \_bool

• **\_bool**: `bool`

## Accessors

### isArr

• `get` **isArr**(): `boolean`

#### Returns

`boolean`

#### Defined in

[JSON.ts:181](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L181)

___

### isBool

• `get` **isBool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[JSON.ts:167](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L167)

___

### isFloat

• `get` **isFloat**(): `boolean`

#### Returns

`boolean`

#### Defined in

[JSON.ts:153](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L153)

___

### isInteger

• `get` **isInteger**(): `boolean`

#### Returns

`boolean`

#### Defined in

[JSON.ts:160](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L160)

___

### isNull

• `get` **isNull**(): `boolean`

#### Returns

`boolean`

#### Defined in

[JSON.ts:174](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L174)

___

### isNum

• `get` **isNum**(): `boolean`

#### Returns

`boolean`

#### Defined in

[JSON.ts:146](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L146)

___

### isObj

• `get` **isObj**(): `boolean`

#### Returns

`boolean`

#### Defined in

[JSON.ts:188](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L188)

___

### isString

• `get` **isString**(): `boolean`

#### Returns

`boolean`

#### Defined in

[JSON.ts:139](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L139)

## Methods

### stringify

▸ **stringify**(): `string`

#### Returns

`string`

#### Overrides

[Value](json.value.md).[stringify](json.value.md#stringify)

#### Defined in

[JSON.ts:274](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L274)

___

### valueOf

▸ **valueOf**(): `bool`

#### Returns

`bool`

#### Defined in

[JSON.ts:278](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L278)

___

### Array

▸ `Static` **Array**(): [`Arr`](json.arr.md)

#### Returns

[`Arr`](json.arr.md)

#### Inherited from

[Value](json.value.md).[Array](json.value.md#array)

#### Defined in

[JSON.ts:132](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L132)

___

### Bool

▸ `Static` **Bool**(`b`): [`Bool`](json.bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `bool` |

#### Returns

[`Bool`](json.bool.md)

#### Inherited from

[Value](json.value.md).[Bool](json.value.md#bool)

#### Defined in

[JSON.ts:126](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L126)

___

### Float

▸ `Static` **Float**(`num`): [`Float`](json.float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`Float`](json.float.md)

#### Inherited from

[Value](json.value.md).[Float](json.value.md#float)

#### Defined in

[JSON.ts:120](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L120)

___

### Integer

▸ `Static` **Integer**(`num`): [`Integer`](json.integer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`Integer`](json.integer.md)

#### Inherited from

[Value](json.value.md).[Integer](json.value.md#integer)

#### Defined in

[JSON.ts:123](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L123)

___

### Null

▸ `Static` **Null**(): [`Null`](json.null.md)

#### Returns

[`Null`](json.null.md)

#### Inherited from

[Value](json.value.md).[Null](json.value.md#null)

#### Defined in

[JSON.ts:129](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L129)

___

### Number

▸ `Static` **Number**(`num`): [`Num`](json.num.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`Num`](json.num.md)

#### Inherited from

[Value](json.value.md).[Number](json.value.md#number)

#### Defined in

[JSON.ts:117](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L117)

___

### Object

▸ `Static` **Object**(): [`Obj`](json.obj.md)

#### Returns

[`Obj`](json.obj.md)

#### Inherited from

[Value](json.value.md).[Object](json.value.md#object)

#### Defined in

[JSON.ts:135](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L135)

___

### String

▸ `Static` **String**(`str`): [`Str`](json.str.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Str`](json.str.md)

#### Inherited from

[Value](json.value.md).[String](json.value.md#string)

#### Defined in

[JSON.ts:114](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L114)
