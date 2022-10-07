[assemblyscript-json](../README.md) / [JSON](../modules/json.md) / Obj

# Class: Obj

[JSON](../modules/json.md).Obj

## Hierarchy

- [`Value`](json.value.md)

  ↳ **`Obj`**

## Table of contents

### Constructors

- [constructor](json.obj.md#constructor)

### Properties

- [\_obj](json.obj.md#_obj)

### Accessors

- [isArr](json.obj.md#isarr)
- [isBool](json.obj.md#isbool)
- [isFloat](json.obj.md#isfloat)
- [isInteger](json.obj.md#isinteger)
- [isNull](json.obj.md#isnull)
- [isNum](json.obj.md#isnum)
- [isObj](json.obj.md#isobj)
- [isString](json.obj.md#isstring)
- [keys](json.obj.md#keys)

### Methods

- [get](json.obj.md#get)
- [getArr](json.obj.md#getarr)
- [getBool](json.obj.md#getbool)
- [getFloat](json.obj.md#getfloat)
- [getInteger](json.obj.md#getinteger)
- [getNum](json.obj.md#getnum)
- [getObj](json.obj.md#getobj)
- [getString](json.obj.md#getstring)
- [getValue](json.obj.md#getvalue)
- [has](json.obj.md#has)
- [set](json.obj.md#set)
- [stringify](json.obj.md#stringify)
- [valueOf](json.obj.md#valueof)
- [Array](json.obj.md#array)
- [Bool](json.obj.md#bool)
- [Float](json.obj.md#float)
- [Integer](json.obj.md#integer)
- [Null](json.obj.md#null)
- [Number](json.obj.md#number)
- [Object](json.obj.md#object)
- [String](json.obj.md#string)

## Constructors

### constructor

• **new Obj**()

#### Overrides

[Value](json.value.md).[constructor](json.value.md#constructor)

#### Defined in

[JSON.ts:312](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L312)

## Properties

### \_obj

• **\_obj**: `Map`<`string`, [`Value`](json.value.md)\>

#### Defined in

[JSON.ts:312](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L312)

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

___

### keys

• `get` **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[JSON.ts:319](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L319)

## Methods

### get

▸ **get**(`key`): ``null`` \| [`Value`](json.value.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Value`](json.value.md)

#### Defined in

[JSON.ts:356](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L356)

___

### getArr

▸ **getArr**(`key`): ``null`` \| [`Arr`](json.arr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Arr`](json.arr.md)

#### Defined in

[JSON.ts:407](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L407)

___

### getBool

▸ **getBool**(`key`): ``null`` \| [`Bool`](json.bool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Bool`](json.bool.md)

#### Defined in

[JSON.ts:399](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L399)

___

### getFloat

▸ **getFloat**(`key`): ``null`` \| [`Float`](json.float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Float`](json.float.md)

#### Defined in

[JSON.ts:383](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L383)

___

### getInteger

▸ **getInteger**(`key`): ``null`` \| [`Integer`](json.integer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Integer`](json.integer.md)

#### Defined in

[JSON.ts:391](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L391)

___

### getNum

▸ **getNum**(`key`): ``null`` \| [`Num`](json.num.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Num`](json.num.md)

#### Defined in

[JSON.ts:375](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L375)

___

### getObj

▸ **getObj**(`key`): ``null`` \| [`Obj`](json.obj.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Obj`](json.obj.md)

#### Defined in

[JSON.ts:415](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L415)

___

### getString

▸ **getString**(`key`): ``null`` \| [`Str`](json.str.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Str`](json.str.md)

#### Defined in

[JSON.ts:367](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L367)

___

### getValue

▸ **getValue**(`key`): ``null`` \| [`Value`](json.value.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| [`Value`](json.value.md)

#### Defined in

[JSON.ts:363](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L363)

___

### has

▸ **has**(`key`): `bool`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`bool`

#### Defined in

[JSON.ts:352](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L352)

___

### set

▸ **set**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[JSON.ts:342](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L342)

___

### stringify

▸ **stringify**(): `string`

#### Returns

`string`

#### Overrides

[Value](json.value.md).[stringify](json.value.md#stringify)

#### Defined in

[JSON.ts:323](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L323)

___

### valueOf

▸ **valueOf**(): `Map`<`string`, [`Value`](json.value.md)\>

#### Returns

`Map`<`string`, [`Value`](json.value.md)\>

#### Defined in

[JSON.ts:338](https://github.com/nearprotocol/assemblyscript-json/blob/386b834/assembly/JSON.ts#L338)

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
