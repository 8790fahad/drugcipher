[assemblyscript-json](../README.md) / [JSON](../modules/json.md) / Null

# Class: Null

[JSON](../modules/json.md).Null

## Hierarchy

- [`Value`](json.value.md)

  ↳ **`Null`**

## Table of contents

### Constructors

- [constructor](json.null.md#constructor)

### Accessors

- [isArr](json.null.md#isarr)
- [isBool](json.null.md#isbool)
- [isFloat](json.null.md#isfloat)
- [isInteger](json.null.md#isinteger)
- [isNull](json.null.md#isnull)
- [isNum](json.null.md#isnum)
- [isObj](json.null.md#isobj)
- [isString](json.null.md#isstring)

### Methods

- [stringify](json.null.md#stringify)
- [valueOf](json.null.md#valueof)
- [Array](json.null.md#array)
- [Bool](json.null.md#bool)
- [Float](json.null.md#float)
- [Integer](json.null.md#integer)
- [Null](json.null.md#null)
- [Number](json.null.md#number)
- [Object](json.null.md#object)
- [String](json.null.md#string)

## Constructors

### constructor

• **new Null**()

#### Overrides

[Value](json.value.md).[constructor](json.value.md#constructor)

#### Defined in

[JSON.ts:255](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L255)

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

[JSON.ts:260](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L260)

___

### valueOf

▸ **valueOf**(): ``null``

#### Returns

``null``

#### Defined in

[JSON.ts:264](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L264)

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
