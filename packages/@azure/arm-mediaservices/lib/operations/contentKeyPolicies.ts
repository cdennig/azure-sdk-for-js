/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/contentKeyPoliciesMappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServicesContext } from "../azureMediaServicesContext";

/** Class representing a ContentKeyPolicies. */
export class ContentKeyPolicies {
  private readonly client: AzureMediaServicesContext;

  /**
   * Create a ContentKeyPolicies.
   * @param {AzureMediaServicesContext} client Reference to the service client.
   */
  constructor(client: AzureMediaServicesContext) {
    this.client = client;
  }

  /**
   * Lists the Content Key Policies in the account
   * @summary List Content Key Policies
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentKeyPoliciesListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: Models.ContentKeyPoliciesListOptionalParams): Promise<Models.ContentKeyPoliciesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.ContentKeyPolicyCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: Models.ContentKeyPoliciesListOptionalParams, callback: msRest.ServiceCallback<Models.ContentKeyPolicyCollection>): void;
  list(resourceGroupName: string, accountName: string, options?: Models.ContentKeyPoliciesListOptionalParams, callback?: msRest.ServiceCallback<Models.ContentKeyPolicyCollection>): Promise<Models.ContentKeyPoliciesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ContentKeyPoliciesListResponse>;
  }

  /**
   * Get the details of a Content Key Policy in the Media Services account
   * @summary Get a Content Key Policy
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentKeyPoliciesGetResponse>
   */
  get(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentKeyPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, callback: msRest.ServiceCallback<Models.ContentKeyPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentKeyPolicy>): void;
  get(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContentKeyPolicy>): Promise<Models.ContentKeyPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        contentKeyPolicyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ContentKeyPoliciesGetResponse>;
  }

  /**
   * Create or update a Content Key Policy in the Media Services account
   * @summary Create or update an Content Key Policy
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentKeyPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: Models.ContentKeyPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ContentKeyPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param parameters The request parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: Models.ContentKeyPolicy, callback: msRest.ServiceCallback<Models.ContentKeyPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: Models.ContentKeyPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentKeyPolicy>): void;
  createOrUpdate(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: Models.ContentKeyPolicy, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContentKeyPolicy>): Promise<Models.ContentKeyPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        contentKeyPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ContentKeyPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a Content Key Policy in the Media Services account
   * @summary Delete a Content Key Policy
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        contentKeyPolicyName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Updates an existing Content Key Policy in the Media Services account
   * @summary Update a Content Key Policy
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentKeyPoliciesUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: Models.ContentKeyPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ContentKeyPoliciesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param parameters The request parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: Models.ContentKeyPolicy, callback: msRest.ServiceCallback<Models.ContentKeyPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: Models.ContentKeyPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentKeyPolicy>): void;
  update(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: Models.ContentKeyPolicy, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContentKeyPolicy>): Promise<Models.ContentKeyPoliciesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        contentKeyPolicyName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ContentKeyPoliciesUpdateResponse>;
  }

  /**
   * Get a Content Key Policy including secret values
   * @summary Get a Content Key Policy with secrets
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentKeyPoliciesGetPolicyPropertiesWithSecretsResponse>
   */
  getPolicyPropertiesWithSecrets(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentKeyPoliciesGetPolicyPropertiesWithSecretsResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param callback The callback
   */
  getPolicyPropertiesWithSecrets(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, callback: msRest.ServiceCallback<Models.ContentKeyPolicyProperties>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getPolicyPropertiesWithSecrets(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentKeyPolicyProperties>): void;
  getPolicyPropertiesWithSecrets(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContentKeyPolicyProperties>): Promise<Models.ContentKeyPoliciesGetPolicyPropertiesWithSecretsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        contentKeyPolicyName,
        options
      },
      getPolicyPropertiesWithSecretsOperationSpec,
      callback) as Promise<Models.ContentKeyPoliciesGetPolicyPropertiesWithSecretsResponse>;
  }

  /**
   * Lists the Content Key Policies in the account
   * @summary List Content Key Policies
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentKeyPoliciesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentKeyPoliciesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ContentKeyPolicyCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentKeyPolicyCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContentKeyPolicyCollection>): Promise<Models.ContentKeyPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ContentKeyPoliciesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentKeyPolicyCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.contentKeyPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentKeyPolicy
    },
    404: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.contentKeyPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ContentKeyPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ContentKeyPolicy
    },
    201: {
      bodyMapper: Mappers.ContentKeyPolicy
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.contentKeyPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.contentKeyPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ContentKeyPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ContentKeyPolicy
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getPolicyPropertiesWithSecretsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/contentKeyPolicies/{contentKeyPolicyName}/getPolicyPropertiesWithSecrets",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.contentKeyPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentKeyPolicyProperties
    },
    404: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentKeyPolicyCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};