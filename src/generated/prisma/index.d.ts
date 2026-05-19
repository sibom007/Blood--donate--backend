
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * Donor/requester extended info
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model BloodRequest
 * 
 */
export type BloodRequest = $Result.DefaultSelection<Prisma.$BloodRequestPayload>
/**
 * Model RequestAssignment
 * 
 */
export type RequestAssignment = $Result.DefaultSelection<Prisma.$RequestAssignmentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  VOLUNTEER: 'VOLUNTEER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const BloodGroup: {
  A_POS: 'A_POS',
  A_NEG: 'A_NEG',
  B_POS: 'B_POS',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]


export const Urgency: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Urgency = (typeof Urgency)[keyof typeof Urgency]


export const RequestStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  MATCHING: 'MATCHING',
  FULFILLED: 'FULFILLED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const AssignmentStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  TIMED_OUT: 'TIMED_OUT',
  CANCELLED: 'CANCELLED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]


export const AssignedBy: {
  SYSTEM: 'SYSTEM',
  ADMIN: 'ADMIN',
  VOLUNTEER: 'VOLUNTEER'
};

export type AssignedBy = (typeof AssignedBy)[keyof typeof AssignedBy]


export const ActorType: {
  USER: 'USER',
  SYSTEM: 'SYSTEM'
};

export type ActorType = (typeof ActorType)[keyof typeof ActorType]


export const EventType: {
  REQUEST_CREATED: 'REQUEST_CREATED',
  DONOR_ACCEPTED: 'DONOR_ACCEPTED',
  NO_DONOR_FOUND: 'NO_DONOR_FOUND',
  REQUEST_CANCELLED: 'REQUEST_CANCELLED',
  ASKED_FOR_REQUEST_CANCELLED: 'ASKED_FOR_REQUEST_CANCELLED'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const EntityType: {
  BLOOD_REQUEST: 'BLOOD_REQUEST'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]


export const ForwardReason: {
  NO_RESPONSE: 'NO_RESPONSE',
  REJECTED: 'REJECTED',
  DONOR_NOT_ELIGIBLE: 'DONOR_NOT_ELIGIBLE',
  DONOR_UNAVAILABLE: 'DONOR_UNAVAILABLE',
  MANUAL_FORWARD: 'MANUAL_FORWARD',
  OTHER: 'OTHER'
};

export type ForwardReason = (typeof ForwardReason)[keyof typeof ForwardReason]


export const NotificationChannel: {
  IN_APP: 'IN_APP',
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  PUSH: 'PUSH'
};

export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel]


