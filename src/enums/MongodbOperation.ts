/* eslint-disable @typescript-eslint/camelcase */
export enum MongodbOperation {
  find = "find",
  insert = "insert",
  update = "update",
  distinct = "distinct",
  delete = "delete",
  aggregate = "aggregate",
  count = "count",
  get_more = "get_more",
}

export enum MongodbOperationColor {
  find = "purple",
  insert = "orange",
  update = "teal",
  distinct = "yellow",
  delete = "red",
  aggregate = "blue",
  get_more = "pink",
  count = "orange",
}
