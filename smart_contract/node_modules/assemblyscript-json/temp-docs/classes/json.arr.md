[assemblyscript-json](../README.md) / [JSON](../modules/json.md) / Arr

# Class: Arr

[JSON](../modules/json.md).Arr

## Hierarchy

- [`Value`](json.value.md)

  ↳ **`Arr`**

## Table of contents

### Constructors

- [constructor](json.arr.md#constructor)

### Properties

- [\_arr](json.arr.md#_arr)

### Accessors

- [isArr](json.arr.md#isarr)
- [isBool](json.arr.md#isbool)
- [isFloat](json.arr.md#isfloat)
- [isInteger](json.arr.md#isinteger)
- [isNull](json.arr.md#isnull)
- [isNum](json.arr.md#isnum)
- [isObj](json.arr.md#isobj)
- [isString](json.arr.md#isstring)

### Methods

- [push](json.arr.md#push)
- [stringify](json.arr.md#stringify)
- [valueOf](json.arr.md#valueof)
- [Array](json.arr.md#array)
- [Bool](json.arr.md#bool)
- [Float](json.arr.md#float)
- [Integer](json.arr.md#integer)
- [Null](json.arr.md#null)
- [Number](json.arr.md#number)
- [Object](json.arr.md#object)
- [String](json.arr.md#string)

## Constructors

### constructor

• **new Arr**()

#### Overrides

[Value](json.value.md).[constructor](json.value.md#constructor)

#### Defined in

[JSON.ts:284](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L284)

## Properties

### \_arr

• **\_arr**: [`Value`](json.value.md)[]

#### Defined in

[JSON.ts:284](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L284)

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

### push

▸ **push**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Value`](json.value.md) |

#### Returns

`void`

#### Defined in

[JSON.ts:290](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L290)

___

### stringify

▸ **stringify**(): `string`

#### Returns

`string`

#### Overrides

[Value](json.value.md).[stringify](json.value.md#stringify)

#### Defined in

[JSON.ts:294](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L294)

___

### valueOf

▸ **valueOf**(): [`Value`](json.value.md)[]

#### Returns

[`Value`](json.value.md)[]

#### Defined in

[JSON.ts:306](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L306)

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
