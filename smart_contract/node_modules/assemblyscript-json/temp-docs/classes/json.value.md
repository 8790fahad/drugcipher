[assemblyscript-json](../README.md) / [JSON](../modules/json.md) / Value

# Class: Value

[JSON](../modules/json.md).Value

## Hierarchy

- **`Value`**

  ↳ [`Str`](json.str.md)

  ↳ [`Num`](json.num.md)

  ↳ [`Integer`](json.integer.md)

  ↳ [`Null`](json.null.md)

  ↳ [`Bool`](json.bool.md)

  ↳ [`Arr`](json.arr.md)

  ↳ [`Obj`](json.obj.md)

## Table of contents

### Constructors

- [constructor](json.value.md#constructor)

### Accessors

- [isArr](json.value.md#isarr)
- [isBool](json.value.md#isbool)
- [isFloat](json.value.md#isfloat)
- [isInteger](json.value.md#isinteger)
- [isNull](json.value.md#isnull)
- [isNum](json.value.md#isnum)
- [isObj](json.value.md#isobj)
- [isString](json.value.md#isstring)

### Methods

- [stringify](json.value.md#stringify)
- [Array](json.value.md#array)
- [Bool](json.value.md#bool)
- [Float](json.value.md#float)
- [Integer](json.value.md#integer)
- [Null](json.value.md#null)
- [Number](json.value.md#number)
- [Object](json.value.md#object)
- [String](json.value.md#string)

## Constructors

### constructor

• **new Value**()

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

▸ `Abstract` **stringify**(): `string`

#### Returns

`string`

#### Defined in

[JSON.ts:195](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L195)

___

### Array

▸ `Static` **Array**(): [`Arr`](json.arr.md)

#### Returns

[`Arr`](json.arr.md)

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

#### Defined in

[JSON.ts:123](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L123)

___

### Null

▸ `Static` **Null**(): [`Null`](json.null.md)

#### Returns

[`Null`](json.null.md)

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

#### Defined in

[JSON.ts:117](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L117)

___

### Object

▸ `Static` **Object**(): [`Obj`](json.obj.md)

#### Returns

[`Obj`](json.obj.md)

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

#### Defined in

[JSON.ts:114](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L114)