export const VerificationStatus: {
  UNVERIFIED: 'UNVERIFIED',
  VERIFIED: 'VERIFIED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

export type Urgency = $Enums.Urgency

export const Urgency: typeof $Enums.Urgency

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

export type AssignedBy = $Enums.AssignedBy

export const AssignedBy: typeof $Enums.AssignedBy

export type ActorType = $Enums.ActorType

export const ActorType: typeof $Enums.ActorType

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

export type ForwardReason = $Enums.ForwardReason

export const ForwardReason: typeof $Enums.ForwardReason

export type NotificationChannel = $Enums.NotificationChannel

export const NotificationChannel: typeof $Enums.NotificationChannel

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodRequest`: Exposes CRUD operations for the **BloodRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloodRequests
    * const bloodRequests = await prisma.bloodRequest.findMany()
    * ```
    */
  get bloodRequest(): Prisma.BloodRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestAssignment`: Exposes CRUD operations for the **RequestAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestAssignments
    * const requestAssignments = await prisma.requestAssignment.findMany()
    * ```
    */
  get requestAssignment(): Prisma.RequestAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    UserProfile: 'UserProfile',
    BloodRequest: 'BloodRequest',
    RequestAssignment: 'RequestAssignment',
    Notification: 'Notification',
    Event: 'Event',
    Donation: 'Donation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "bloodRequest" | "requestAssignment" | "notification" | "event" | "donation"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserProfileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserProfileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      BloodRequest: {
        payload: Prisma.$BloodRequestPayload<ExtArgs>
        fields: Prisma.BloodRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloodRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloodRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findFirst: {
            args: Prisma.BloodRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloodRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findMany: {
            args: Prisma.BloodRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          create: {
            args: Prisma.BloodRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          createMany: {
            args: Prisma.BloodRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BloodRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          update: {
            args: Prisma.BloodRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          deleteMany: {
            args: Prisma.BloodRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloodRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BloodRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          aggregate: {
            args: Prisma.BloodRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodRequest>
          }
          groupBy: {
            args: Prisma.BloodRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BloodRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BloodRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BloodRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestCountAggregateOutputType> | number
          }
        }
      }
      RequestAssignment: {
        payload: Prisma.$RequestAssignmentPayload<ExtArgs>
        fields: Prisma.RequestAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload>
          }
          findFirst: {
            args: Prisma.RequestAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload>
          }
          findMany: {
            args: Prisma.RequestAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload>[]
          }
          create: {
            args: Prisma.RequestAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload>
          }
          createMany: {
            args: Prisma.RequestAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RequestAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload>
          }
          update: {
            args: Prisma.RequestAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.RequestAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequestAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestAssignmentPayload>
          }
          aggregate: {
            args: Prisma.RequestAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestAssignment>
          }
          groupBy: {
            args: Prisma.RequestAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestAssignmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RequestAssignmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RequestAssignmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RequestAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<RequestAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DonationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DonationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    bloodRequest?: BloodRequestOmit
    requestAssignment?: RequestAssignmentOmit
    notification?: NotificationOmit
    event?: EventOmit
    donation?: DonationOmit
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
    requestsCreated: number
    assignments: number
    notifications: number
    events: number
    donationsAsDonor: number
    donationsAsRequester: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestsCreated?: boolean | UserCountOutputTypeCountRequestsCreatedArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
    donationsAsDonor?: boolean | UserCountOutputTypeCountDonationsAsDonorArgs
    donationsAsRequester?: boolean | UserCountOutputTypeCountDonationsAsRequesterArgs
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
  export type UserCountOutputTypeCountRequestsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsAsDonorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsAsRequesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }


  /**
   * Count Type BloodRequestCountOutputType
   */

  export type BloodRequestCountOutputType = {
    assignments: number
    donations: number
  }

  export type BloodRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | BloodRequestCountOutputTypeCountAssignmentsArgs
    donations?: boolean | BloodRequestCountOutputTypeCountDonationsArgs
  }

  // Custom InputTypes
  /**
   * BloodRequestCountOutputType without action
   */
  export type BloodRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequestCountOutputType
     */
    select?: BloodRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BloodRequestCountOutputType without action
   */
  export type BloodRequestCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestAssignmentWhereInput
  }

  /**
   * BloodRequestCountOutputType without action
   */
  export type BloodRequestCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    photoUrl: string | null
    bio: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
    emailVerifiedAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    photoUrl: string | null
    bio: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
    emailVerifiedAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    passwordHash: number
    photoUrl: number
    bio: number
    status: number
    role: number
    emailVerifiedAt: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    photoUrl?: true
    bio?: true
    status?: true
    role?: true
    emailVerifiedAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    photoUrl?: true
    bio?: true
    status?: true
    role?: true
    emailVerifiedAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    photoUrl?: true
    bio?: true
    status?: true
    role?: true
    emailVerifiedAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl: string | null
    bio: string | null
    status: $Enums.UserStatus
    role: $Enums.UserRole
    emailVerifiedAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    photoUrl?: boolean
    bio?: boolean
    status?: boolean
    role?: boolean
    emailVerifiedAt?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    requestsCreated?: boolean | User$requestsCreatedArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    donationsAsDonor?: boolean | User$donationsAsDonorArgs<ExtArgs>
    donationsAsRequester?: boolean | User$donationsAsRequesterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    photoUrl?: boolean
    bio?: boolean
    status?: boolean
    role?: boolean
    emailVerifiedAt?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "passwordHash" | "photoUrl" | "bio" | "status" | "role" | "emailVerifiedAt" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    requestsCreated?: boolean | User$requestsCreatedArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    donationsAsDonor?: boolean | User$donationsAsDonorArgs<ExtArgs>
    donationsAsRequester?: boolean | User$donationsAsRequesterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      requestsCreated: Prisma.$BloodRequestPayload<ExtArgs>[]
      assignments: Prisma.$RequestAssignmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      donationsAsDonor: Prisma.$DonationPayload<ExtArgs>[]
      donationsAsRequester: Prisma.$DonationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      passwordHash: string
      photoUrl: string | null
      bio: string | null
      status: $Enums.UserStatus
      role: $Enums.UserRole
      emailVerifiedAt: Date | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requestsCreated<T extends User$requestsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationsAsDonor<T extends User$donationsAsDonorArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsAsDonorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationsAsRequester<T extends User$donationsAsRequesterArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsAsRequesterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly emailVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.requestsCreated
   */
  export type User$requestsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    cursor?: BloodRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    where?: RequestAssignmentWhereInput
    orderBy?: RequestAssignmentOrderByWithRelationInput | RequestAssignmentOrderByWithRelationInput[]
    cursor?: RequestAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestAssignmentScalarFieldEnum | RequestAssignmentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.donationsAsDonor
   */
  export type User$donationsAsDonorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User.donationsAsRequester
   */
  export type User$donationsAsRequesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    age: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    age: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bloodGroup: $Enums.BloodGroup | null
    dateOfBirth: Date | null
    city: string | null
    address: string | null
    age: number | null
    isAvailable: boolean | null
    lastDonatedAt: Date | null
    eligibleAfter: Date | null
    medicalNotes: string | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bloodGroup: $Enums.BloodGroup | null
    dateOfBirth: Date | null
    city: string | null
    address: string | null
    age: number | null
    isAvailable: boolean | null
    lastDonatedAt: Date | null
    eligibleAfter: Date | null
    medicalNotes: string | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    bloodGroup: number
    dateOfBirth: number
    city: number
    address: number
    age: number
    isAvailable: number
    lastDonatedAt: number
    eligibleAfter: number
    medicalNotes: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    age?: true
  }

  export type UserProfileSumAggregateInputType = {
    age?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bloodGroup?: true
    dateOfBirth?: true
    city?: true
    address?: true
    age?: true
    isAvailable?: true
    lastDonatedAt?: true
    eligibleAfter?: true
    medicalNotes?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bloodGroup?: true
    dateOfBirth?: true
    city?: true
    address?: true
    age?: true
    isAvailable?: true
    lastDonatedAt?: true
    eligibleAfter?: true
    medicalNotes?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bloodGroup?: true
    dateOfBirth?: true
    city?: true
    address?: true
    age?: true
    isAvailable?: true
    lastDonatedAt?: true
    eligibleAfter?: true
    medicalNotes?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    bloodGroup: $Enums.BloodGroup
    dateOfBirth: Date
    city: string
    address: string
    age: number
    isAvailable: boolean
    lastDonatedAt: Date | null
    eligibleAfter: Date | null
    medicalNotes: string | null
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bloodGroup?: boolean
    dateOfBirth?: boolean
    city?: boolean
    address?: boolean
    age?: boolean
    isAvailable?: boolean
    lastDonatedAt?: boolean
    eligibleAfter?: boolean
    medicalNotes?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>



  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bloodGroup?: boolean
    dateOfBirth?: boolean
    city?: boolean
    address?: boolean
    age?: boolean
    isAvailable?: boolean
    lastDonatedAt?: boolean
    eligibleAfter?: boolean
    medicalNotes?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bloodGroup" | "dateOfBirth" | "city" | "address" | "age" | "isAvailable" | "lastDonatedAt" | "eligibleAfter" | "medicalNotes" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bloodGroup: $Enums.BloodGroup
      dateOfBirth: Date
      city: string
      address: string
      age: number
      isAvailable: boolean
      lastDonatedAt: Date | null
      eligibleAfter: Date | null
      medicalNotes: string | null
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * @param {UserProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userProfile = await prisma.userProfile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserProfileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserProfile.
     * @param {UserProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userProfile = await prisma.userProfile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserProfileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly bloodGroup: FieldRef<"UserProfile", 'BloodGroup'>
    readonly dateOfBirth: FieldRef<"UserProfile", 'DateTime'>
    readonly city: FieldRef<"UserProfile", 'String'>
    readonly address: FieldRef<"UserProfile", 'String'>
    readonly age: FieldRef<"UserProfile", 'Float'>
    readonly isAvailable: FieldRef<"UserProfile", 'Boolean'>
    readonly lastDonatedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly eligibleAfter: FieldRef<"UserProfile", 'DateTime'>
    readonly medicalNotes: FieldRef<"UserProfile", 'String'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile findRaw
   */
  export type UserProfileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserProfile aggregateRaw
   */
  export type UserProfileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model BloodRequest
   */

  export type AggregateBloodRequest = {
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  export type BloodRequestAvgAggregateOutputType = {
    unitsNeeded: number | null
    locationLat: number | null
    locationLng: number | null
  }

  export type BloodRequestSumAggregateOutputType = {
    unitsNeeded: number | null
    locationLat: number | null
    locationLng: number | null
  }

  export type BloodRequestMinAggregateOutputType = {
    id: string | null
    requesterId: string | null
    patientName: string | null
    bloodGroup: $Enums.BloodGroup | null
    unitsNeeded: number | null
    urgency: $Enums.Urgency | null
    neededAt: Date | null
    city: string | null
    hospitalName: string | null
    hospitalAddress: string | null
    locationLat: number | null
    locationLng: number | null
    description: string | null
    status: $Enums.RequestStatus | null
    matchedDonorId: string | null
    forwardReason: $Enums.ForwardReason | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BloodRequestMaxAggregateOutputType = {
    id: string | null
    requesterId: string | null
    patientName: string | null
    bloodGroup: $Enums.BloodGroup | null
    unitsNeeded: number | null
    urgency: $Enums.Urgency | null
    neededAt: Date | null
    city: string | null
    hospitalName: string | null
    hospitalAddress: string | null
    locationLat: number | null
    locationLng: number | null
    description: string | null
    status: $Enums.RequestStatus | null
    matchedDonorId: string | null
    forwardReason: $Enums.ForwardReason | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BloodRequestCountAggregateOutputType = {
    id: number
    requesterId: number
    patientName: number
    bloodGroup: number
    unitsNeeded: number
    urgency: number
    neededAt: number
    city: number
    hospitalName: number
    hospitalAddress: number
    locationLat: number
    locationLng: number
    description: number
    status: number
    matchedDonorId: number
    forwardReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BloodRequestAvgAggregateInputType = {
    unitsNeeded?: true
    locationLat?: true
    locationLng?: true
  }

  export type BloodRequestSumAggregateInputType = {
    unitsNeeded?: true
    locationLat?: true
    locationLng?: true
  }

  export type BloodRequestMinAggregateInputType = {
    id?: true
    requesterId?: true
    patientName?: true
    bloodGroup?: true
    unitsNeeded?: true
    urgency?: true
    neededAt?: true
    city?: true
    hospitalName?: true
    hospitalAddress?: true
    locationLat?: true
    locationLng?: true
    description?: true
    status?: true
    matchedDonorId?: true
    forwardReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BloodRequestMaxAggregateInputType = {
    id?: true
    requesterId?: true
    patientName?: true
    bloodGroup?: true
    unitsNeeded?: true
    urgency?: true
    neededAt?: true
    city?: true
    hospitalName?: true
    hospitalAddress?: true
    locationLat?: true
    locationLng?: true
    description?: true
    status?: true
    matchedDonorId?: true
    forwardReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BloodRequestCountAggregateInputType = {
    id?: true
    requesterId?: true
    patientName?: true
    bloodGroup?: true
    unitsNeeded?: true
    urgency?: true
    neededAt?: true
    city?: true
    hospitalName?: true
    hospitalAddress?: true
    locationLat?: true
    locationLng?: true
    description?: true
    status?: true
    matchedDonorId?: true
    forwardReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BloodRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequest to aggregate.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloodRequests
    **/
    _count?: true | BloodRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodRequestMaxAggregateInputType
  }

  export type GetBloodRequestAggregateType<T extends BloodRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodRequest[P]>
      : GetScalarType<T[P], AggregateBloodRequest[P]>
  }




  export type BloodRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithAggregationInput | BloodRequestOrderByWithAggregationInput[]
    by: BloodRequestScalarFieldEnum[] | BloodRequestScalarFieldEnum
    having?: BloodRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodRequestCountAggregateInputType | true
    _avg?: BloodRequestAvgAggregateInputType
    _sum?: BloodRequestSumAggregateInputType
    _min?: BloodRequestMinAggregateInputType
    _max?: BloodRequestMaxAggregateInputType
  }

  export type BloodRequestGroupByOutputType = {
    id: string
    requesterId: string
    patientName: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency: $Enums.Urgency
    neededAt: Date
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat: number | null
    locationLng: number | null
    description: string | null
    status: $Enums.RequestStatus
    matchedDonorId: string | null
    forwardReason: $Enums.ForwardReason | null
    createdAt: Date
    updatedAt: Date
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  type GetBloodRequestGroupByPayload<T extends BloodRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
        }
      >
    >


  export type BloodRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    patientName?: boolean
    bloodGroup?: boolean
    unitsNeeded?: boolean
    urgency?: boolean
    neededAt?: boolean
    city?: boolean
    hospitalName?: boolean
    hospitalAddress?: boolean
    locationLat?: boolean
    locationLng?: boolean
    description?: boolean
    status?: boolean
    matchedDonorId?: boolean
    forwardReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | BloodRequest$assignmentsArgs<ExtArgs>
    donations?: boolean | BloodRequest$donationsArgs<ExtArgs>
    _count?: boolean | BloodRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>



  export type BloodRequestSelectScalar = {
    id?: boolean
    requesterId?: boolean
    patientName?: boolean
    bloodGroup?: boolean
    unitsNeeded?: boolean
    urgency?: boolean
    neededAt?: boolean
    city?: boolean
    hospitalName?: boolean
    hospitalAddress?: boolean
    locationLat?: boolean
    locationLng?: boolean
    description?: boolean
    status?: boolean
    matchedDonorId?: boolean
    forwardReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BloodRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "patientName" | "bloodGroup" | "unitsNeeded" | "urgency" | "neededAt" | "city" | "hospitalName" | "hospitalAddress" | "locationLat" | "locationLng" | "description" | "status" | "matchedDonorId" | "forwardReason" | "createdAt" | "updatedAt", ExtArgs["result"]["bloodRequest"]>
  export type BloodRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | BloodRequest$assignmentsArgs<ExtArgs>
    donations?: boolean | BloodRequest$donationsArgs<ExtArgs>
    _count?: boolean | BloodRequestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BloodRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloodRequest"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$RequestAssignmentPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterId: string
      patientName: string | null
      bloodGroup: $Enums.BloodGroup
      unitsNeeded: number
      urgency: $Enums.Urgency
      neededAt: Date
      city: string
      hospitalName: string
      hospitalAddress: string
      locationLat: number | null
      locationLng: number | null
      description: string | null
      status: $Enums.RequestStatus
      matchedDonorId: string | null
      forwardReason: $Enums.ForwardReason | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bloodRequest"]>
    composites: {}
  }

  type BloodRequestGetPayload<S extends boolean | null | undefined | BloodRequestDefaultArgs> = $Result.GetResult<Prisma.$BloodRequestPayload, S>

  type BloodRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloodRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodRequestCountAggregateInputType | true
    }

  export interface BloodRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloodRequest'], meta: { name: 'BloodRequest' } }
    /**
     * Find zero or one BloodRequest that matches the filter.
     * @param {BloodRequestFindUniqueArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloodRequestFindUniqueArgs>(args: SelectSubset<T, BloodRequestFindUniqueArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloodRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloodRequestFindUniqueOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloodRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BloodRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloodRequestFindFirstArgs>(args?: SelectSubset<T, BloodRequestFindFirstArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloodRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BloodRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloodRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany()
     * 
     * // Get first 10 BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloodRequestFindManyArgs>(args?: SelectSubset<T, BloodRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloodRequest.
     * @param {BloodRequestCreateArgs} args - Arguments to create a BloodRequest.
     * @example
     * // Create one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.create({
     *   data: {
     *     // ... data to create a BloodRequest
     *   }
     * })
     * 
     */
    create<T extends BloodRequestCreateArgs>(args: SelectSubset<T, BloodRequestCreateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloodRequests.
     * @param {BloodRequestCreateManyArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloodRequestCreateManyArgs>(args?: SelectSubset<T, BloodRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BloodRequest.
     * @param {BloodRequestDeleteArgs} args - Arguments to delete one BloodRequest.
     * @example
     * // Delete one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.delete({
     *   where: {
     *     // ... filter to delete one BloodRequest
     *   }
     * })
     * 
     */
    delete<T extends BloodRequestDeleteArgs>(args: SelectSubset<T, BloodRequestDeleteArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloodRequest.
     * @param {BloodRequestUpdateArgs} args - Arguments to update one BloodRequest.
     * @example
     * // Update one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloodRequestUpdateArgs>(args: SelectSubset<T, BloodRequestUpdateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloodRequests.
     * @param {BloodRequestDeleteManyArgs} args - Arguments to filter BloodRequests to delete.
     * @example
     * // Delete a few BloodRequests
     * const { count } = await prisma.bloodRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloodRequestDeleteManyArgs>(args?: SelectSubset<T, BloodRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloodRequestUpdateManyArgs>(args: SelectSubset<T, BloodRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BloodRequest.
     * @param {BloodRequestUpsertArgs} args - Arguments to update or create a BloodRequest.
     * @example
     * // Update or create a BloodRequest
     * const bloodRequest = await prisma.bloodRequest.upsert({
     *   create: {
     *     // ... data to create a BloodRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloodRequest we want to update
     *   }
     * })
     */
    upsert<T extends BloodRequestUpsertArgs>(args: SelectSubset<T, BloodRequestUpsertArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloodRequests that matches the filter.
     * @param {BloodRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const bloodRequest = await prisma.bloodRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BloodRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BloodRequest.
     * @param {BloodRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const bloodRequest = await prisma.bloodRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BloodRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestCountArgs} args - Arguments to filter BloodRequests to count.
     * @example
     * // Count the number of BloodRequests
     * const count = await prisma.bloodRequest.count({
     *   where: {
     *     // ... the filter for the BloodRequests we want to count
     *   }
     * })
    **/
    count<T extends BloodRequestCountArgs>(
      args?: Subset<T, BloodRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BloodRequestAggregateArgs>(args: Subset<T, BloodRequestAggregateArgs>): Prisma.PrismaPromise<GetBloodRequestAggregateType<T>>

    /**
     * Group by BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestGroupByArgs} args - Group by arguments.
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
      T extends BloodRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloodRequestGroupByArgs['orderBy'] }
        : { orderBy?: BloodRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BloodRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloodRequest model
   */
  readonly fields: BloodRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloodRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloodRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends BloodRequest$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequest$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends BloodRequest$donationsArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequest$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BloodRequest model
   */
  interface BloodRequestFieldRefs {
    readonly id: FieldRef<"BloodRequest", 'String'>
    readonly requesterId: FieldRef<"BloodRequest", 'String'>
    readonly patientName: FieldRef<"BloodRequest", 'String'>
    readonly bloodGroup: FieldRef<"BloodRequest", 'BloodGroup'>
    readonly unitsNeeded: FieldRef<"BloodRequest", 'Int'>
    readonly urgency: FieldRef<"BloodRequest", 'Urgency'>
    readonly neededAt: FieldRef<"BloodRequest", 'DateTime'>
    readonly city: FieldRef<"BloodRequest", 'String'>
    readonly hospitalName: FieldRef<"BloodRequest", 'String'>
    readonly hospitalAddress: FieldRef<"BloodRequest", 'String'>
    readonly locationLat: FieldRef<"BloodRequest", 'Float'>
    readonly locationLng: FieldRef<"BloodRequest", 'Float'>
    readonly description: FieldRef<"BloodRequest", 'String'>
    readonly status: FieldRef<"BloodRequest", 'RequestStatus'>
    readonly matchedDonorId: FieldRef<"BloodRequest", 'String'>
    readonly forwardReason: FieldRef<"BloodRequest", 'ForwardReason'>
    readonly createdAt: FieldRef<"BloodRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"BloodRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BloodRequest findUnique
   */
  export type BloodRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findUniqueOrThrow
   */
  export type BloodRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findFirst
   */
  export type BloodRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findFirstOrThrow
   */
  export type BloodRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findMany
   */
  export type BloodRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequests to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest create
   */
  export type BloodRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a BloodRequest.
     */
    data: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
  }

  /**
   * BloodRequest createMany
   */
  export type BloodRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
  }

  /**
   * BloodRequest update
   */
  export type BloodRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a BloodRequest.
     */
    data: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
    /**
     * Choose, which BloodRequest to update.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest updateMany
   */
  export type BloodRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
  }

  /**
   * BloodRequest upsert
   */
  export type BloodRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the BloodRequest to update in case it exists.
     */
    where: BloodRequestWhereUniqueInput
    /**
     * In case the BloodRequest found by the `where` argument doesn't exist, create a new BloodRequest with this data.
     */
    create: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
    /**
     * In case the BloodRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
  }

  /**
   * BloodRequest delete
   */
  export type BloodRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter which BloodRequest to delete.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest deleteMany
   */
  export type BloodRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequests to delete
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to delete.
     */
    limit?: number
  }

  /**
   * BloodRequest findRaw
   */
  export type BloodRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BloodRequest aggregateRaw
   */
  export type BloodRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BloodRequest.assignments
   */
  export type BloodRequest$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    where?: RequestAssignmentWhereInput
    orderBy?: RequestAssignmentOrderByWithRelationInput | RequestAssignmentOrderByWithRelationInput[]
    cursor?: RequestAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestAssignmentScalarFieldEnum | RequestAssignmentScalarFieldEnum[]
  }

  /**
   * BloodRequest.donations
   */
  export type BloodRequest$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * BloodRequest without action
   */
  export type BloodRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
  }


  /**
   * Model RequestAssignment
   */

  export type AggregateRequestAssignment = {
    _count: RequestAssignmentCountAggregateOutputType | null
    _min: RequestAssignmentMinAggregateOutputType | null
    _max: RequestAssignmentMaxAggregateOutputType | null
  }

  export type RequestAssignmentMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    donorId: string | null
    assignedBy: $Enums.AssignedBy | null
    assignedByUserId: string | null
    status: $Enums.AssignmentStatus | null
    assignedAt: Date | null
    responseDeadlineAt: Date | null
    respondedAt: Date | null
    responseNote: string | null
    forwardReason: $Enums.ForwardReason | null
    createdAt: Date | null
  }

  export type RequestAssignmentMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    donorId: string | null
    assignedBy: $Enums.AssignedBy | null
    assignedByUserId: string | null
    status: $Enums.AssignmentStatus | null
    assignedAt: Date | null
    responseDeadlineAt: Date | null
    respondedAt: Date | null
    responseNote: string | null
    forwardReason: $Enums.ForwardReason | null
    createdAt: Date | null
  }

  export type RequestAssignmentCountAggregateOutputType = {
    id: number
    requestId: number
    donorId: number
    assignedBy: number
    assignedByUserId: number
    status: number
    assignedAt: number
    responseDeadlineAt: number
    respondedAt: number
    responseNote: number
    forwardReason: number
    createdAt: number
    _all: number
  }


  export type RequestAssignmentMinAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    assignedBy?: true
    assignedByUserId?: true
    status?: true
    assignedAt?: true
    responseDeadlineAt?: true
    respondedAt?: true
    responseNote?: true
    forwardReason?: true
    createdAt?: true
  }

  export type RequestAssignmentMaxAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    assignedBy?: true
    assignedByUserId?: true
    status?: true
    assignedAt?: true
    responseDeadlineAt?: true
    respondedAt?: true
    responseNote?: true
    forwardReason?: true
    createdAt?: true
  }

  export type RequestAssignmentCountAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    assignedBy?: true
    assignedByUserId?: true
    status?: true
    assignedAt?: true
    responseDeadlineAt?: true
    respondedAt?: true
    responseNote?: true
    forwardReason?: true
    createdAt?: true
    _all?: true
  }

  export type RequestAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestAssignment to aggregate.
     */
    where?: RequestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestAssignments to fetch.
     */
    orderBy?: RequestAssignmentOrderByWithRelationInput | RequestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestAssignments
    **/
    _count?: true | RequestAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestAssignmentMaxAggregateInputType
  }

  export type GetRequestAssignmentAggregateType<T extends RequestAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestAssignment[P]>
      : GetScalarType<T[P], AggregateRequestAssignment[P]>
  }




  export type RequestAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestAssignmentWhereInput
    orderBy?: RequestAssignmentOrderByWithAggregationInput | RequestAssignmentOrderByWithAggregationInput[]
    by: RequestAssignmentScalarFieldEnum[] | RequestAssignmentScalarFieldEnum
    having?: RequestAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestAssignmentCountAggregateInputType | true
    _min?: RequestAssignmentMinAggregateInputType
    _max?: RequestAssignmentMaxAggregateInputType
  }

  export type RequestAssignmentGroupByOutputType = {
    id: string
    requestId: string
    donorId: string
    assignedBy: $Enums.AssignedBy
    assignedByUserId: string | null
    status: $Enums.AssignmentStatus
    assignedAt: Date
    responseDeadlineAt: Date
    respondedAt: Date | null
    responseNote: string | null
    forwardReason: $Enums.ForwardReason | null
    createdAt: Date
    _count: RequestAssignmentCountAggregateOutputType | null
    _min: RequestAssignmentMinAggregateOutputType | null
    _max: RequestAssignmentMaxAggregateOutputType | null
  }

  type GetRequestAssignmentGroupByPayload<T extends RequestAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], RequestAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type RequestAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    assignedBy?: boolean
    assignedByUserId?: boolean
    status?: boolean
    assignedAt?: boolean
    responseDeadlineAt?: boolean
    respondedAt?: boolean
    responseNote?: boolean
    forwardReason?: boolean
    createdAt?: boolean
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestAssignment"]>



  export type RequestAssignmentSelectScalar = {
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    assignedBy?: boolean
    assignedByUserId?: boolean
    status?: boolean
    assignedAt?: boolean
    responseDeadlineAt?: boolean
    respondedAt?: boolean
    responseNote?: boolean
    forwardReason?: boolean
    createdAt?: boolean
  }

  export type RequestAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "donorId" | "assignedBy" | "assignedByUserId" | "status" | "assignedAt" | "responseDeadlineAt" | "respondedAt" | "responseNote" | "forwardReason" | "createdAt", ExtArgs["result"]["requestAssignment"]>
  export type RequestAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequestAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestAssignment"
    objects: {
      request: Prisma.$BloodRequestPayload<ExtArgs>
      donor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      donorId: string
      assignedBy: $Enums.AssignedBy
      assignedByUserId: string | null
      status: $Enums.AssignmentStatus
      assignedAt: Date
      responseDeadlineAt: Date
      respondedAt: Date | null
      responseNote: string | null
      forwardReason: $Enums.ForwardReason | null
      createdAt: Date
    }, ExtArgs["result"]["requestAssignment"]>
    composites: {}
  }

  type RequestAssignmentGetPayload<S extends boolean | null | undefined | RequestAssignmentDefaultArgs> = $Result.GetResult<Prisma.$RequestAssignmentPayload, S>

  type RequestAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestAssignmentCountAggregateInputType | true
    }

  export interface RequestAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestAssignment'], meta: { name: 'RequestAssignment' } }
    /**
     * Find zero or one RequestAssignment that matches the filter.
     * @param {RequestAssignmentFindUniqueArgs} args - Arguments to find a RequestAssignment
     * @example
     * // Get one RequestAssignment
     * const requestAssignment = await prisma.requestAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestAssignmentFindUniqueArgs>(args: SelectSubset<T, RequestAssignmentFindUniqueArgs<ExtArgs>>): Prisma__RequestAssignmentClient<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestAssignmentFindUniqueOrThrowArgs} args - Arguments to find a RequestAssignment
     * @example
     * // Get one RequestAssignment
     * const requestAssignment = await prisma.requestAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestAssignmentClient<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAssignmentFindFirstArgs} args - Arguments to find a RequestAssignment
     * @example
     * // Get one RequestAssignment
     * const requestAssignment = await prisma.requestAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestAssignmentFindFirstArgs>(args?: SelectSubset<T, RequestAssignmentFindFirstArgs<ExtArgs>>): Prisma__RequestAssignmentClient<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAssignmentFindFirstOrThrowArgs} args - Arguments to find a RequestAssignment
     * @example
     * // Get one RequestAssignment
     * const requestAssignment = await prisma.requestAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestAssignmentClient<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestAssignments
     * const requestAssignments = await prisma.requestAssignment.findMany()
     * 
     * // Get first 10 RequestAssignments
     * const requestAssignments = await prisma.requestAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestAssignmentWithIdOnly = await prisma.requestAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestAssignmentFindManyArgs>(args?: SelectSubset<T, RequestAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestAssignment.
     * @param {RequestAssignmentCreateArgs} args - Arguments to create a RequestAssignment.
     * @example
     * // Create one RequestAssignment
     * const RequestAssignment = await prisma.requestAssignment.create({
     *   data: {
     *     // ... data to create a RequestAssignment
     *   }
     * })
     * 
     */
    create<T extends RequestAssignmentCreateArgs>(args: SelectSubset<T, RequestAssignmentCreateArgs<ExtArgs>>): Prisma__RequestAssignmentClient<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestAssignments.
     * @param {RequestAssignmentCreateManyArgs} args - Arguments to create many RequestAssignments.
     * @example
     * // Create many RequestAssignments
     * const requestAssignment = await prisma.requestAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestAssignmentCreateManyArgs>(args?: SelectSubset<T, RequestAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RequestAssignment.
     * @param {RequestAssignmentDeleteArgs} args - Arguments to delete one RequestAssignment.
     * @example
     * // Delete one RequestAssignment
     * const RequestAssignment = await prisma.requestAssignment.delete({
     *   where: {
     *     // ... filter to delete one RequestAssignment
     *   }
     * })
     * 
     */
    delete<T extends RequestAssignmentDeleteArgs>(args: SelectSubset<T, RequestAssignmentDeleteArgs<ExtArgs>>): Prisma__RequestAssignmentClient<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestAssignment.
     * @param {RequestAssignmentUpdateArgs} args - Arguments to update one RequestAssignment.
     * @example
     * // Update one RequestAssignment
     * const requestAssignment = await prisma.requestAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestAssignmentUpdateArgs>(args: SelectSubset<T, RequestAssignmentUpdateArgs<ExtArgs>>): Prisma__RequestAssignmentClient<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestAssignments.
     * @param {RequestAssignmentDeleteManyArgs} args - Arguments to filter RequestAssignments to delete.
     * @example
     * // Delete a few RequestAssignments
     * const { count } = await prisma.requestAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestAssignmentDeleteManyArgs>(args?: SelectSubset<T, RequestAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestAssignments
     * const requestAssignment = await prisma.requestAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestAssignmentUpdateManyArgs>(args: SelectSubset<T, RequestAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RequestAssignment.
     * @param {RequestAssignmentUpsertArgs} args - Arguments to update or create a RequestAssignment.
     * @example
     * // Update or create a RequestAssignment
     * const requestAssignment = await prisma.requestAssignment.upsert({
     *   create: {
     *     // ... data to create a RequestAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestAssignment we want to update
     *   }
     * })
     */
    upsert<T extends RequestAssignmentUpsertArgs>(args: SelectSubset<T, RequestAssignmentUpsertArgs<ExtArgs>>): Prisma__RequestAssignmentClient<$Result.GetResult<Prisma.$RequestAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestAssignments that matches the filter.
     * @param {RequestAssignmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const requestAssignment = await prisma.requestAssignment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RequestAssignmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RequestAssignment.
     * @param {RequestAssignmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const requestAssignment = await prisma.requestAssignment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RequestAssignmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RequestAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAssignmentCountArgs} args - Arguments to filter RequestAssignments to count.
     * @example
     * // Count the number of RequestAssignments
     * const count = await prisma.requestAssignment.count({
     *   where: {
     *     // ... the filter for the RequestAssignments we want to count
     *   }
     * })
    **/
    count<T extends RequestAssignmentCountArgs>(
      args?: Subset<T, RequestAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestAssignmentAggregateArgs>(args: Subset<T, RequestAssignmentAggregateArgs>): Prisma.PrismaPromise<GetRequestAssignmentAggregateType<T>>

    /**
     * Group by RequestAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAssignmentGroupByArgs} args - Group by arguments.
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
      T extends RequestAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: RequestAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestAssignment model
   */
  readonly fields: RequestAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends BloodRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequestDefaultArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RequestAssignment model
   */
  interface RequestAssignmentFieldRefs {
    readonly id: FieldRef<"RequestAssignment", 'String'>
    readonly requestId: FieldRef<"RequestAssignment", 'String'>
    readonly donorId: FieldRef<"RequestAssignment", 'String'>
    readonly assignedBy: FieldRef<"RequestAssignment", 'AssignedBy'>
    readonly assignedByUserId: FieldRef<"RequestAssignment", 'String'>
    readonly status: FieldRef<"RequestAssignment", 'AssignmentStatus'>
    readonly assignedAt: FieldRef<"RequestAssignment", 'DateTime'>
    readonly responseDeadlineAt: FieldRef<"RequestAssignment", 'DateTime'>
    readonly respondedAt: FieldRef<"RequestAssignment", 'DateTime'>
    readonly responseNote: FieldRef<"RequestAssignment", 'String'>
    readonly forwardReason: FieldRef<"RequestAssignment", 'ForwardReason'>
    readonly createdAt: FieldRef<"RequestAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestAssignment findUnique
   */
  export type RequestAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RequestAssignment to fetch.
     */
    where: RequestAssignmentWhereUniqueInput
  }

  /**
   * RequestAssignment findUniqueOrThrow
   */
  export type RequestAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RequestAssignment to fetch.
     */
    where: RequestAssignmentWhereUniqueInput
  }

  /**
   * RequestAssignment findFirst
   */
  export type RequestAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RequestAssignment to fetch.
     */
    where?: RequestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestAssignments to fetch.
     */
    orderBy?: RequestAssignmentOrderByWithRelationInput | RequestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestAssignments.
     */
    cursor?: RequestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestAssignments.
     */
    distinct?: RequestAssignmentScalarFieldEnum | RequestAssignmentScalarFieldEnum[]
  }

  /**
   * RequestAssignment findFirstOrThrow
   */
  export type RequestAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RequestAssignment to fetch.
     */
    where?: RequestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestAssignments to fetch.
     */
    orderBy?: RequestAssignmentOrderByWithRelationInput | RequestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestAssignments.
     */
    cursor?: RequestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestAssignments.
     */
    distinct?: RequestAssignmentScalarFieldEnum | RequestAssignmentScalarFieldEnum[]
  }

  /**
   * RequestAssignment findMany
   */
  export type RequestAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RequestAssignments to fetch.
     */
    where?: RequestAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestAssignments to fetch.
     */
    orderBy?: RequestAssignmentOrderByWithRelationInput | RequestAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestAssignments.
     */
    cursor?: RequestAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestAssignments.
     */
    skip?: number
    distinct?: RequestAssignmentScalarFieldEnum | RequestAssignmentScalarFieldEnum[]
  }

  /**
   * RequestAssignment create
   */
  export type RequestAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestAssignment.
     */
    data: XOR<RequestAssignmentCreateInput, RequestAssignmentUncheckedCreateInput>
  }

  /**
   * RequestAssignment createMany
   */
  export type RequestAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestAssignments.
     */
    data: RequestAssignmentCreateManyInput | RequestAssignmentCreateManyInput[]
  }

  /**
   * RequestAssignment update
   */
  export type RequestAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestAssignment.
     */
    data: XOR<RequestAssignmentUpdateInput, RequestAssignmentUncheckedUpdateInput>
    /**
     * Choose, which RequestAssignment to update.
     */
    where: RequestAssignmentWhereUniqueInput
  }

  /**
   * RequestAssignment updateMany
   */
  export type RequestAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestAssignments.
     */
    data: XOR<RequestAssignmentUpdateManyMutationInput, RequestAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which RequestAssignments to update
     */
    where?: RequestAssignmentWhereInput
    /**
     * Limit how many RequestAssignments to update.
     */
    limit?: number
  }

  /**
   * RequestAssignment upsert
   */
  export type RequestAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestAssignment to update in case it exists.
     */
    where: RequestAssignmentWhereUniqueInput
    /**
     * In case the RequestAssignment found by the `where` argument doesn't exist, create a new RequestAssignment with this data.
     */
    create: XOR<RequestAssignmentCreateInput, RequestAssignmentUncheckedCreateInput>
    /**
     * In case the RequestAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestAssignmentUpdateInput, RequestAssignmentUncheckedUpdateInput>
  }

  /**
   * RequestAssignment delete
   */
  export type RequestAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
    /**
     * Filter which RequestAssignment to delete.
     */
    where: RequestAssignmentWhereUniqueInput
  }

  /**
   * RequestAssignment deleteMany
   */
  export type RequestAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestAssignments to delete
     */
    where?: RequestAssignmentWhereInput
    /**
     * Limit how many RequestAssignments to delete.
     */
    limit?: number
  }

  /**
   * RequestAssignment findRaw
   */
  export type RequestAssignmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RequestAssignment aggregateRaw
   */
  export type RequestAssignmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RequestAssignment without action
   */
  export type RequestAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestAssignment
     */
    select?: RequestAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestAssignment
     */
    omit?: RequestAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    body: string | null
    channel: $Enums.NotificationChannel | null
    readAt: Date | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    body: string | null
    channel: $Enums.NotificationChannel | null
    readAt: Date | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    body: number
    channel: number
    data: number
    readAt: number
    sentAt: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    channel?: true
    readAt?: true
    sentAt?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    channel?: true
    readAt?: true
    sentAt?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    channel?: true
    data?: true
    readAt?: true
    sentAt?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    body: string
    channel: $Enums.NotificationChannel
    data: JsonValue | null
    readAt: Date | null
    sentAt: Date | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    channel?: boolean
    data?: boolean
    readAt?: boolean
    sentAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    channel?: boolean
    data?: boolean
    readAt?: boolean
    sentAt?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "body" | "channel" | "data" | "readAt" | "sentAt" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      body: string
      channel: $Enums.NotificationChannel
      data: Prisma.JsonValue | null
      readAt: Date | null
      sentAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * @param {NotificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notification = await prisma.notification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Notification.
     * @param {NotificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notification = await prisma.notification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly channel: FieldRef<"Notification", 'NotificationChannel'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification findRaw
   */
  export type NotificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notification aggregateRaw
   */
  export type NotificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    actorType: $Enums.ActorType | null
    eventType: $Enums.EventType | null
    entityType: $Enums.EntityType | null
    entityId: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    actorType: $Enums.ActorType | null
    eventType: $Enums.EventType | null
    entityType: $Enums.EntityType | null
    entityId: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    actorUserId: number
    actorType: number
    eventType: number
    entityType: number
    entityId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    actorUserId?: true
    actorType?: true
    eventType?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    actorUserId?: true
    actorType?: true
    eventType?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    actorUserId?: true
    actorType?: true
    eventType?: true
    entityType?: true
    entityId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    actorUserId: string | null
    actorType: $Enums.ActorType
    eventType: $Enums.EventType
    entityType: $Enums.EntityType
    entityId: string
    metadata: JsonValue | null
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    actorType?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | Event$actorArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    actorUserId?: boolean
    actorType?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorUserId" | "actorType" | "eventType" | "entityType" | "entityId" | "metadata" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | Event$actorArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorUserId: string | null
      actorType: $Enums.ActorType
      eventType: $Enums.EventType
      entityType: $Enums.EntityType
      entityId: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends Event$actorArgs<ExtArgs> = {}>(args?: Subset<T, Event$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly actorUserId: FieldRef<"Event", 'String'>
    readonly actorType: FieldRef<"Event", 'ActorType'>
    readonly eventType: FieldRef<"Event", 'EventType'>
    readonly entityType: FieldRef<"Event", 'EntityType'>
    readonly entityId: FieldRef<"Event", 'String'>
    readonly metadata: FieldRef<"Event", 'Json'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event.actor
   */
  export type Event$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    unitsDonated: number | null
  }

  export type DonationSumAggregateOutputType = {
    unitsDonated: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    donorId: string | null
    requesterId: string | null
    donatedAt: Date | null
    unitsDonated: number | null
    verificationStatus: $Enums.VerificationStatus | null
    verifiedById: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    donorId: string | null
    requesterId: string | null
    donatedAt: Date | null
    unitsDonated: number | null
    verificationStatus: $Enums.VerificationStatus | null
    verifiedById: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    requestId: number
    donorId: number
    requesterId: number
    donatedAt: number
    unitsDonated: number
    verificationStatus: number
    verifiedById: number
    notes: number
    createdAt: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    unitsDonated?: true
  }

  export type DonationSumAggregateInputType = {
    unitsDonated?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    requesterId?: true
    donatedAt?: true
    unitsDonated?: true
    verificationStatus?: true
    verifiedById?: true
    notes?: true
    createdAt?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    requesterId?: true
    donatedAt?: true
    unitsDonated?: true
    verificationStatus?: true
    verifiedById?: true
    notes?: true
    createdAt?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    requestId?: true
    donorId?: true
    requesterId?: true
    donatedAt?: true
    unitsDonated?: true
    verificationStatus?: true
    verifiedById?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: string
    requestId: string
    donorId: string
    requesterId: string
    donatedAt: Date
    unitsDonated: number
    verificationStatus: $Enums.VerificationStatus
    verifiedById: string | null
    notes: string | null
    createdAt: Date
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    requesterId?: boolean
    donatedAt?: boolean
    unitsDonated?: boolean
    verificationStatus?: boolean
    verifiedById?: boolean
    notes?: boolean
    createdAt?: boolean
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>



  export type DonationSelectScalar = {
    id?: boolean
    requestId?: boolean
    donorId?: boolean
    requesterId?: boolean
    donatedAt?: boolean
    unitsDonated?: boolean
    verificationStatus?: boolean
    verifiedById?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "donorId" | "requesterId" | "donatedAt" | "unitsDonated" | "verificationStatus" | "verifiedById" | "notes" | "createdAt", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BloodRequestDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      request: Prisma.$BloodRequestPayload<ExtArgs>
      donor: Prisma.$UserPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      donorId: string
      requesterId: string
      donatedAt: Date
      unitsDonated: number
      verificationStatus: $Enums.VerificationStatus
      verifiedById: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * @param {DonationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const donation = await prisma.donation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DonationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Donation.
     * @param {DonationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const donation = await prisma.donation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DonationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
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
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends BloodRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequestDefaultArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'String'>
    readonly requestId: FieldRef<"Donation", 'String'>
    readonly donorId: FieldRef<"Donation", 'String'>
    readonly requesterId: FieldRef<"Donation", 'String'>
    readonly donatedAt: FieldRef<"Donation", 'DateTime'>
    readonly unitsDonated: FieldRef<"Donation", 'Int'>
    readonly verificationStatus: FieldRef<"Donation", 'VerificationStatus'>
    readonly verifiedById: FieldRef<"Donation", 'String'>
    readonly notes: FieldRef<"Donation", 'String'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation findRaw
   */
  export type DonationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Donation aggregateRaw
   */
  export type DonationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    photoUrl: 'photoUrl',
    bio: 'bio',
    status: 'status',
    role: 'role',
    emailVerifiedAt: 'emailVerifiedAt',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bloodGroup: 'bloodGroup',
    dateOfBirth: 'dateOfBirth',
    city: 'city',
    address: 'address',
    age: 'age',
    isAvailable: 'isAvailable',
    lastDonatedAt: 'lastDonatedAt',
    eligibleAfter: 'eligibleAfter',
    medicalNotes: 'medicalNotes',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const BloodRequestScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    patientName: 'patientName',
    bloodGroup: 'bloodGroup',
    unitsNeeded: 'unitsNeeded',
    urgency: 'urgency',
    neededAt: 'neededAt',
    city: 'city',
    hospitalName: 'hospitalName',
    hospitalAddress: 'hospitalAddress',
    locationLat: 'locationLat',
    locationLng: 'locationLng',
    description: 'description',
    status: 'status',
    matchedDonorId: 'matchedDonorId',
    forwardReason: 'forwardReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BloodRequestScalarFieldEnum = (typeof BloodRequestScalarFieldEnum)[keyof typeof BloodRequestScalarFieldEnum]


  export const RequestAssignmentScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    donorId: 'donorId',
    assignedBy: 'assignedBy',
    assignedByUserId: 'assignedByUserId',
    status: 'status',
    assignedAt: 'assignedAt',
    responseDeadlineAt: 'responseDeadlineAt',
    respondedAt: 'respondedAt',
    responseNote: 'responseNote',
    forwardReason: 'forwardReason',
    createdAt: 'createdAt'
  };

  export type RequestAssignmentScalarFieldEnum = (typeof RequestAssignmentScalarFieldEnum)[keyof typeof RequestAssignmentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    body: 'body',
    channel: 'channel',
    data: 'data',
    readAt: 'readAt',
    sentAt: 'sentAt',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    actorUserId: 'actorUserId',
    actorType: 'actorType',
    eventType: 'eventType',
    entityType: 'entityType',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    donorId: 'donorId',
    requesterId: 'requesterId',
    donatedAt: 'donatedAt',
    unitsDonated: 'unitsDonated',
    verificationStatus: 'verificationStatus',
    verifiedById: 'verifiedById',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


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
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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
   * Reference to a field of type 'Urgency'
   */
  export type EnumUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgency'>
    


  /**
   * Reference to a field of type 'Urgency[]'
   */
  export type ListEnumUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgency[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'ForwardReason'
   */
  export type EnumForwardReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ForwardReason'>
    


  /**
   * Reference to a field of type 'ForwardReason[]'
   */
  export type ListEnumForwardReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ForwardReason[]'>
    


  /**
   * Reference to a field of type 'AssignedBy'
   */
  export type EnumAssignedByFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignedBy'>
    


  /**
   * Reference to a field of type 'AssignedBy[]'
   */
  export type ListEnumAssignedByFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignedBy[]'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus[]'
   */
  export type ListEnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationChannel'
   */
  export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>
    


  /**
   * Reference to a field of type 'NotificationChannel[]'
   */
  export type ListEnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ActorType'
   */
  export type EnumActorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActorType'>
    


  /**
   * Reference to a field of type 'ActorType[]'
   */
  export type ListEnumActorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActorType[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'EntityType'
   */
  export type EnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType'>
    


  /**
   * Reference to a field of type 'EntityType[]'
   */
  export type ListEnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    photoUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    requestsCreated?: BloodRequestListRelationFilter
    assignments?: RequestAssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
    events?: EventListRelationFilter
    donationsAsDonor?: DonationListRelationFilter
    donationsAsRequester?: DonationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    status?: SortOrder
    role?: SortOrder
    emailVerifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    requestsCreated?: BloodRequestOrderByRelationAggregateInput
    assignments?: RequestAssignmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    donationsAsDonor?: DonationOrderByRelationAggregateInput
    donationsAsRequester?: DonationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    photoUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    requestsCreated?: BloodRequestListRelationFilter
    assignments?: RequestAssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
    events?: EventListRelationFilter
    donationsAsDonor?: DonationListRelationFilter
    donationsAsRequester?: DonationListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    status?: SortOrder
    role?: SortOrder
    emailVerifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    emailVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    bloodGroup?: EnumBloodGroupFilter<"UserProfile"> | $Enums.BloodGroup
    dateOfBirth?: DateTimeFilter<"UserProfile"> | Date | string
    city?: StringFilter<"UserProfile"> | string
    address?: StringFilter<"UserProfile"> | string
    age?: FloatFilter<"UserProfile"> | number
    isAvailable?: BoolFilter<"UserProfile"> | boolean
    lastDonatedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    eligibleAfter?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    medicalNotes?: StringNullableFilter<"UserProfile"> | string | null
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrder
    city?: SortOrder
    address?: SortOrder
    age?: SortOrder
    isAvailable?: SortOrder
    lastDonatedAt?: SortOrder
    eligibleAfter?: SortOrder
    medicalNotes?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    bloodGroup?: EnumBloodGroupFilter<"UserProfile"> | $Enums.BloodGroup
    dateOfBirth?: DateTimeFilter<"UserProfile"> | Date | string
    city?: StringFilter<"UserProfile"> | string
    address?: StringFilter<"UserProfile"> | string
    age?: FloatFilter<"UserProfile"> | number
    isAvailable?: BoolFilter<"UserProfile"> | boolean
    lastDonatedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    eligibleAfter?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    medicalNotes?: StringNullableFilter<"UserProfile"> | string | null
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrder
    city?: SortOrder
    address?: SortOrder
    age?: SortOrder
    isAvailable?: SortOrder
    lastDonatedAt?: SortOrder
    eligibleAfter?: SortOrder
    medicalNotes?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    bloodGroup?: EnumBloodGroupWithAggregatesFilter<"UserProfile"> | $Enums.BloodGroup
    dateOfBirth?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    city?: StringWithAggregatesFilter<"UserProfile"> | string
    address?: StringWithAggregatesFilter<"UserProfile"> | string
    age?: FloatWithAggregatesFilter<"UserProfile"> | number
    isAvailable?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    lastDonatedAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    eligibleAfter?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    medicalNotes?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type BloodRequestWhereInput = {
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    requesterId?: StringFilter<"BloodRequest"> | string
    patientName?: StringNullableFilter<"BloodRequest"> | string | null
    bloodGroup?: EnumBloodGroupFilter<"BloodRequest"> | $Enums.BloodGroup
    unitsNeeded?: IntFilter<"BloodRequest"> | number
    urgency?: EnumUrgencyFilter<"BloodRequest"> | $Enums.Urgency
    neededAt?: DateTimeFilter<"BloodRequest"> | Date | string
    city?: StringFilter<"BloodRequest"> | string
    hospitalName?: StringFilter<"BloodRequest"> | string
    hospitalAddress?: StringFilter<"BloodRequest"> | string
    locationLat?: FloatNullableFilter<"BloodRequest"> | number | null
    locationLng?: FloatNullableFilter<"BloodRequest"> | number | null
    description?: StringNullableFilter<"BloodRequest"> | string | null
    status?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    matchedDonorId?: StringNullableFilter<"BloodRequest"> | string | null
    forwardReason?: EnumForwardReasonNullableFilter<"BloodRequest"> | $Enums.ForwardReason | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: RequestAssignmentListRelationFilter
    donations?: DonationListRelationFilter
  }

  export type BloodRequestOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    unitsNeeded?: SortOrder
    urgency?: SortOrder
    neededAt?: SortOrder
    city?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    description?: SortOrder
    status?: SortOrder
    matchedDonorId?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requester?: UserOrderByWithRelationInput
    assignments?: RequestAssignmentOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
  }

  export type BloodRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    requesterId?: StringFilter<"BloodRequest"> | string
    patientName?: StringNullableFilter<"BloodRequest"> | string | null
    bloodGroup?: EnumBloodGroupFilter<"BloodRequest"> | $Enums.BloodGroup
    unitsNeeded?: IntFilter<"BloodRequest"> | number
    urgency?: EnumUrgencyFilter<"BloodRequest"> | $Enums.Urgency
    neededAt?: DateTimeFilter<"BloodRequest"> | Date | string
    city?: StringFilter<"BloodRequest"> | string
    hospitalName?: StringFilter<"BloodRequest"> | string
    hospitalAddress?: StringFilter<"BloodRequest"> | string
    locationLat?: FloatNullableFilter<"BloodRequest"> | number | null
    locationLng?: FloatNullableFilter<"BloodRequest"> | number | null
    description?: StringNullableFilter<"BloodRequest"> | string | null
    status?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    matchedDonorId?: StringNullableFilter<"BloodRequest"> | string | null
    forwardReason?: EnumForwardReasonNullableFilter<"BloodRequest"> | $Enums.ForwardReason | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: RequestAssignmentListRelationFilter
    donations?: DonationListRelationFilter
  }, "id">

  export type BloodRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    unitsNeeded?: SortOrder
    urgency?: SortOrder
    neededAt?: SortOrder
    city?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    description?: SortOrder
    status?: SortOrder
    matchedDonorId?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BloodRequestCountOrderByAggregateInput
    _avg?: BloodRequestAvgOrderByAggregateInput
    _max?: BloodRequestMaxOrderByAggregateInput
    _min?: BloodRequestMinOrderByAggregateInput
    _sum?: BloodRequestSumOrderByAggregateInput
  }

  export type BloodRequestScalarWhereWithAggregatesInput = {
    AND?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    OR?: BloodRequestScalarWhereWithAggregatesInput[]
    NOT?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BloodRequest"> | string
    requesterId?: StringWithAggregatesFilter<"BloodRequest"> | string
    patientName?: StringNullableWithAggregatesFilter<"BloodRequest"> | string | null
    bloodGroup?: EnumBloodGroupWithAggregatesFilter<"BloodRequest"> | $Enums.BloodGroup
    unitsNeeded?: IntWithAggregatesFilter<"BloodRequest"> | number
    urgency?: EnumUrgencyWithAggregatesFilter<"BloodRequest"> | $Enums.Urgency
    neededAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
    city?: StringWithAggregatesFilter<"BloodRequest"> | string
    hospitalName?: StringWithAggregatesFilter<"BloodRequest"> | string
    hospitalAddress?: StringWithAggregatesFilter<"BloodRequest"> | string
    locationLat?: FloatNullableWithAggregatesFilter<"BloodRequest"> | number | null
    locationLng?: FloatNullableWithAggregatesFilter<"BloodRequest"> | number | null
    description?: StringNullableWithAggregatesFilter<"BloodRequest"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"BloodRequest"> | $Enums.RequestStatus
    matchedDonorId?: StringNullableWithAggregatesFilter<"BloodRequest"> | string | null
    forwardReason?: EnumForwardReasonNullableWithAggregatesFilter<"BloodRequest"> | $Enums.ForwardReason | null
    createdAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
  }

  export type RequestAssignmentWhereInput = {
    AND?: RequestAssignmentWhereInput | RequestAssignmentWhereInput[]
    OR?: RequestAssignmentWhereInput[]
    NOT?: RequestAssignmentWhereInput | RequestAssignmentWhereInput[]
    id?: StringFilter<"RequestAssignment"> | string
    requestId?: StringFilter<"RequestAssignment"> | string
    donorId?: StringFilter<"RequestAssignment"> | string
    assignedBy?: EnumAssignedByFilter<"RequestAssignment"> | $Enums.AssignedBy
    assignedByUserId?: StringNullableFilter<"RequestAssignment"> | string | null
    status?: EnumAssignmentStatusFilter<"RequestAssignment"> | $Enums.AssignmentStatus
    assignedAt?: DateTimeFilter<"RequestAssignment"> | Date | string
    responseDeadlineAt?: DateTimeFilter<"RequestAssignment"> | Date | string
    respondedAt?: DateTimeNullableFilter<"RequestAssignment"> | Date | string | null
    responseNote?: StringNullableFilter<"RequestAssignment"> | string | null
    forwardReason?: EnumForwardReasonNullableFilter<"RequestAssignment"> | $Enums.ForwardReason | null
    createdAt?: DateTimeFilter<"RequestAssignment"> | Date | string
    request?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RequestAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    assignedBy?: SortOrder
    assignedByUserId?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    responseDeadlineAt?: SortOrder
    respondedAt?: SortOrder
    responseNote?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
    request?: BloodRequestOrderByWithRelationInput
    donor?: UserOrderByWithRelationInput
  }

  export type RequestAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestAssignmentWhereInput | RequestAssignmentWhereInput[]
    OR?: RequestAssignmentWhereInput[]
    NOT?: RequestAssignmentWhereInput | RequestAssignmentWhereInput[]
    requestId?: StringFilter<"RequestAssignment"> | string
    donorId?: StringFilter<"RequestAssignment"> | string
    assignedBy?: EnumAssignedByFilter<"RequestAssignment"> | $Enums.AssignedBy
    assignedByUserId?: StringNullableFilter<"RequestAssignment"> | string | null
    status?: EnumAssignmentStatusFilter<"RequestAssignment"> | $Enums.AssignmentStatus
    assignedAt?: DateTimeFilter<"RequestAssignment"> | Date | string
    responseDeadlineAt?: DateTimeFilter<"RequestAssignment"> | Date | string
    respondedAt?: DateTimeNullableFilter<"RequestAssignment"> | Date | string | null
    responseNote?: StringNullableFilter<"RequestAssignment"> | string | null
    forwardReason?: EnumForwardReasonNullableFilter<"RequestAssignment"> | $Enums.ForwardReason | null
    createdAt?: DateTimeFilter<"RequestAssignment"> | Date | string
    request?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RequestAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    assignedBy?: SortOrder
    assignedByUserId?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    responseDeadlineAt?: SortOrder
    respondedAt?: SortOrder
    responseNote?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
    _count?: RequestAssignmentCountOrderByAggregateInput
    _max?: RequestAssignmentMaxOrderByAggregateInput
    _min?: RequestAssignmentMinOrderByAggregateInput
  }

  export type RequestAssignmentScalarWhereWithAggregatesInput = {
    AND?: RequestAssignmentScalarWhereWithAggregatesInput | RequestAssignmentScalarWhereWithAggregatesInput[]
    OR?: RequestAssignmentScalarWhereWithAggregatesInput[]
    NOT?: RequestAssignmentScalarWhereWithAggregatesInput | RequestAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestAssignment"> | string
    requestId?: StringWithAggregatesFilter<"RequestAssignment"> | string
    donorId?: StringWithAggregatesFilter<"RequestAssignment"> | string
    assignedBy?: EnumAssignedByWithAggregatesFilter<"RequestAssignment"> | $Enums.AssignedBy
    assignedByUserId?: StringNullableWithAggregatesFilter<"RequestAssignment"> | string | null
    status?: EnumAssignmentStatusWithAggregatesFilter<"RequestAssignment"> | $Enums.AssignmentStatus
    assignedAt?: DateTimeWithAggregatesFilter<"RequestAssignment"> | Date | string
    responseDeadlineAt?: DateTimeWithAggregatesFilter<"RequestAssignment"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"RequestAssignment"> | Date | string | null
    responseNote?: StringNullableWithAggregatesFilter<"RequestAssignment"> | string | null
    forwardReason?: EnumForwardReasonNullableWithAggregatesFilter<"RequestAssignment"> | $Enums.ForwardReason | null
    createdAt?: DateTimeWithAggregatesFilter<"RequestAssignment"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    data?: JsonNullableFilter<"Notification">
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    channel?: SortOrder
    data?: SortOrder
    readAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    data?: JsonNullableFilter<"Notification">
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    channel?: SortOrder
    data?: SortOrder
    readAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    channel?: EnumNotificationChannelWithAggregatesFilter<"Notification"> | $Enums.NotificationChannel
    data?: JsonNullableWithAggregatesFilter<"Notification">
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    actorUserId?: StringNullableFilter<"Event"> | string | null
    actorType?: EnumActorTypeFilter<"Event"> | $Enums.ActorType
    eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    entityType?: EnumEntityTypeFilter<"Event"> | $Enums.EntityType
    entityId?: StringFilter<"Event"> | string
    metadata?: JsonNullableFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    actorType?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    actorUserId?: StringNullableFilter<"Event"> | string | null
    actorType?: EnumActorTypeFilter<"Event"> | $Enums.ActorType
    eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    entityType?: EnumEntityTypeFilter<"Event"> | $Enums.EntityType
    entityId?: StringFilter<"Event"> | string
    metadata?: JsonNullableFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    actorType?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    actorUserId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    actorType?: EnumActorTypeWithAggregatesFilter<"Event"> | $Enums.ActorType
    eventType?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    entityType?: EnumEntityTypeWithAggregatesFilter<"Event"> | $Enums.EntityType
    entityId?: StringWithAggregatesFilter<"Event"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Event">
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: StringFilter<"Donation"> | string
    requestId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    requesterId?: StringFilter<"Donation"> | string
    donatedAt?: DateTimeFilter<"Donation"> | Date | string
    unitsDonated?: IntFilter<"Donation"> | number
    verificationStatus?: EnumVerificationStatusFilter<"Donation"> | $Enums.VerificationStatus
    verifiedById?: StringNullableFilter<"Donation"> | string | null
    notes?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    request?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    donatedAt?: SortOrder
    unitsDonated?: SortOrder
    verificationStatus?: SortOrder
    verifiedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    request?: BloodRequestOrderByWithRelationInput
    donor?: UserOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    requestId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    requesterId?: StringFilter<"Donation"> | string
    donatedAt?: DateTimeFilter<"Donation"> | Date | string
    unitsDonated?: IntFilter<"Donation"> | number
    verificationStatus?: EnumVerificationStatusFilter<"Donation"> | $Enums.VerificationStatus
    verifiedById?: StringNullableFilter<"Donation"> | string | null
    notes?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    request?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    donatedAt?: SortOrder
    unitsDonated?: SortOrder
    verificationStatus?: SortOrder
    verifiedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donation"> | string
    requestId?: StringWithAggregatesFilter<"Donation"> | string
    donorId?: StringWithAggregatesFilter<"Donation"> | string
    requesterId?: StringWithAggregatesFilter<"Donation"> | string
    donatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    unitsDonated?: IntWithAggregatesFilter<"Donation"> | number
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"Donation"> | $Enums.VerificationStatus
    verifiedById?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentCreateNestedManyWithoutDonorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutDonorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    bloodGroup: $Enums.BloodGroup
    dateOfBirth: Date | string
    city: string
    address: string
    age: number
    isAvailable?: boolean
    lastDonatedAt?: Date | string | null
    eligibleAfter?: Date | string | null
    medicalNotes?: string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bloodGroup: $Enums.BloodGroup
    dateOfBirth: Date | string
    city: string
    address: string
    age: number
    isAvailable?: boolean
    lastDonatedAt?: Date | string | null
    eligibleAfter?: Date | string | null
    medicalNotes?: string | null
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastDonatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibleAfter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastDonatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibleAfter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    bloodGroup: $Enums.BloodGroup
    dateOfBirth: Date | string
    city: string
    address: string
    age: number
    isAvailable?: boolean
    lastDonatedAt?: Date | string | null
    eligibleAfter?: Date | string | null
    medicalNotes?: string | null
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastDonatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibleAfter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastDonatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibleAfter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateInput = {
    id?: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestsCreatedInput
    assignments?: RequestAssignmentCreateNestedManyWithoutRequestInput
    donations?: DonationCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUncheckedCreateInput = {
    id?: string
    requesterId: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutRequestInput
    donations?: DonationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUpdateInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestsCreatedNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutRequestNestedInput
    donations?: DonationUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateInput = {
    requesterId?: StringFieldUpdateOperationsInput | string
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutRequestNestedInput
    donations?: DonationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestCreateManyInput = {
    id?: string
    requesterId: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUpdateManyMutationInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyInput = {
    requesterId?: StringFieldUpdateOperationsInput | string
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestAssignmentCreateInput = {
    id?: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutAssignmentsInput
    donor: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type RequestAssignmentUncheckedCreateInput = {
    id?: string
    requestId: string
    donorId: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
  }

  export type RequestAssignmentUpdateInput = {
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutAssignmentsNestedInput
    donor?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type RequestAssignmentUncheckedUpdateInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestAssignmentCreateManyInput = {
    id?: string
    requestId: string
    donorId: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
  }

  export type RequestAssignmentUpdateManyMutationInput = {
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestAssignmentUncheckedUpdateManyInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title: string
    body: string
    channel?: $Enums.NotificationChannel
    data?: InputJsonValue | null
    readAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    body: string
    channel?: $Enums.NotificationChannel
    data?: InputJsonValue | null
    readAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    data?: InputJsonValue | InputJsonValue | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    data?: InputJsonValue | InputJsonValue | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    body: string
    channel?: $Enums.NotificationChannel
    data?: InputJsonValue | null
    readAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    data?: InputJsonValue | InputJsonValue | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    data?: InputJsonValue | InputJsonValue | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    actorType: $Enums.ActorType
    eventType: $Enums.EventType
    entityType: $Enums.EntityType
    entityId: string
    metadata?: InputJsonValue | null
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    actorUserId?: string | null
    actorType: $Enums.ActorType
    eventType: $Enums.EventType
    entityType: $Enums.EntityType
    entityId: string
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type EventUpdateInput = {
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    actorUserId?: string | null
    actorType: $Enums.ActorType
    eventType: $Enums.EventType
    entityType: $Enums.EntityType
    entityId: string
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateInput = {
    id?: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutDonationsInput
    donor: UserCreateNestedOneWithoutDonationsAsDonorInput
    requester: UserCreateNestedOneWithoutDonationsAsRequesterInput
  }

  export type DonationUncheckedCreateInput = {
    id?: string
    requestId: string
    donorId: string
    requesterId: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type DonationUpdateInput = {
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutDonationsNestedInput
    donor?: UserUpdateOneRequiredWithoutDonationsAsDonorNestedInput
    requester?: UserUpdateOneRequiredWithoutDonationsAsRequesterNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyInput = {
    id?: string
    requestId: string
    donorId: string
    requesterId: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type DonationUpdateManyMutationInput = {
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type BloodRequestListRelationFilter = {
    every?: BloodRequestWhereInput
    some?: BloodRequestWhereInput
    none?: BloodRequestWhereInput
  }

  export type RequestAssignmentListRelationFilter = {
    every?: RequestAssignmentWhereInput
    some?: RequestAssignmentWhereInput
    none?: RequestAssignmentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type BloodRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    status?: SortOrder
    role?: SortOrder
    emailVerifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    status?: SortOrder
    role?: SortOrder
    emailVerifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    status?: SortOrder
    role?: SortOrder
    emailVerifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type EnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrder
    city?: SortOrder
    address?: SortOrder
    age?: SortOrder
    isAvailable?: SortOrder
    lastDonatedAt?: SortOrder
    eligibleAfter?: SortOrder
    medicalNotes?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrder
    city?: SortOrder
    address?: SortOrder
    age?: SortOrder
    isAvailable?: SortOrder
    lastDonatedAt?: SortOrder
    eligibleAfter?: SortOrder
    medicalNotes?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bloodGroup?: SortOrder
    dateOfBirth?: SortOrder
    city?: SortOrder
    address?: SortOrder
    age?: SortOrder
    isAvailable?: SortOrder
    lastDonatedAt?: SortOrder
    eligibleAfter?: SortOrder
    medicalNotes?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    age?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type EnumForwardReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ForwardReason | EnumForwardReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.ForwardReason[] | ListEnumForwardReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ForwardReason[] | ListEnumForwardReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumForwardReasonNullableFilter<$PrismaModel> | $Enums.ForwardReason | null
    isSet?: boolean
  }

  export type BloodRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    unitsNeeded?: SortOrder
    urgency?: SortOrder
    neededAt?: SortOrder
    city?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    description?: SortOrder
    status?: SortOrder
    matchedDonorId?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestAvgOrderByAggregateInput = {
    unitsNeeded?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type BloodRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    unitsNeeded?: SortOrder
    urgency?: SortOrder
    neededAt?: SortOrder
    city?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    description?: SortOrder
    status?: SortOrder
    matchedDonorId?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    unitsNeeded?: SortOrder
    urgency?: SortOrder
    neededAt?: SortOrder
    city?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    description?: SortOrder
    status?: SortOrder
    matchedDonorId?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestSumOrderByAggregateInput = {
    unitsNeeded?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
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

  export type EnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type EnumForwardReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ForwardReason | EnumForwardReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.ForwardReason[] | ListEnumForwardReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ForwardReason[] | ListEnumForwardReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumForwardReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.ForwardReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumForwardReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumForwardReasonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumAssignedByFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignedBy | EnumAssignedByFieldRefInput<$PrismaModel>
    in?: $Enums.AssignedBy[] | ListEnumAssignedByFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignedBy[] | ListEnumAssignedByFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignedByFilter<$PrismaModel> | $Enums.AssignedBy
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type BloodRequestScalarRelationFilter = {
    is?: BloodRequestWhereInput
    isNot?: BloodRequestWhereInput
  }

  export type RequestAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    assignedBy?: SortOrder
    assignedByUserId?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    responseDeadlineAt?: SortOrder
    respondedAt?: SortOrder
    responseNote?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    assignedBy?: SortOrder
    assignedByUserId?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    responseDeadlineAt?: SortOrder
    respondedAt?: SortOrder
    responseNote?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    assignedBy?: SortOrder
    assignedByUserId?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    responseDeadlineAt?: SortOrder
    respondedAt?: SortOrder
    responseNote?: SortOrder
    forwardReason?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAssignedByWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignedBy | EnumAssignedByFieldRefInput<$PrismaModel>
    in?: $Enums.AssignedBy[] | ListEnumAssignedByFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignedBy[] | ListEnumAssignedByFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignedByWithAggregatesFilter<$PrismaModel> | $Enums.AssignedBy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignedByFilter<$PrismaModel>
    _max?: NestedEnumAssignedByFilter<$PrismaModel>
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type EnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    channel?: SortOrder
    data?: SortOrder
    readAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    channel?: SortOrder
    readAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    channel?: SortOrder
    readAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumActorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeFilter<$PrismaModel> | $Enums.ActorType
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type EnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    actorType?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    actorType?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    actorType?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActorTypeFilter<$PrismaModel>
    _max?: NestedEnumActorTypeFilter<$PrismaModel>
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type EnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    donatedAt?: SortOrder
    unitsDonated?: SortOrder
    verificationStatus?: SortOrder
    verifiedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    unitsDonated?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    donatedAt?: SortOrder
    unitsDonated?: SortOrder
    verificationStatus?: SortOrder
    verifiedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    donatedAt?: SortOrder
    unitsDonated?: SortOrder
    verificationStatus?: SortOrder
    verifiedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    unitsDonated?: SortOrder
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type BloodRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type RequestAssignmentCreateNestedManyWithoutDonorInput = {
    create?: XOR<RequestAssignmentCreateWithoutDonorInput, RequestAssignmentUncheckedCreateWithoutDonorInput> | RequestAssignmentCreateWithoutDonorInput[] | RequestAssignmentUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: RequestAssignmentCreateOrConnectWithoutDonorInput | RequestAssignmentCreateOrConnectWithoutDonorInput[]
    createMany?: RequestAssignmentCreateManyDonorInputEnvelope
    connect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutActorInput = {
    create?: XOR<EventCreateWithoutActorInput, EventUncheckedCreateWithoutActorInput> | EventCreateWithoutActorInput[] | EventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutActorInput | EventCreateOrConnectWithoutActorInput[]
    createMany?: EventCreateManyActorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutRequesterInput = {
    create?: XOR<DonationCreateWithoutRequesterInput, DonationUncheckedCreateWithoutRequesterInput> | DonationCreateWithoutRequesterInput[] | DonationUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequesterInput | DonationCreateOrConnectWithoutRequesterInput[]
    createMany?: DonationCreateManyRequesterInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type BloodRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type RequestAssignmentUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<RequestAssignmentCreateWithoutDonorInput, RequestAssignmentUncheckedCreateWithoutDonorInput> | RequestAssignmentCreateWithoutDonorInput[] | RequestAssignmentUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: RequestAssignmentCreateOrConnectWithoutDonorInput | RequestAssignmentCreateOrConnectWithoutDonorInput[]
    createMany?: RequestAssignmentCreateManyDonorInputEnvelope
    connect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<EventCreateWithoutActorInput, EventUncheckedCreateWithoutActorInput> | EventCreateWithoutActorInput[] | EventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutActorInput | EventCreateOrConnectWithoutActorInput[]
    createMany?: EventCreateManyActorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<DonationCreateWithoutRequesterInput, DonationUncheckedCreateWithoutRequesterInput> | DonationCreateWithoutRequesterInput[] | DonationUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequesterInput | DonationCreateOrConnectWithoutRequesterInput[]
    createMany?: DonationCreateManyRequesterInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type BloodRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutRequesterInput | BloodRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutRequesterInput | BloodRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutRequesterInput | BloodRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type RequestAssignmentUpdateManyWithoutDonorNestedInput = {
    create?: XOR<RequestAssignmentCreateWithoutDonorInput, RequestAssignmentUncheckedCreateWithoutDonorInput> | RequestAssignmentCreateWithoutDonorInput[] | RequestAssignmentUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: RequestAssignmentCreateOrConnectWithoutDonorInput | RequestAssignmentCreateOrConnectWithoutDonorInput[]
    upsert?: RequestAssignmentUpsertWithWhereUniqueWithoutDonorInput | RequestAssignmentUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: RequestAssignmentCreateManyDonorInputEnvelope
    set?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    disconnect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    delete?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    connect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    update?: RequestAssignmentUpdateWithWhereUniqueWithoutDonorInput | RequestAssignmentUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: RequestAssignmentUpdateManyWithWhereWithoutDonorInput | RequestAssignmentUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: RequestAssignmentScalarWhereInput | RequestAssignmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EventUpdateManyWithoutActorNestedInput = {
    create?: XOR<EventCreateWithoutActorInput, EventUncheckedCreateWithoutActorInput> | EventCreateWithoutActorInput[] | EventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutActorInput | EventCreateOrConnectWithoutActorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutActorInput | EventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: EventCreateManyActorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutActorInput | EventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutActorInput | EventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<DonationCreateWithoutRequesterInput, DonationUncheckedCreateWithoutRequesterInput> | DonationCreateWithoutRequesterInput[] | DonationUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequesterInput | DonationCreateOrConnectWithoutRequesterInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutRequesterInput | DonationUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: DonationCreateManyRequesterInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutRequesterInput | DonationUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutRequesterInput | DonationUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutRequesterInput | BloodRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutRequesterInput | BloodRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutRequesterInput | BloodRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type RequestAssignmentUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<RequestAssignmentCreateWithoutDonorInput, RequestAssignmentUncheckedCreateWithoutDonorInput> | RequestAssignmentCreateWithoutDonorInput[] | RequestAssignmentUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: RequestAssignmentCreateOrConnectWithoutDonorInput | RequestAssignmentCreateOrConnectWithoutDonorInput[]
    upsert?: RequestAssignmentUpsertWithWhereUniqueWithoutDonorInput | RequestAssignmentUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: RequestAssignmentCreateManyDonorInputEnvelope
    set?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    disconnect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    delete?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    connect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    update?: RequestAssignmentUpdateWithWhereUniqueWithoutDonorInput | RequestAssignmentUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: RequestAssignmentUpdateManyWithWhereWithoutDonorInput | RequestAssignmentUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: RequestAssignmentScalarWhereInput | RequestAssignmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<EventCreateWithoutActorInput, EventUncheckedCreateWithoutActorInput> | EventCreateWithoutActorInput[] | EventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutActorInput | EventCreateOrConnectWithoutActorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutActorInput | EventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: EventCreateManyActorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutActorInput | EventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutActorInput | EventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<DonationCreateWithoutRequesterInput, DonationUncheckedCreateWithoutRequesterInput> | DonationCreateWithoutRequesterInput[] | DonationUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequesterInput | DonationCreateOrConnectWithoutRequesterInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutRequesterInput | DonationUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: DonationCreateManyRequesterInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutRequesterInput | DonationUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutRequesterInput | DonationUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutRequestsCreatedInput = {
    create?: XOR<UserCreateWithoutRequestsCreatedInput, UserUncheckedCreateWithoutRequestsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type RequestAssignmentCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestAssignmentCreateWithoutRequestInput, RequestAssignmentUncheckedCreateWithoutRequestInput> | RequestAssignmentCreateWithoutRequestInput[] | RequestAssignmentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestAssignmentCreateOrConnectWithoutRequestInput | RequestAssignmentCreateOrConnectWithoutRequestInput[]
    createMany?: RequestAssignmentCreateManyRequestInputEnvelope
    connect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutRequestInput = {
    create?: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput> | DonationCreateWithoutRequestInput[] | DonationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequestInput | DonationCreateOrConnectWithoutRequestInput[]
    createMany?: DonationCreateManyRequestInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type RequestAssignmentUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestAssignmentCreateWithoutRequestInput, RequestAssignmentUncheckedCreateWithoutRequestInput> | RequestAssignmentCreateWithoutRequestInput[] | RequestAssignmentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestAssignmentCreateOrConnectWithoutRequestInput | RequestAssignmentCreateOrConnectWithoutRequestInput[]
    createMany?: RequestAssignmentCreateManyRequestInputEnvelope
    connect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput> | DonationCreateWithoutRequestInput[] | DonationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequestInput | DonationCreateOrConnectWithoutRequestInput[]
    createMany?: DonationCreateManyRequestInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUrgencyFieldUpdateOperationsInput = {
    set?: $Enums.Urgency
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableEnumForwardReasonFieldUpdateOperationsInput = {
    set?: $Enums.ForwardReason | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutRequestsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutRequestsCreatedInput, UserUncheckedCreateWithoutRequestsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsCreatedInput
    upsert?: UserUpsertWithoutRequestsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsCreatedInput, UserUpdateWithoutRequestsCreatedInput>, UserUncheckedUpdateWithoutRequestsCreatedInput>
  }

  export type RequestAssignmentUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestAssignmentCreateWithoutRequestInput, RequestAssignmentUncheckedCreateWithoutRequestInput> | RequestAssignmentCreateWithoutRequestInput[] | RequestAssignmentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestAssignmentCreateOrConnectWithoutRequestInput | RequestAssignmentCreateOrConnectWithoutRequestInput[]
    upsert?: RequestAssignmentUpsertWithWhereUniqueWithoutRequestInput | RequestAssignmentUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestAssignmentCreateManyRequestInputEnvelope
    set?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    disconnect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    delete?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    connect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    update?: RequestAssignmentUpdateWithWhereUniqueWithoutRequestInput | RequestAssignmentUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestAssignmentUpdateManyWithWhereWithoutRequestInput | RequestAssignmentUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestAssignmentScalarWhereInput | RequestAssignmentScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutRequestNestedInput = {
    create?: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput> | DonationCreateWithoutRequestInput[] | DonationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequestInput | DonationCreateOrConnectWithoutRequestInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutRequestInput | DonationUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: DonationCreateManyRequestInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutRequestInput | DonationUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutRequestInput | DonationUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type RequestAssignmentUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestAssignmentCreateWithoutRequestInput, RequestAssignmentUncheckedCreateWithoutRequestInput> | RequestAssignmentCreateWithoutRequestInput[] | RequestAssignmentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestAssignmentCreateOrConnectWithoutRequestInput | RequestAssignmentCreateOrConnectWithoutRequestInput[]
    upsert?: RequestAssignmentUpsertWithWhereUniqueWithoutRequestInput | RequestAssignmentUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestAssignmentCreateManyRequestInputEnvelope
    set?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    disconnect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    delete?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    connect?: RequestAssignmentWhereUniqueInput | RequestAssignmentWhereUniqueInput[]
    update?: RequestAssignmentUpdateWithWhereUniqueWithoutRequestInput | RequestAssignmentUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestAssignmentUpdateManyWithWhereWithoutRequestInput | RequestAssignmentUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestAssignmentScalarWhereInput | RequestAssignmentScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput> | DonationCreateWithoutRequestInput[] | DonationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRequestInput | DonationCreateOrConnectWithoutRequestInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutRequestInput | DonationUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: DonationCreateManyRequestInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutRequestInput | DonationUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutRequestInput | DonationUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type BloodRequestCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<BloodRequestCreateWithoutAssignmentsInput, BloodRequestUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutAssignmentsInput
    connect?: BloodRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAssignedByFieldUpdateOperationsInput = {
    set?: $Enums.AssignedBy
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type BloodRequestUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<BloodRequestCreateWithoutAssignmentsInput, BloodRequestUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutAssignmentsInput
    upsert?: BloodRequestUpsertWithoutAssignmentsInput
    connect?: BloodRequestWhereUniqueInput
    update?: XOR<XOR<BloodRequestUpdateToOneWithWhereWithoutAssignmentsInput, BloodRequestUpdateWithoutAssignmentsInput>, BloodRequestUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationChannelFieldUpdateOperationsInput = {
    set?: $Enums.NotificationChannel
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActorTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActorType
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntityType
  }

  export type UserUpdateOneWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type BloodRequestCreateNestedOneWithoutDonationsInput = {
    create?: XOR<BloodRequestCreateWithoutDonationsInput, BloodRequestUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonationsInput
    connect?: BloodRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonationsAsDonorInput = {
    create?: XOR<UserCreateWithoutDonationsAsDonorInput, UserUncheckedCreateWithoutDonationsAsDonorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsAsDonorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonationsAsRequesterInput = {
    create?: XOR<UserCreateWithoutDonationsAsRequesterInput, UserUncheckedCreateWithoutDonationsAsRequesterInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsAsRequesterInput
    connect?: UserWhereUniqueInput
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type BloodRequestUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<BloodRequestCreateWithoutDonationsInput, BloodRequestUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonationsInput
    upsert?: BloodRequestUpsertWithoutDonationsInput
    connect?: BloodRequestWhereUniqueInput
    update?: XOR<XOR<BloodRequestUpdateToOneWithWhereWithoutDonationsInput, BloodRequestUpdateWithoutDonationsInput>, BloodRequestUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateOneRequiredWithoutDonationsAsDonorNestedInput = {
    create?: XOR<UserCreateWithoutDonationsAsDonorInput, UserUncheckedCreateWithoutDonationsAsDonorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsAsDonorInput
    upsert?: UserUpsertWithoutDonationsAsDonorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsAsDonorInput, UserUpdateWithoutDonationsAsDonorInput>, UserUncheckedUpdateWithoutDonationsAsDonorInput>
  }

  export type UserUpdateOneRequiredWithoutDonationsAsRequesterNestedInput = {
    create?: XOR<UserCreateWithoutDonationsAsRequesterInput, UserUncheckedCreateWithoutDonationsAsRequesterInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsAsRequesterInput
    upsert?: UserUpsertWithoutDonationsAsRequesterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsAsRequesterInput, UserUpdateWithoutDonationsAsRequesterInput>, UserUncheckedUpdateWithoutDonationsAsRequesterInput>
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
    isSet?: boolean
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type NestedEnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumForwardReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ForwardReason | EnumForwardReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.ForwardReason[] | ListEnumForwardReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ForwardReason[] | ListEnumForwardReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumForwardReasonNullableFilter<$PrismaModel> | $Enums.ForwardReason | null
    isSet?: boolean
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

  export type NestedEnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Urgency[] | ListEnumUrgencyFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type NestedEnumForwardReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ForwardReason | EnumForwardReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.ForwardReason[] | ListEnumForwardReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ForwardReason[] | ListEnumForwardReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumForwardReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.ForwardReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumForwardReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumForwardReasonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumAssignedByFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignedBy | EnumAssignedByFieldRefInput<$PrismaModel>
    in?: $Enums.AssignedBy[] | ListEnumAssignedByFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignedBy[] | ListEnumAssignedByFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignedByFilter<$PrismaModel> | $Enums.AssignedBy
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignedByWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignedBy | EnumAssignedByFieldRefInput<$PrismaModel>
    in?: $Enums.AssignedBy[] | ListEnumAssignedByFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignedBy[] | ListEnumAssignedByFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignedByWithAggregatesFilter<$PrismaModel> | $Enums.AssignedBy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignedByFilter<$PrismaModel>
    _max?: NestedEnumAssignedByFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedEnumActorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeFilter<$PrismaModel> | $Enums.ActorType
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type NestedEnumActorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | EnumActorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActorType[] | ListEnumActorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActorTypeFilter<$PrismaModel>
    _max?: NestedEnumActorTypeFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    bloodGroup: $Enums.BloodGroup
    dateOfBirth: Date | string
    city: string
    address: string
    age: number
    isAvailable?: boolean
    lastDonatedAt?: Date | string | null
    eligibleAfter?: Date | string | null
    medicalNotes?: string | null
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bloodGroup: $Enums.BloodGroup
    dateOfBirth: Date | string
    city: string
    address: string
    age: number
    isAvailable?: boolean
    lastDonatedAt?: Date | string | null
    eligibleAfter?: Date | string | null
    medicalNotes?: string | null
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type BloodRequestCreateWithoutRequesterInput = {
    id?: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: RequestAssignmentCreateNestedManyWithoutRequestInput
    donations?: DonationCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutRequestInput
    donations?: DonationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestCreateOrConnectWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput>
  }

  export type BloodRequestCreateManyRequesterInputEnvelope = {
    data: BloodRequestCreateManyRequesterInput | BloodRequestCreateManyRequesterInput[]
  }

  export type RequestAssignmentCreateWithoutDonorInput = {
    id?: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutAssignmentsInput
  }

  export type RequestAssignmentUncheckedCreateWithoutDonorInput = {
    id?: string
    requestId: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
  }

  export type RequestAssignmentCreateOrConnectWithoutDonorInput = {
    where: RequestAssignmentWhereUniqueInput
    create: XOR<RequestAssignmentCreateWithoutDonorInput, RequestAssignmentUncheckedCreateWithoutDonorInput>
  }

  export type RequestAssignmentCreateManyDonorInputEnvelope = {
    data: RequestAssignmentCreateManyDonorInput | RequestAssignmentCreateManyDonorInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    body: string
    channel?: $Enums.NotificationChannel
    data?: InputJsonValue | null
    readAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    body: string
    channel?: $Enums.NotificationChannel
    data?: InputJsonValue | null
    readAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type EventCreateWithoutActorInput = {
    id?: string
    actorType: $Enums.ActorType
    eventType: $Enums.EventType
    entityType: $Enums.EntityType
    entityId: string
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type EventUncheckedCreateWithoutActorInput = {
    id?: string
    actorType: $Enums.ActorType
    eventType: $Enums.EventType
    entityType: $Enums.EntityType
    entityId: string
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type EventCreateOrConnectWithoutActorInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutActorInput, EventUncheckedCreateWithoutActorInput>
  }

  export type EventCreateManyActorInputEnvelope = {
    data: EventCreateManyActorInput | EventCreateManyActorInput[]
  }

  export type DonationCreateWithoutDonorInput = {
    id?: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutDonationsInput
    requester: UserCreateNestedOneWithoutDonationsAsRequesterInput
  }

  export type DonationUncheckedCreateWithoutDonorInput = {
    id?: string
    requestId: string
    requesterId: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutDonorInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationCreateManyDonorInputEnvelope = {
    data: DonationCreateManyDonorInput | DonationCreateManyDonorInput[]
  }

  export type DonationCreateWithoutRequesterInput = {
    id?: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
    request: BloodRequestCreateNestedOneWithoutDonationsInput
    donor: UserCreateNestedOneWithoutDonationsAsDonorInput
  }

  export type DonationUncheckedCreateWithoutRequesterInput = {
    id?: string
    requestId: string
    donorId: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutRequesterInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutRequesterInput, DonationUncheckedCreateWithoutRequesterInput>
  }

  export type DonationCreateManyRequesterInputEnvelope = {
    data: DonationCreateManyRequesterInput | DonationCreateManyRequesterInput[]
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastDonatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibleAfter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    age?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastDonatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eligibleAfter?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    update: XOR<BloodRequestUpdateWithoutRequesterInput, BloodRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput>
  }

  export type BloodRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    data: XOR<BloodRequestUpdateWithoutRequesterInput, BloodRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type BloodRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: BloodRequestScalarWhereInput
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type BloodRequestScalarWhereInput = {
    AND?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    OR?: BloodRequestScalarWhereInput[]
    NOT?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    requesterId?: StringFilter<"BloodRequest"> | string
    patientName?: StringNullableFilter<"BloodRequest"> | string | null
    bloodGroup?: EnumBloodGroupFilter<"BloodRequest"> | $Enums.BloodGroup
    unitsNeeded?: IntFilter<"BloodRequest"> | number
    urgency?: EnumUrgencyFilter<"BloodRequest"> | $Enums.Urgency
    neededAt?: DateTimeFilter<"BloodRequest"> | Date | string
    city?: StringFilter<"BloodRequest"> | string
    hospitalName?: StringFilter<"BloodRequest"> | string
    hospitalAddress?: StringFilter<"BloodRequest"> | string
    locationLat?: FloatNullableFilter<"BloodRequest"> | number | null
    locationLng?: FloatNullableFilter<"BloodRequest"> | number | null
    description?: StringNullableFilter<"BloodRequest"> | string | null
    status?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    matchedDonorId?: StringNullableFilter<"BloodRequest"> | string | null
    forwardReason?: EnumForwardReasonNullableFilter<"BloodRequest"> | $Enums.ForwardReason | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
  }

  export type RequestAssignmentUpsertWithWhereUniqueWithoutDonorInput = {
    where: RequestAssignmentWhereUniqueInput
    update: XOR<RequestAssignmentUpdateWithoutDonorInput, RequestAssignmentUncheckedUpdateWithoutDonorInput>
    create: XOR<RequestAssignmentCreateWithoutDonorInput, RequestAssignmentUncheckedCreateWithoutDonorInput>
  }

  export type RequestAssignmentUpdateWithWhereUniqueWithoutDonorInput = {
    where: RequestAssignmentWhereUniqueInput
    data: XOR<RequestAssignmentUpdateWithoutDonorInput, RequestAssignmentUncheckedUpdateWithoutDonorInput>
  }

  export type RequestAssignmentUpdateManyWithWhereWithoutDonorInput = {
    where: RequestAssignmentScalarWhereInput
    data: XOR<RequestAssignmentUpdateManyMutationInput, RequestAssignmentUncheckedUpdateManyWithoutDonorInput>
  }

  export type RequestAssignmentScalarWhereInput = {
    AND?: RequestAssignmentScalarWhereInput | RequestAssignmentScalarWhereInput[]
    OR?: RequestAssignmentScalarWhereInput[]
    NOT?: RequestAssignmentScalarWhereInput | RequestAssignmentScalarWhereInput[]
    id?: StringFilter<"RequestAssignment"> | string
    requestId?: StringFilter<"RequestAssignment"> | string
    donorId?: StringFilter<"RequestAssignment"> | string
    assignedBy?: EnumAssignedByFilter<"RequestAssignment"> | $Enums.AssignedBy
    assignedByUserId?: StringNullableFilter<"RequestAssignment"> | string | null
    status?: EnumAssignmentStatusFilter<"RequestAssignment"> | $Enums.AssignmentStatus
    assignedAt?: DateTimeFilter<"RequestAssignment"> | Date | string
    responseDeadlineAt?: DateTimeFilter<"RequestAssignment"> | Date | string
    respondedAt?: DateTimeNullableFilter<"RequestAssignment"> | Date | string | null
    responseNote?: StringNullableFilter<"RequestAssignment"> | string | null
    forwardReason?: EnumForwardReasonNullableFilter<"RequestAssignment"> | $Enums.ForwardReason | null
    createdAt?: DateTimeFilter<"RequestAssignment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    data?: JsonNullableFilter<"Notification">
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutActorInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutActorInput, EventUncheckedUpdateWithoutActorInput>
    create: XOR<EventCreateWithoutActorInput, EventUncheckedCreateWithoutActorInput>
  }

  export type EventUpdateWithWhereUniqueWithoutActorInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutActorInput, EventUncheckedUpdateWithoutActorInput>
  }

  export type EventUpdateManyWithWhereWithoutActorInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutActorInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    actorUserId?: StringNullableFilter<"Event"> | string | null
    actorType?: EnumActorTypeFilter<"Event"> | $Enums.ActorType
    eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    entityType?: EnumEntityTypeFilter<"Event"> | $Enums.EntityType
    entityId?: StringFilter<"Event"> | string
    metadata?: JsonNullableFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type DonationUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
  }

  export type DonationUpdateManyWithWhereWithoutDonorInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutDonorInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: StringFilter<"Donation"> | string
    requestId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    requesterId?: StringFilter<"Donation"> | string
    donatedAt?: DateTimeFilter<"Donation"> | Date | string
    unitsDonated?: IntFilter<"Donation"> | number
    verificationStatus?: EnumVerificationStatusFilter<"Donation"> | $Enums.VerificationStatus
    verifiedById?: StringNullableFilter<"Donation"> | string | null
    notes?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
  }

  export type DonationUpsertWithWhereUniqueWithoutRequesterInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutRequesterInput, DonationUncheckedUpdateWithoutRequesterInput>
    create: XOR<DonationCreateWithoutRequesterInput, DonationUncheckedCreateWithoutRequesterInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutRequesterInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutRequesterInput, DonationUncheckedUpdateWithoutRequesterInput>
  }

  export type DonationUpdateManyWithWhereWithoutRequesterInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutRequesterInput>
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requestsCreated?: BloodRequestCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentCreateNestedManyWithoutDonorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requestsCreated?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutDonorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestsCreated?: BloodRequestUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestsCreated?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type UserCreateWithoutRequestsCreatedInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    assignments?: RequestAssignmentCreateNestedManyWithoutDonorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutRequestsCreatedInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutDonorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutRequestsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsCreatedInput, UserUncheckedCreateWithoutRequestsCreatedInput>
  }

  export type RequestAssignmentCreateWithoutRequestInput = {
    id?: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    donor: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type RequestAssignmentUncheckedCreateWithoutRequestInput = {
    id?: string
    donorId: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
  }

  export type RequestAssignmentCreateOrConnectWithoutRequestInput = {
    where: RequestAssignmentWhereUniqueInput
    create: XOR<RequestAssignmentCreateWithoutRequestInput, RequestAssignmentUncheckedCreateWithoutRequestInput>
  }

  export type RequestAssignmentCreateManyRequestInputEnvelope = {
    data: RequestAssignmentCreateManyRequestInput | RequestAssignmentCreateManyRequestInput[]
  }

  export type DonationCreateWithoutRequestInput = {
    id?: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
    donor: UserCreateNestedOneWithoutDonationsAsDonorInput
    requester: UserCreateNestedOneWithoutDonationsAsRequesterInput
  }

  export type DonationUncheckedCreateWithoutRequestInput = {
    id?: string
    donorId: string
    requesterId: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutRequestInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput>
  }

  export type DonationCreateManyRequestInputEnvelope = {
    data: DonationCreateManyRequestInput | DonationCreateManyRequestInput[]
  }

  export type UserUpsertWithoutRequestsCreatedInput = {
    update: XOR<UserUpdateWithoutRequestsCreatedInput, UserUncheckedUpdateWithoutRequestsCreatedInput>
    create: XOR<UserCreateWithoutRequestsCreatedInput, UserUncheckedCreateWithoutRequestsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsCreatedInput, UserUncheckedUpdateWithoutRequestsCreatedInput>
  }

  export type UserUpdateWithoutRequestsCreatedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsCreatedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type RequestAssignmentUpsertWithWhereUniqueWithoutRequestInput = {
    where: RequestAssignmentWhereUniqueInput
    update: XOR<RequestAssignmentUpdateWithoutRequestInput, RequestAssignmentUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestAssignmentCreateWithoutRequestInput, RequestAssignmentUncheckedCreateWithoutRequestInput>
  }

  export type RequestAssignmentUpdateWithWhereUniqueWithoutRequestInput = {
    where: RequestAssignmentWhereUniqueInput
    data: XOR<RequestAssignmentUpdateWithoutRequestInput, RequestAssignmentUncheckedUpdateWithoutRequestInput>
  }

  export type RequestAssignmentUpdateManyWithWhereWithoutRequestInput = {
    where: RequestAssignmentScalarWhereInput
    data: XOR<RequestAssignmentUpdateManyMutationInput, RequestAssignmentUncheckedUpdateManyWithoutRequestInput>
  }

  export type DonationUpsertWithWhereUniqueWithoutRequestInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutRequestInput, DonationUncheckedUpdateWithoutRequestInput>
    create: XOR<DonationCreateWithoutRequestInput, DonationUncheckedCreateWithoutRequestInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutRequestInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutRequestInput, DonationUncheckedUpdateWithoutRequestInput>
  }

  export type DonationUpdateManyWithWhereWithoutRequestInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutRequestInput>
  }

  export type BloodRequestCreateWithoutAssignmentsInput = {
    id?: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestsCreatedInput
    donations?: DonationCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    requesterId: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donations?: DonationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestCreateOrConnectWithoutAssignmentsInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutAssignmentsInput, BloodRequestUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestCreateNestedManyWithoutRequesterInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type BloodRequestUpsertWithoutAssignmentsInput = {
    update: XOR<BloodRequestUpdateWithoutAssignmentsInput, BloodRequestUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<BloodRequestCreateWithoutAssignmentsInput, BloodRequestUncheckedCreateWithoutAssignmentsInput>
    where?: BloodRequestWhereInput
  }

  export type BloodRequestUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: BloodRequestWhereInput
    data: XOR<BloodRequestUpdateWithoutAssignmentsInput, BloodRequestUncheckedUpdateWithoutAssignmentsInput>
  }

  export type BloodRequestUpdateWithoutAssignmentsInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestsCreatedNestedInput
    donations?: DonationUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutAssignmentsInput = {
    requesterId?: StringFieldUpdateOperationsInput | string
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: DonationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUpdateManyWithoutRequesterNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentCreateNestedManyWithoutDonorInput
    events?: EventCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutDonorInput
    events?: EventUncheckedCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutDonorNestedInput
    events?: EventUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutDonorNestedInput
    events?: EventUncheckedUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentCreateNestedManyWithoutDonorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    donationsAsDonor?: DonationCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutDonorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    donationsAsDonor?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsAsRequester?: DonationUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    donationsAsDonor?: DonationUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    donationsAsDonor?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsAsRequester?: DonationUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type BloodRequestCreateWithoutDonationsInput = {
    id?: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestsCreatedInput
    assignments?: RequestAssignmentCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestUncheckedCreateWithoutDonationsInput = {
    id?: string
    requesterId: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BloodRequestCreateOrConnectWithoutDonationsInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutDonationsInput, BloodRequestUncheckedCreateWithoutDonationsInput>
  }

  export type UserCreateWithoutDonationsAsDonorInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentCreateNestedManyWithoutDonorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutActorInput
    donationsAsRequester?: DonationCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutDonationsAsDonorInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutDonorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutActorInput
    donationsAsRequester?: DonationUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutDonationsAsDonorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsAsDonorInput, UserUncheckedCreateWithoutDonationsAsDonorInput>
  }

  export type UserCreateWithoutDonationsAsRequesterInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentCreateNestedManyWithoutDonorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutDonationsAsRequesterInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash: string
    photoUrl?: string | null
    bio?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    emailVerifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    requestsCreated?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    assignments?: RequestAssignmentUncheckedCreateNestedManyWithoutDonorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutActorInput
    donationsAsDonor?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutDonationsAsRequesterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsAsRequesterInput, UserUncheckedCreateWithoutDonationsAsRequesterInput>
  }

  export type BloodRequestUpsertWithoutDonationsInput = {
    update: XOR<BloodRequestUpdateWithoutDonationsInput, BloodRequestUncheckedUpdateWithoutDonationsInput>
    create: XOR<BloodRequestCreateWithoutDonationsInput, BloodRequestUncheckedCreateWithoutDonationsInput>
    where?: BloodRequestWhereInput
  }

  export type BloodRequestUpdateToOneWithWhereWithoutDonationsInput = {
    where?: BloodRequestWhereInput
    data: XOR<BloodRequestUpdateWithoutDonationsInput, BloodRequestUncheckedUpdateWithoutDonationsInput>
  }

  export type BloodRequestUpdateWithoutDonationsInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestsCreatedNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutDonationsInput = {
    requesterId?: StringFieldUpdateOperationsInput | string
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type UserUpsertWithoutDonationsAsDonorInput = {
    update: XOR<UserUpdateWithoutDonationsAsDonorInput, UserUncheckedUpdateWithoutDonationsAsDonorInput>
    create: XOR<UserCreateWithoutDonationsAsDonorInput, UserUncheckedCreateWithoutDonationsAsDonorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsAsDonorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsAsDonorInput, UserUncheckedUpdateWithoutDonationsAsDonorInput>
  }

  export type UserUpdateWithoutDonationsAsDonorInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutActorNestedInput
    donationsAsRequester?: DonationUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsAsDonorInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutActorNestedInput
    donationsAsRequester?: DonationUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type UserUpsertWithoutDonationsAsRequesterInput = {
    update: XOR<UserUpdateWithoutDonationsAsRequesterInput, UserUncheckedUpdateWithoutDonationsAsRequesterInput>
    create: XOR<UserCreateWithoutDonationsAsRequesterInput, UserUncheckedCreateWithoutDonationsAsRequesterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsAsRequesterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsAsRequesterInput, UserUncheckedUpdateWithoutDonationsAsRequesterInput>
  }

  export type UserUpdateWithoutDonationsAsRequesterInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsAsRequesterInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    requestsCreated?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutDonorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutActorNestedInput
    donationsAsDonor?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type BloodRequestCreateManyRequesterInput = {
    id?: string
    patientName?: string | null
    bloodGroup: $Enums.BloodGroup
    unitsNeeded: number
    urgency?: $Enums.Urgency
    neededAt: Date | string
    city: string
    hospitalName: string
    hospitalAddress: string
    locationLat?: number | null
    locationLng?: number | null
    description?: string | null
    status?: $Enums.RequestStatus
    matchedDonorId?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestAssignmentCreateManyDonorInput = {
    id?: string
    requestId: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    title: string
    body: string
    channel?: $Enums.NotificationChannel
    data?: InputJsonValue | null
    readAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EventCreateManyActorInput = {
    id?: string
    actorType: $Enums.ActorType
    eventType: $Enums.EventType
    entityType: $Enums.EntityType
    entityId: string
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type DonationCreateManyDonorInput = {
    id?: string
    requestId: string
    requesterId: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type DonationCreateManyRequesterInput = {
    id?: string
    requestId: string
    donorId: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BloodRequestUpdateWithoutRequesterInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: RequestAssignmentUpdateManyWithoutRequestNestedInput
    donations?: DonationUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutRequesterInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: RequestAssignmentUncheckedUpdateManyWithoutRequestNestedInput
    donations?: DonationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateManyWithoutRequesterInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    unitsNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    neededAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    matchedDonorId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestAssignmentUpdateWithoutDonorInput = {
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type RequestAssignmentUncheckedUpdateWithoutDonorInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestAssignmentUncheckedUpdateManyWithoutDonorInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    data?: InputJsonValue | InputJsonValue | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    data?: InputJsonValue | InputJsonValue | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    data?: InputJsonValue | InputJsonValue | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutActorInput = {
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutActorInput = {
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutActorInput = {
    actorType?: EnumActorTypeFieldUpdateOperationsInput | $Enums.ActorType
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUpdateWithoutDonorInput = {
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutDonationsNestedInput
    requester?: UserUpdateOneRequiredWithoutDonationsAsRequesterNestedInput
  }

  export type DonationUncheckedUpdateWithoutDonorInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutDonorInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUpdateWithoutRequesterInput = {
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BloodRequestUpdateOneRequiredWithoutDonationsNestedInput
    donor?: UserUpdateOneRequiredWithoutDonationsAsDonorNestedInput
  }

  export type DonationUncheckedUpdateWithoutRequesterInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutRequesterInput = {
    requestId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestAssignmentCreateManyRequestInput = {
    id?: string
    donorId: string
    assignedBy?: $Enums.AssignedBy
    assignedByUserId?: string | null
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    responseDeadlineAt: Date | string
    respondedAt?: Date | string | null
    responseNote?: string | null
    forwardReason?: $Enums.ForwardReason | null
    createdAt?: Date | string
  }

  export type DonationCreateManyRequestInput = {
    id?: string
    donorId: string
    requesterId: string
    donatedAt: Date | string
    unitsDonated: number
    verificationStatus?: $Enums.VerificationStatus
    verifiedById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type RequestAssignmentUpdateWithoutRequestInput = {
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type RequestAssignmentUncheckedUpdateWithoutRequestInput = {
    donorId?: StringFieldUpdateOperationsInput | string
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestAssignmentUncheckedUpdateManyWithoutRequestInput = {
    donorId?: StringFieldUpdateOperationsInput | string
    assignedBy?: EnumAssignedByFieldUpdateOperationsInput | $Enums.AssignedBy
    assignedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDeadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNote?: NullableStringFieldUpdateOperationsInput | string | null
    forwardReason?: NullableEnumForwardReasonFieldUpdateOperationsInput | $Enums.ForwardReason | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUpdateWithoutRequestInput = {
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: UserUpdateOneRequiredWithoutDonationsAsDonorNestedInput
    requester?: UserUpdateOneRequiredWithoutDonationsAsRequesterNestedInput
  }

  export type DonationUncheckedUpdateWithoutRequestInput = {
    donorId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutRequestInput = {
    donorId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitsDonated?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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