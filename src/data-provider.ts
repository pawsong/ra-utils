import {
  DataProvider,
  GetListParams,
  GetListResult,
  GetOneParams,
  GetOneResult,
  GetManyParams,
  GetManyResult,
  GetManyReferenceParams,
  GetManyReferenceResult,
  UpdateParams,
  UpdateResult,
  UpdateManyParams,
  UpdateManyResult,
  CreateParams,
  CreateResult,
  DeleteParams,
  DeleteResult,
  DeleteManyParams,
  DeleteManyResult,
} from 'ra-core'

export interface Resource {
  getList: (params: GetListParams) => Promise<GetListResult>
  getOne: (params: GetOneParams) => Promise<GetOneResult>
  getMany: (params: GetManyParams) => Promise<GetManyResult>
  getManyReference: (
    params: GetManyReferenceParams,
  ) => Promise<GetManyReferenceResult>
  update: (params: UpdateParams) => Promise<UpdateResult>
  updateMany: (params: UpdateManyParams) => Promise<UpdateManyResult>
  create: (params: CreateParams) => Promise<CreateResult>
  delete: (params: DeleteParams) => Promise<DeleteResult>
  deleteMany: (params: DeleteManyParams) => Promise<DeleteManyResult>
}

export function createDataProvider(
  resources: Record<string, Resource>,
): DataProvider {
  const getResource = (resourceName: string): Resource => {
    const resource = resources[resourceName]
    if (!resource) {
      throw new Error(`Cannot find resource ${resourceName}`)
    }
    return resource
  }

  return {
    getList: (resourceName: string, params: GetListParams) => {
      const resource = getResource(resourceName)
      if (!resource.getList) {
        throw new Error(
          `[data-provider] ${resourceName}.getList not implemented`,
        )
      }
      return resource.getList(params)
    },

    getOne: (resourceName: string, params: GetOneParams) => {
      const resource = getResource(resourceName)
      if (!resource.getOne) {
        throw new Error(
          `[data-provider] ${resourceName}.getOne not implemented`,
        )
      }
      return resource.getOne(params)
    },

    getMany: (resourceName: string, params: GetManyParams) => {
      const resource = getResource(resourceName)
      if (!resource.getMany) {
        throw new Error(
          `[data-provider] ${resourceName}.getMany not implemented`,
        )
      }
      return resource.getMany(params)
    },

    getManyReference: (
      resourceName: string,
      params: GetManyReferenceParams,
    ) => {
      const resource = getResource(resourceName)
      if (!resource.getManyReference) {
        throw new Error(
          `[data-provider] ${resourceName}.getManyReference not implemented`,
        )
      }
      return resource.getManyReference(params)
    },

    update: (resourceName: string, params: UpdateParams) => {
      const resource = getResource(resourceName)
      if (!resource.update) {
        throw new Error(
          `[data-provider] ${resourceName}.update not implemented`,
        )
      }
      return resource.update(params)
    },

    updateMany: (resourceName: string, params: UpdateManyParams) => {
      const resource = getResource(resourceName)
      if (!resource.updateMany) {
        throw new Error(
          `[data-provider] ${resourceName}.updateMany not implemented`,
        )
      }
      return resource.updateMany(params)
    },

    create: (resourceName: string, params: CreateParams) => {
      const resource = getResource(resourceName)
      if (!resource.create) {
        throw new Error(
          `[data-provider] ${resourceName}.create not implemented`,
        )
      }
      return resource.create(params)
    },

    delete: async (resourceName: string, params: DeleteParams) => {
      const resource = getResource(resourceName)
      if (!resource.delete) {
        throw new Error(
          `[data-provider] ${resourceName}.delete not implemented`,
        )
      }
      return resource.delete(params)
    },

    deleteMany: async (resourceName: string, params: DeleteManyParams) => {
      const resource = getResource(resourceName)
      if (!resource.deleteMany) {
        throw new Error(
          `[data-provider] ${resourceName}.deleteMany not implemented`,
        )
      }
      return resource.deleteMany(params)
    },
  }
}
