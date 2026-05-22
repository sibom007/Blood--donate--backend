
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model request
 * 
 */
export type request = $Result.DefaultSelection<Prisma.$requestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BloodGroup: {
  A_POS: 'A_POS',
  B_POS: 'B_POS',
  A_NEG: 'A_NEG',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BloodDonner: {
  YES: 'YES',
  NO: 'NO'
};

export type BloodDonner = (typeof BloodDonner)[keyof typeof BloodDonner]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  BlOCKED: 'BlOCKED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BloodDonner = $Enums.BloodDonner

export const BloodDonner: typeof $Enums.BloodDonner

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.requestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    request: 'request'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "request"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      request: {
        payload: Prisma.$requestPayload<ExtArgs>
        fields: Prisma.requestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.requestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.requestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          findFirst: {
            args: Prisma.requestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.requestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          findMany: {
            args: Prisma.requestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>[]
          }
          create: {
            args: Prisma.requestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          createMany: {
            args: Prisma.requestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.requestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>[]
          }
          delete: {
            args: Prisma.requestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          update: {
            args: Prisma.requestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          deleteMany: {
            args: Prisma.requestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.requestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.requestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>[]
          }
          upsert: {
            args: Prisma.requestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.requestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.requestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    request?: requestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    donorOf: number
    requesterOf: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donorOf?: boolean | UserCountOutputTypeCountDonorOfArgs
    requesterOf?: boolean | UserCountOutputTypeCountRequesterOfArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonorOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequesterOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    bloodType: $Enums.BloodGroup | null
    location: string | null
    availability: boolean | null
    bio: string | null
    age: number | null
    lastDonationDate: string | null
    bloodDonner: $Enums.BloodDonner | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    bloodType: $Enums.BloodGroup | null
    location: string | null
    availability: boolean | null
    bio: string | null
    age: number | null
    lastDonationDate: string | null
    bloodDonner: $Enums.BloodDonner | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    bloodType: number
    location: number
    availability: number
    bio: number
    age: number
    lastDonationDate: number
    bloodDonner: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    bloodType?: true
    location?: true
    availability?: true
    bio?: true
    age?: true
    lastDonationDate?: true
    bloodDonner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    bloodType?: true
    location?: true
    availability?: true
    bio?: true
    age?: true
    lastDonationDate?: true
    bloodDonner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    bloodType?: true
    location?: true
    availability?: true
    bio?: true
    age?: true
    lastDonationDate?: true
    bloodDonner?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: $Enums.UserStatus
    bloodType: $Enums.BloodGroup
    location: string
    availability: boolean
    bio: string
    age: number
    lastDonationDate: string | null
    bloodDonner: $Enums.BloodDonner
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    bloodType?: boolean
    location?: boolean
    availability?: boolean
    bio?: boolean
    age?: boolean
    lastDonationDate?: boolean
    bloodDonner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donorOf?: boolean | user$donorOfArgs<ExtArgs>
    requesterOf?: boolean | user$requesterOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    bloodType?: boolean
    location?: boolean
    availability?: boolean
    bio?: boolean
    age?: boolean
    lastDonationDate?: boolean
    bloodDonner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    bloodType?: boolean
    location?: boolean
    availability?: boolean
    bio?: boolean
    age?: boolean
    lastDonationDate?: boolean
    bloodDonner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    bloodType?: boolean
    location?: boolean
    availability?: boolean
    bio?: boolean
    age?: boolean
    lastDonationDate?: boolean
    bloodDonner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "bloodType" | "location" | "availability" | "bio" | "age" | "lastDonationDate" | "bloodDonner" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donorOf?: boolean | user$donorOfArgs<ExtArgs>
    requesterOf?: boolean | user$requesterOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      donorOf: Prisma.$requestPayload<ExtArgs>[]
      requesterOf: Prisma.$requestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      status: $Enums.UserStatus
      bloodType: $Enums.BloodGroup
      location: string
      availability: boolean
      bio: string
      age: number
      lastDonationDate: string | null
      bloodDonner: $Enums.BloodDonner
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donorOf<T extends user$donorOfArgs<ExtArgs> = {}>(args?: Subset<T, user$donorOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requesterOf<T extends user$requesterOfArgs<ExtArgs> = {}>(args?: Subset<T, user$requesterOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'Role'>
    readonly status: FieldRef<"user", 'UserStatus'>
    readonly bloodType: FieldRef<"user", 'BloodGroup'>
    readonly location: FieldRef<"user", 'String'>
    readonly availability: FieldRef<"user", 'Boolean'>
    readonly bio: FieldRef<"user", 'String'>
    readonly age: FieldRef<"user", 'Int'>
    readonly lastDonationDate: FieldRef<"user", 'String'>
    readonly bloodDonner: FieldRef<"user", 'BloodDonner'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.donorOf
   */
  export type user$donorOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    where?: requestWhereInput
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    cursor?: requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * user.requesterOf
   */
  export type user$requesterOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    where?: requestWhereInput
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    cursor?: requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    requesterId: string | null
    donorId: string | null
    phoneNumber: string | null
    dateOfDonation: string | null
    hospitalName: string | null
    hospitalAddress: string | null
    reason: string | null
    requestStatus: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    requesterId: string | null
    donorId: string | null
    phoneNumber: string | null
    dateOfDonation: string | null
    hospitalName: string | null
    hospitalAddress: string | null
    reason: string | null
    requestStatus: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    requesterId: number
    donorId: number
    phoneNumber: number
    dateOfDonation: number
    hospitalName: number
    hospitalAddress: number
    reason: number
    requestStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    requesterId?: true
    donorId?: true
    phoneNumber?: true
    dateOfDonation?: true
    hospitalName?: true
    hospitalAddress?: true
    reason?: true
    requestStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    requesterId?: true
    donorId?: true
    phoneNumber?: true
    dateOfDonation?: true
    hospitalName?: true
    hospitalAddress?: true
    reason?: true
    requestStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    requesterId?: true
    donorId?: true
    phoneNumber?: true
    dateOfDonation?: true
    hospitalName?: true
    hospitalAddress?: true
    reason?: true
    requestStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which request to aggregate.
     */
    where?: requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestWhereInput
    orderBy?: requestOrderByWithAggregationInput | requestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: requestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    requesterId: string
    donorId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus: $Enums.RequestStatus
    createdAt: Date
    updatedAt: Date
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    donorId?: boolean
    phoneNumber?: boolean
    dateOfDonation?: boolean
    hospitalName?: boolean
    hospitalAddress?: boolean
    reason?: boolean
    requestStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | userDefaultArgs<ExtArgs>
    requester?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type requestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    donorId?: boolean
    phoneNumber?: boolean
    dateOfDonation?: boolean
    hospitalName?: boolean
    hospitalAddress?: boolean
    reason?: boolean
    requestStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | userDefaultArgs<ExtArgs>
    requester?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type requestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    donorId?: boolean
    phoneNumber?: boolean
    dateOfDonation?: boolean
    hospitalName?: boolean
    hospitalAddress?: boolean
    reason?: boolean
    requestStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donor?: boolean | userDefaultArgs<ExtArgs>
    requester?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type requestSelectScalar = {
    id?: boolean
    requesterId?: boolean
    donorId?: boolean
    phoneNumber?: boolean
    dateOfDonation?: boolean
    hospitalName?: boolean
    hospitalAddress?: boolean
    reason?: boolean
    requestStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type requestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "donorId" | "phoneNumber" | "dateOfDonation" | "hospitalName" | "hospitalAddress" | "reason" | "requestStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["request"]>
  export type requestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | userDefaultArgs<ExtArgs>
    requester?: boolean | userDefaultArgs<ExtArgs>
  }
  export type requestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | userDefaultArgs<ExtArgs>
    requester?: boolean | userDefaultArgs<ExtArgs>
  }
  export type requestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | userDefaultArgs<ExtArgs>
    requester?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "request"
    objects: {
      donor: Prisma.$userPayload<ExtArgs>
      requester: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterId: string
      donorId: string
      phoneNumber: string
      dateOfDonation: string
      hospitalName: string
      hospitalAddress: string
      reason: string
      requestStatus: $Enums.RequestStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type requestGetPayload<S extends boolean | null | undefined | requestDefaultArgs> = $Result.GetResult<Prisma.$requestPayload, S>

  type requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<requestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['request'], meta: { name: 'request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {requestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends requestFindUniqueArgs>(args: SelectSubset<T, requestFindUniqueArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {requestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends requestFindUniqueOrThrowArgs>(args: SelectSubset<T, requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends requestFindFirstArgs>(args?: SelectSubset<T, requestFindFirstArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends requestFindFirstOrThrowArgs>(args?: SelectSubset<T, requestFindFirstOrThrowArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends requestFindManyArgs>(args?: SelectSubset<T, requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {requestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends requestCreateArgs>(args: SelectSubset<T, requestCreateArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {requestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends requestCreateManyArgs>(args?: SelectSubset<T, requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {requestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends requestCreateManyAndReturnArgs>(args?: SelectSubset<T, requestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {requestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends requestDeleteArgs>(args: SelectSubset<T, requestDeleteArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {requestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends requestUpdateArgs>(args: SelectSubset<T, requestUpdateArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {requestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends requestDeleteManyArgs>(args?: SelectSubset<T, requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends requestUpdateManyArgs>(args: SelectSubset<T, requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {requestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends requestUpdateManyAndReturnArgs>(args: SelectSubset<T, requestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {requestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends requestUpsertArgs>(args: SelectSubset<T, requestUpsertArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends requestCountArgs>(
      args?: Subset<T, requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends requestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: requestGroupByArgs['orderBy'] }
        : { orderBy?: requestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the request model
   */
  readonly fields: requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__requestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requester<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the request model
   */
  interface requestFieldRefs {
    readonly id: FieldRef<"request", 'String'>
    readonly requesterId: FieldRef<"request", 'String'>
    readonly donorId: FieldRef<"request", 'String'>
    readonly phoneNumber: FieldRef<"request", 'String'>
    readonly dateOfDonation: FieldRef<"request", 'String'>
    readonly hospitalName: FieldRef<"request", 'String'>
    readonly hospitalAddress: FieldRef<"request", 'String'>
    readonly reason: FieldRef<"request", 'String'>
    readonly requestStatus: FieldRef<"request", 'RequestStatus'>
    readonly createdAt: FieldRef<"request", 'DateTime'>
    readonly updatedAt: FieldRef<"request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * request findUnique
   */
  export type requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which request to fetch.
     */
    where: requestWhereUniqueInput
  }

  /**
   * request findUniqueOrThrow
   */
  export type requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which request to fetch.
     */
    where: requestWhereUniqueInput
  }

  /**
   * request findFirst
   */
  export type requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which request to fetch.
     */
    where?: requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for requests.
     */
    cursor?: requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * request findFirstOrThrow
   */
  export type requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which request to fetch.
     */
    where?: requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for requests.
     */
    cursor?: requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * request findMany
   */
  export type requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which requests to fetch.
     */
    where?: requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing requests.
     */
    cursor?: requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * request create
   */
  export type requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * The data needed to create a request.
     */
    data: XOR<requestCreateInput, requestUncheckedCreateInput>
  }

  /**
   * request createMany
   */
  export type requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many requests.
     */
    data: requestCreateManyInput | requestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * request createManyAndReturn
   */
  export type requestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * The data used to create many requests.
     */
    data: requestCreateManyInput | requestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * request update
   */
  export type requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * The data needed to update a request.
     */
    data: XOR<requestUpdateInput, requestUncheckedUpdateInput>
    /**
     * Choose, which request to update.
     */
    where: requestWhereUniqueInput
  }

  /**
   * request updateMany
   */
  export type requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update requests.
     */
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyInput>
    /**
     * Filter which requests to update
     */
    where?: requestWhereInput
    /**
     * Limit how many requests to update.
     */
    limit?: number
  }

  /**
   * request updateManyAndReturn
   */
  export type requestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * The data used to update requests.
     */
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyInput>
    /**
     * Filter which requests to update
     */
    where?: requestWhereInput
    /**
     * Limit how many requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * request upsert
   */
  export type requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * The filter to search for the request to update in case it exists.
     */
    where: requestWhereUniqueInput
    /**
     * In case the request found by the `where` argument doesn't exist, create a new request with this data.
     */
    create: XOR<requestCreateInput, requestUncheckedCreateInput>
    /**
     * In case the request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<requestUpdateInput, requestUncheckedUpdateInput>
  }

  /**
   * request delete
   */
  export type requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter which request to delete.
     */
    where: requestWhereUniqueInput
  }

  /**
   * request deleteMany
   */
  export type requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which requests to delete
     */
    where?: requestWhereInput
    /**
     * Limit how many requests to delete.
     */
    limit?: number
  }

  /**
   * request without action
   */
  export type requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    bloodType: 'bloodType',
    location: 'location',
    availability: 'availability',
    bio: 'bio',
    age: 'age',
    lastDonationDate: 'lastDonationDate',
    bloodDonner: 'bloodDonner',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    donorId: 'donorId',
    phoneNumber: 'phoneNumber',
    dateOfDonation: 'dateOfDonation',
    hospitalName: 'hospitalName',
    hospitalAddress: 'hospitalAddress',
    reason: 'reason',
    requestStatus: 'requestStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BloodDonner'
   */
  export type EnumBloodDonnerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodDonner'>
    


  /**
   * Reference to a field of type 'BloodDonner[]'
   */
  export type ListEnumBloodDonnerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodDonner[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    status?: EnumUserStatusFilter<"user"> | $Enums.UserStatus
    bloodType?: EnumBloodGroupFilter<"user"> | $Enums.BloodGroup
    location?: StringFilter<"user"> | string
    availability?: BoolFilter<"user"> | boolean
    bio?: StringFilter<"user"> | string
    age?: IntFilter<"user"> | number
    lastDonationDate?: StringNullableFilter<"user"> | string | null
    bloodDonner?: EnumBloodDonnerFilter<"user"> | $Enums.BloodDonner
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    donorOf?: RequestListRelationFilter
    requesterOf?: RequestListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrderInput | SortOrder
    bloodDonner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donorOf?: requestOrderByRelationAggregateInput
    requesterOf?: requestOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    status?: EnumUserStatusFilter<"user"> | $Enums.UserStatus
    bloodType?: EnumBloodGroupFilter<"user"> | $Enums.BloodGroup
    location?: StringFilter<"user"> | string
    availability?: BoolFilter<"user"> | boolean
    bio?: StringFilter<"user"> | string
    age?: IntFilter<"user"> | number
    lastDonationDate?: StringNullableFilter<"user"> | string | null
    bloodDonner?: EnumBloodDonnerFilter<"user"> | $Enums.BloodDonner
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    donorOf?: RequestListRelationFilter
    requesterOf?: RequestListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrderInput | SortOrder
    bloodDonner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: EnumRoleWithAggregatesFilter<"user"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"user"> | $Enums.UserStatus
    bloodType?: EnumBloodGroupWithAggregatesFilter<"user"> | $Enums.BloodGroup
    location?: StringWithAggregatesFilter<"user"> | string
    availability?: BoolWithAggregatesFilter<"user"> | boolean
    bio?: StringWithAggregatesFilter<"user"> | string
    age?: IntWithAggregatesFilter<"user"> | number
    lastDonationDate?: StringNullableWithAggregatesFilter<"user"> | string | null
    bloodDonner?: EnumBloodDonnerWithAggregatesFilter<"user"> | $Enums.BloodDonner
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type requestWhereInput = {
    AND?: requestWhereInput | requestWhereInput[]
    OR?: requestWhereInput[]
    NOT?: requestWhereInput | requestWhereInput[]
    id?: StringFilter<"request"> | string
    requesterId?: StringFilter<"request"> | string
    donorId?: StringFilter<"request"> | string
    phoneNumber?: StringFilter<"request"> | string
    dateOfDonation?: StringFilter<"request"> | string
    hospitalName?: StringFilter<"request"> | string
    hospitalAddress?: StringFilter<"request"> | string
    reason?: StringFilter<"request"> | string
    requestStatus?: EnumRequestStatusFilter<"request"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"request"> | Date | string
    updatedAt?: DateTimeFilter<"request"> | Date | string
    donor?: XOR<UserScalarRelationFilter, userWhereInput>
    requester?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type requestOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    donorId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donor?: userOrderByWithRelationInput
    requester?: userOrderByWithRelationInput
  }

  export type requestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: requestWhereInput | requestWhereInput[]
    OR?: requestWhereInput[]
    NOT?: requestWhereInput | requestWhereInput[]
    requesterId?: StringFilter<"request"> | string
    donorId?: StringFilter<"request"> | string
    phoneNumber?: StringFilter<"request"> | string
    dateOfDonation?: StringFilter<"request"> | string
    hospitalName?: StringFilter<"request"> | string
    hospitalAddress?: StringFilter<"request"> | string
    reason?: StringFilter<"request"> | string
    requestStatus?: EnumRequestStatusFilter<"request"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"request"> | Date | string
    updatedAt?: DateTimeFilter<"request"> | Date | string
    donor?: XOR<UserScalarRelationFilter, userWhereInput>
    requester?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type requestOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    donorId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: requestCountOrderByAggregateInput
    _max?: requestMaxOrderByAggregateInput
    _min?: requestMinOrderByAggregateInput
  }

  export type requestScalarWhereWithAggregatesInput = {
    AND?: requestScalarWhereWithAggregatesInput | requestScalarWhereWithAggregatesInput[]
    OR?: requestScalarWhereWithAggregatesInput[]
    NOT?: requestScalarWhereWithAggregatesInput | requestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"request"> | string
    requesterId?: StringWithAggregatesFilter<"request"> | string
    donorId?: StringWithAggregatesFilter<"request"> | string
    phoneNumber?: StringWithAggregatesFilter<"request"> | string
    dateOfDonation?: StringWithAggregatesFilter<"request"> | string
    hospitalName?: StringWithAggregatesFilter<"request"> | string
    hospitalAddress?: StringWithAggregatesFilter<"request"> | string
    reason?: StringWithAggregatesFilter<"request"> | string
    requestStatus?: EnumRequestStatusWithAggregatesFilter<"request"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"request"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"request"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    bloodType: $Enums.BloodGroup
    location: string
    availability?: boolean
    bio: string
    age: number
    lastDonationDate?: string | null
    bloodDonner?: $Enums.BloodDonner
    createdAt?: Date | string
    updatedAt?: Date | string
    donorOf?: requestCreateNestedManyWithoutDonorInput
    requesterOf?: requestCreateNestedManyWithoutRequesterInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    bloodType: $Enums.BloodGroup
    location: string
    availability?: boolean
    bio: string
    age: number
    lastDonationDate?: string | null
    bloodDonner?: $Enums.BloodDonner
    createdAt?: Date | string
    updatedAt?: Date | string
    donorOf?: requestUncheckedCreateNestedManyWithoutDonorInput
    requesterOf?: requestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bloodType?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: NullableStringFieldUpdateOperationsInput | string | null
    bloodDonner?: EnumBloodDonnerFieldUpdateOperationsInput | $Enums.BloodDonner
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorOf?: requestUpdateManyWithoutDonorNestedInput
    requesterOf?: requestUpdateManyWithoutRequesterNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bloodType?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: NullableStringFieldUpdateOperationsInput | string | null
    bloodDonner?: EnumBloodDonnerFieldUpdateOperationsInput | $Enums.BloodDonner
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorOf?: requestUncheckedUpdateManyWithoutDonorNestedInput
    requesterOf?: requestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    bloodType: $Enums.BloodGroup
    location: string
    availability?: boolean
    bio: string
    age: number
    lastDonationDate?: string | null
    bloodDonner?: $Enums.BloodDonner
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bloodType?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: NullableStringFieldUpdateOperationsInput | string | null
    bloodDonner?: EnumBloodDonnerFieldUpdateOperationsInput | $Enums.BloodDonner
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bloodType?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: NullableStringFieldUpdateOperationsInput | string | null
    bloodDonner?: EnumBloodDonnerFieldUpdateOperationsInput | $Enums.BloodDonner
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestCreateInput = {
    id?: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: userCreateNestedOneWithoutDonorOfInput
    requester: userCreateNestedOneWithoutRequesterOfInput
  }

  export type requestUncheckedCreateInput = {
    id?: string
    requesterId: string
    donorId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type requestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: userUpdateOneRequiredWithoutDonorOfNestedInput
    requester?: userUpdateOneRequiredWithoutRequesterOfNestedInput
  }

  export type requestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestCreateManyInput = {
    id?: string
    requesterId: string
    donorId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type requestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumBloodDonnerFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodDonner | EnumBloodDonnerFieldRefInput<$PrismaModel>
    in?: $Enums.BloodDonner[] | ListEnumBloodDonnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodDonner[] | ListEnumBloodDonnerFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodDonnerFilter<$PrismaModel> | $Enums.BloodDonner
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RequestListRelationFilter = {
    every?: requestWhereInput
    some?: requestWhereInput
    none?: requestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type requestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrder
    bloodDonner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrder
    bloodDonner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrder
    bloodDonner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumBloodDonnerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodDonner | EnumBloodDonnerFieldRefInput<$PrismaModel>
    in?: $Enums.BloodDonner[] | ListEnumBloodDonnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodDonner[] | ListEnumBloodDonnerFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodDonnerWithAggregatesFilter<$PrismaModel> | $Enums.BloodDonner
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodDonnerFilter<$PrismaModel>
    _max?: NestedEnumBloodDonnerFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type requestCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    donorId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type requestMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    donorId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type requestMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    donorId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type requestCreateNestedManyWithoutDonorInput = {
    create?: XOR<requestCreateWithoutDonorInput, requestUncheckedCreateWithoutDonorInput> | requestCreateWithoutDonorInput[] | requestUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: requestCreateOrConnectWithoutDonorInput | requestCreateOrConnectWithoutDonorInput[]
    createMany?: requestCreateManyDonorInputEnvelope
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
  }

  export type requestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<requestCreateWithoutRequesterInput, requestUncheckedCreateWithoutRequesterInput> | requestCreateWithoutRequesterInput[] | requestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: requestCreateOrConnectWithoutRequesterInput | requestCreateOrConnectWithoutRequesterInput[]
    createMany?: requestCreateManyRequesterInputEnvelope
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
  }

  export type requestUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<requestCreateWithoutDonorInput, requestUncheckedCreateWithoutDonorInput> | requestCreateWithoutDonorInput[] | requestUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: requestCreateOrConnectWithoutDonorInput | requestCreateOrConnectWithoutDonorInput[]
    createMany?: requestCreateManyDonorInputEnvelope
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
  }

  export type requestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<requestCreateWithoutRequesterInput, requestUncheckedCreateWithoutRequesterInput> | requestCreateWithoutRequesterInput[] | requestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: requestCreateOrConnectWithoutRequesterInput | requestCreateOrConnectWithoutRequesterInput[]
    createMany?: requestCreateManyRequesterInputEnvelope
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumBloodDonnerFieldUpdateOperationsInput = {
    set?: $Enums.BloodDonner
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type requestUpdateManyWithoutDonorNestedInput = {
    create?: XOR<requestCreateWithoutDonorInput, requestUncheckedCreateWithoutDonorInput> | requestCreateWithoutDonorInput[] | requestUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: requestCreateOrConnectWithoutDonorInput | requestCreateOrConnectWithoutDonorInput[]
    upsert?: requestUpsertWithWhereUniqueWithoutDonorInput | requestUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: requestCreateManyDonorInputEnvelope
    set?: requestWhereUniqueInput | requestWhereUniqueInput[]
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[]
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    update?: requestUpdateWithWhereUniqueWithoutDonorInput | requestUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: requestUpdateManyWithWhereWithoutDonorInput | requestUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[]
  }

  export type requestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<requestCreateWithoutRequesterInput, requestUncheckedCreateWithoutRequesterInput> | requestCreateWithoutRequesterInput[] | requestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: requestCreateOrConnectWithoutRequesterInput | requestCreateOrConnectWithoutRequesterInput[]
    upsert?: requestUpsertWithWhereUniqueWithoutRequesterInput | requestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: requestCreateManyRequesterInputEnvelope
    set?: requestWhereUniqueInput | requestWhereUniqueInput[]
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[]
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    update?: requestUpdateWithWhereUniqueWithoutRequesterInput | requestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: requestUpdateManyWithWhereWithoutRequesterInput | requestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[]
  }

  export type requestUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<requestCreateWithoutDonorInput, requestUncheckedCreateWithoutDonorInput> | requestCreateWithoutDonorInput[] | requestUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: requestCreateOrConnectWithoutDonorInput | requestCreateOrConnectWithoutDonorInput[]
    upsert?: requestUpsertWithWhereUniqueWithoutDonorInput | requestUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: requestCreateManyDonorInputEnvelope
    set?: requestWhereUniqueInput | requestWhereUniqueInput[]
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[]
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    update?: requestUpdateWithWhereUniqueWithoutDonorInput | requestUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: requestUpdateManyWithWhereWithoutDonorInput | requestUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[]
  }

  export type requestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<requestCreateWithoutRequesterInput, requestUncheckedCreateWithoutRequesterInput> | requestCreateWithoutRequesterInput[] | requestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: requestCreateOrConnectWithoutRequesterInput | requestCreateOrConnectWithoutRequesterInput[]
    upsert?: requestUpsertWithWhereUniqueWithoutRequesterInput | requestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: requestCreateManyRequesterInputEnvelope
    set?: requestWhereUniqueInput | requestWhereUniqueInput[]
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[]
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    update?: requestUpdateWithWhereUniqueWithoutRequesterInput | requestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: requestUpdateManyWithWhereWithoutRequesterInput | requestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutDonorOfInput = {
    create?: XOR<userCreateWithoutDonorOfInput, userUncheckedCreateWithoutDonorOfInput>
    connectOrCreate?: userCreateOrConnectWithoutDonorOfInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutRequesterOfInput = {
    create?: XOR<userCreateWithoutRequesterOfInput, userUncheckedCreateWithoutRequesterOfInput>
    connectOrCreate?: userCreateOrConnectWithoutRequesterOfInput
    connect?: userWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type userUpdateOneRequiredWithoutDonorOfNestedInput = {
    create?: XOR<userCreateWithoutDonorOfInput, userUncheckedCreateWithoutDonorOfInput>
    connectOrCreate?: userCreateOrConnectWithoutDonorOfInput
    upsert?: userUpsertWithoutDonorOfInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDonorOfInput, userUpdateWithoutDonorOfInput>, userUncheckedUpdateWithoutDonorOfInput>
  }

  export type userUpdateOneRequiredWithoutRequesterOfNestedInput = {
    create?: XOR<userCreateWithoutRequesterOfInput, userUncheckedCreateWithoutRequesterOfInput>
    connectOrCreate?: userCreateOrConnectWithoutRequesterOfInput
    upsert?: userUpsertWithoutRequesterOfInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRequesterOfInput, userUpdateWithoutRequesterOfInput>, userUncheckedUpdateWithoutRequesterOfInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumBloodDonnerFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodDonner | EnumBloodDonnerFieldRefInput<$PrismaModel>
    in?: $Enums.BloodDonner[] | ListEnumBloodDonnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodDonner[] | ListEnumBloodDonnerFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodDonnerFilter<$PrismaModel> | $Enums.BloodDonner
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBloodDonnerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodDonner | EnumBloodDonnerFieldRefInput<$PrismaModel>
    in?: $Enums.BloodDonner[] | ListEnumBloodDonnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodDonner[] | ListEnumBloodDonnerFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodDonnerWithAggregatesFilter<$PrismaModel> | $Enums.BloodDonner
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodDonnerFilter<$PrismaModel>
    _max?: NestedEnumBloodDonnerFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type requestCreateWithoutDonorInput = {
    id?: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: userCreateNestedOneWithoutRequesterOfInput
  }

  export type requestUncheckedCreateWithoutDonorInput = {
    id?: string
    requesterId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type requestCreateOrConnectWithoutDonorInput = {
    where: requestWhereUniqueInput
    create: XOR<requestCreateWithoutDonorInput, requestUncheckedCreateWithoutDonorInput>
  }

  export type requestCreateManyDonorInputEnvelope = {
    data: requestCreateManyDonorInput | requestCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type requestCreateWithoutRequesterInput = {
    id?: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: userCreateNestedOneWithoutDonorOfInput
  }

  export type requestUncheckedCreateWithoutRequesterInput = {
    id?: string
    donorId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type requestCreateOrConnectWithoutRequesterInput = {
    where: requestWhereUniqueInput
    create: XOR<requestCreateWithoutRequesterInput, requestUncheckedCreateWithoutRequesterInput>
  }

  export type requestCreateManyRequesterInputEnvelope = {
    data: requestCreateManyRequesterInput | requestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type requestUpsertWithWhereUniqueWithoutDonorInput = {
    where: requestWhereUniqueInput
    update: XOR<requestUpdateWithoutDonorInput, requestUncheckedUpdateWithoutDonorInput>
    create: XOR<requestCreateWithoutDonorInput, requestUncheckedCreateWithoutDonorInput>
  }

  export type requestUpdateWithWhereUniqueWithoutDonorInput = {
    where: requestWhereUniqueInput
    data: XOR<requestUpdateWithoutDonorInput, requestUncheckedUpdateWithoutDonorInput>
  }

  export type requestUpdateManyWithWhereWithoutDonorInput = {
    where: requestScalarWhereInput
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyWithoutDonorInput>
  }

  export type requestScalarWhereInput = {
    AND?: requestScalarWhereInput | requestScalarWhereInput[]
    OR?: requestScalarWhereInput[]
    NOT?: requestScalarWhereInput | requestScalarWhereInput[]
    id?: StringFilter<"request"> | string
    requesterId?: StringFilter<"request"> | string
    donorId?: StringFilter<"request"> | string
    phoneNumber?: StringFilter<"request"> | string
    dateOfDonation?: StringFilter<"request"> | string
    hospitalName?: StringFilter<"request"> | string
    hospitalAddress?: StringFilter<"request"> | string
    reason?: StringFilter<"request"> | string
    requestStatus?: EnumRequestStatusFilter<"request"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"request"> | Date | string
    updatedAt?: DateTimeFilter<"request"> | Date | string
  }

  export type requestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: requestWhereUniqueInput
    update: XOR<requestUpdateWithoutRequesterInput, requestUncheckedUpdateWithoutRequesterInput>
    create: XOR<requestCreateWithoutRequesterInput, requestUncheckedCreateWithoutRequesterInput>
  }

  export type requestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: requestWhereUniqueInput
    data: XOR<requestUpdateWithoutRequesterInput, requestUncheckedUpdateWithoutRequesterInput>
  }

  export type requestUpdateManyWithWhereWithoutRequesterInput = {
    where: requestScalarWhereInput
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type userCreateWithoutDonorOfInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    bloodType: $Enums.BloodGroup
    location: string
    availability?: boolean
    bio: string
    age: number
    lastDonationDate?: string | null
    bloodDonner?: $Enums.BloodDonner
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterOf?: requestCreateNestedManyWithoutRequesterInput
  }

  export type userUncheckedCreateWithoutDonorOfInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    bloodType: $Enums.BloodGroup
    location: string
    availability?: boolean
    bio: string
    age: number
    lastDonationDate?: string | null
    bloodDonner?: $Enums.BloodDonner
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterOf?: requestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type userCreateOrConnectWithoutDonorOfInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDonorOfInput, userUncheckedCreateWithoutDonorOfInput>
  }

  export type userCreateWithoutRequesterOfInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    bloodType: $Enums.BloodGroup
    location: string
    availability?: boolean
    bio: string
    age: number
    lastDonationDate?: string | null
    bloodDonner?: $Enums.BloodDonner
    createdAt?: Date | string
    updatedAt?: Date | string
    donorOf?: requestCreateNestedManyWithoutDonorInput
  }

  export type userUncheckedCreateWithoutRequesterOfInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    bloodType: $Enums.BloodGroup
    location: string
    availability?: boolean
    bio: string
    age: number
    lastDonationDate?: string | null
    bloodDonner?: $Enums.BloodDonner
    createdAt?: Date | string
    updatedAt?: Date | string
    donorOf?: requestUncheckedCreateNestedManyWithoutDonorInput
  }

  export type userCreateOrConnectWithoutRequesterOfInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRequesterOfInput, userUncheckedCreateWithoutRequesterOfInput>
  }

  export type userUpsertWithoutDonorOfInput = {
    update: XOR<userUpdateWithoutDonorOfInput, userUncheckedUpdateWithoutDonorOfInput>
    create: XOR<userCreateWithoutDonorOfInput, userUncheckedCreateWithoutDonorOfInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDonorOfInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDonorOfInput, userUncheckedUpdateWithoutDonorOfInput>
  }

  export type userUpdateWithoutDonorOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bloodType?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: NullableStringFieldUpdateOperationsInput | string | null
    bloodDonner?: EnumBloodDonnerFieldUpdateOperationsInput | $Enums.BloodDonner
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterOf?: requestUpdateManyWithoutRequesterNestedInput
  }

  export type userUncheckedUpdateWithoutDonorOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bloodType?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: NullableStringFieldUpdateOperationsInput | string | null
    bloodDonner?: EnumBloodDonnerFieldUpdateOperationsInput | $Enums.BloodDonner
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterOf?: requestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type userUpsertWithoutRequesterOfInput = {
    update: XOR<userUpdateWithoutRequesterOfInput, userUncheckedUpdateWithoutRequesterOfInput>
    create: XOR<userCreateWithoutRequesterOfInput, userUncheckedCreateWithoutRequesterOfInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRequesterOfInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRequesterOfInput, userUncheckedUpdateWithoutRequesterOfInput>
  }

  export type userUpdateWithoutRequesterOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bloodType?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: NullableStringFieldUpdateOperationsInput | string | null
    bloodDonner?: EnumBloodDonnerFieldUpdateOperationsInput | $Enums.BloodDonner
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorOf?: requestUpdateManyWithoutDonorNestedInput
  }

  export type userUncheckedUpdateWithoutRequesterOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    bloodType?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: NullableStringFieldUpdateOperationsInput | string | null
    bloodDonner?: EnumBloodDonnerFieldUpdateOperationsInput | $Enums.BloodDonner
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorOf?: requestUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type requestCreateManyDonorInput = {
    id?: string
    requesterId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type requestCreateManyRequesterInput = {
    id?: string
    donorId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type requestUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: userUpdateOneRequiredWithoutRequesterOfNestedInput
  }

  export type requestUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: userUpdateOneRequiredWithoutDonorOfNestedInput
  }

  export type requestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}