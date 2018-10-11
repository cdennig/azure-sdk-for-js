/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ms-rest-azure-js'), require('ms-rest-js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'ms-rest-azure-js', 'ms-rest-js'], factory) :
    (factory((global.Azure = global.Azure || {}, global.Azure.ArmCommerce = {}),global.msRestAzure,global.msRest));
}(this, (function (exports,msRestAzure,msRest) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /**
     * Defines values for AggregationGranularity.
     * Possible values include: 'Daily', 'Hourly'
     * @readonly
     * @enum {string}
     */
    var AggregationGranularity;
    (function (AggregationGranularity) {
        AggregationGranularity["Daily"] = "Daily";
        AggregationGranularity["Hourly"] = "Hourly";
    })(AggregationGranularity || (AggregationGranularity = {}));

    var index = /*#__PURE__*/Object.freeze({
        get AggregationGranularity () { return AggregationGranularity; }
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var CloudError = msRestAzure.CloudErrorMapper;
    var BaseResource = msRestAzure.BaseResourceMapper;
    var InfoField = {
        serializedName: "InfoField",
        type: {
            name: "Composite",
            className: "InfoField",
            modelProperties: {
                project: {
                    serializedName: "project",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var UsageSample = {
        serializedName: "UsageSample",
        type: {
            name: "Composite",
            className: "UsageSample",
            modelProperties: {
                subscriptionId: {
                    serializedName: "subscriptionId",
                    type: {
                        name: "Uuid"
                    }
                },
                meterId: {
                    serializedName: "meterId",
                    type: {
                        name: "String"
                    }
                },
                usageStartTime: {
                    serializedName: "usageStartTime",
                    type: {
                        name: "DateTime"
                    }
                },
                usageEndTime: {
                    serializedName: "usageEndTime",
                    type: {
                        name: "DateTime"
                    }
                },
                quantity: {
                    serializedName: "quantity",
                    type: {
                        name: "Number"
                    }
                },
                unit: {
                    serializedName: "unit",
                    type: {
                        name: "String"
                    }
                },
                meterName: {
                    serializedName: "meterName",
                    type: {
                        name: "String"
                    }
                },
                meterCategory: {
                    serializedName: "meterCategory",
                    type: {
                        name: "String"
                    }
                },
                meterSubCategory: {
                    serializedName: "meterSubCategory",
                    type: {
                        name: "String"
                    }
                },
                meterRegion: {
                    serializedName: "meterRegion",
                    type: {
                        name: "String"
                    }
                },
                infoFields: {
                    serializedName: "infoFields",
                    type: {
                        name: "Composite",
                        className: "InfoField"
                    }
                },
                instanceData: {
                    serializedName: "instanceData",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var UsageAggregation = {
        serializedName: "UsageAggregation",
        type: {
            name: "Composite",
            className: "UsageAggregation",
            modelProperties: {
                id: {
                    serializedName: "id",
                    type: {
                        name: "String"
                    }
                },
                name: {
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                },
                type: {
                    serializedName: "type",
                    type: {
                        name: "String"
                    }
                },
                subscriptionId: {
                    serializedName: "properties.subscriptionId",
                    type: {
                        name: "Uuid"
                    }
                },
                meterId: {
                    serializedName: "properties.meterId",
                    type: {
                        name: "String"
                    }
                },
                usageStartTime: {
                    serializedName: "properties.usageStartTime",
                    type: {
                        name: "DateTime"
                    }
                },
                usageEndTime: {
                    serializedName: "properties.usageEndTime",
                    type: {
                        name: "DateTime"
                    }
                },
                quantity: {
                    serializedName: "properties.quantity",
                    type: {
                        name: "Number"
                    }
                },
                unit: {
                    serializedName: "properties.unit",
                    type: {
                        name: "String"
                    }
                },
                meterName: {
                    serializedName: "properties.meterName",
                    type: {
                        name: "String"
                    }
                },
                meterCategory: {
                    serializedName: "properties.meterCategory",
                    type: {
                        name: "String"
                    }
                },
                meterSubCategory: {
                    serializedName: "properties.meterSubCategory",
                    type: {
                        name: "String"
                    }
                },
                meterRegion: {
                    serializedName: "properties.meterRegion",
                    type: {
                        name: "String"
                    }
                },
                infoFields: {
                    serializedName: "properties.infoFields",
                    type: {
                        name: "Composite",
                        className: "InfoField"
                    }
                },
                instanceData: {
                    serializedName: "properties.instanceData",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var RateCardQueryParameters = {
        serializedName: "RateCardQueryParameters",
        type: {
            name: "Composite",
            className: "RateCardQueryParameters",
            modelProperties: {
                offerDurableId: {
                    required: true,
                    serializedName: "OfferDurableId",
                    constraints: {
                        Pattern: /^MS-AZR-\d{4}P(-\d{4}P)*$/
                    },
                    type: {
                        name: "String"
                    }
                },
                currency: {
                    required: true,
                    serializedName: "Currency",
                    type: {
                        name: "String"
                    }
                },
                locale: {
                    required: true,
                    serializedName: "Locale",
                    type: {
                        name: "String"
                    }
                },
                regionInfo: {
                    required: true,
                    serializedName: "RegionInfo",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var OfferTermInfo = {
        serializedName: "OfferTermInfo",
        type: {
            name: "Composite",
            polymorphicDiscriminator: {
                serializedName: "Name",
                clientName: "name"
            },
            uberParent: "OfferTermInfo",
            className: "OfferTermInfo",
            modelProperties: {
                effectiveDate: {
                    serializedName: "EffectiveDate",
                    type: {
                        name: "DateTime"
                    }
                },
                name: {
                    required: true,
                    serializedName: "Name",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var MeterInfo = {
        serializedName: "MeterInfo",
        type: {
            name: "Composite",
            className: "MeterInfo",
            modelProperties: {
                meterId: {
                    serializedName: "MeterId",
                    type: {
                        name: "Uuid"
                    }
                },
                meterName: {
                    serializedName: "MeterName",
                    type: {
                        name: "String"
                    }
                },
                meterCategory: {
                    serializedName: "MeterCategory",
                    type: {
                        name: "String"
                    }
                },
                meterSubCategory: {
                    serializedName: "MeterSubCategory",
                    type: {
                        name: "String"
                    }
                },
                unit: {
                    serializedName: "Unit",
                    type: {
                        name: "String"
                    }
                },
                meterTags: {
                    serializedName: "MeterTags",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "String"
                            }
                        }
                    }
                },
                meterRegion: {
                    serializedName: "MeterRegion",
                    type: {
                        name: "String"
                    }
                },
                meterRates: {
                    serializedName: "MeterRates",
                    type: {
                        name: "Dictionary",
                        value: {
                            type: {
                                name: "Number"
                            }
                        }
                    }
                },
                effectiveDate: {
                    serializedName: "EffectiveDate",
                    type: {
                        name: "DateTime"
                    }
                },
                includedQuantity: {
                    serializedName: "IncludedQuantity",
                    type: {
                        name: "Number"
                    }
                }
            }
        }
    };
    var ResourceRateCardInfo = {
        serializedName: "ResourceRateCardInfo",
        type: {
            name: "Composite",
            className: "ResourceRateCardInfo",
            modelProperties: {
                currency: {
                    serializedName: "Currency",
                    type: {
                        name: "String"
                    }
                },
                locale: {
                    serializedName: "Locale",
                    type: {
                        name: "String"
                    }
                },
                isTaxIncluded: {
                    serializedName: "IsTaxIncluded",
                    type: {
                        name: "Boolean"
                    }
                },
                offerTerms: {
                    serializedName: "OfferTerms",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                polymorphicDiscriminator: {
                                    serializedName: "Name",
                                    clientName: "name"
                                },
                                uberParent: "OfferTermInfo",
                                className: "OfferTermInfo"
                            }
                        }
                    }
                },
                meters: {
                    serializedName: "Meters",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "MeterInfo"
                            }
                        }
                    }
                }
            }
        }
    };
    var MonetaryCredit = {
        serializedName: "Monetary Credit",
        type: {
            name: "Composite",
            polymorphicDiscriminator: OfferTermInfo.type.polymorphicDiscriminator,
            uberParent: "OfferTermInfo",
            className: "MonetaryCredit",
            modelProperties: __assign({}, OfferTermInfo.type.modelProperties, { credit: {
                    serializedName: "Credit",
                    type: {
                        name: "Number"
                    }
                }, excludedMeterIds: {
                    serializedName: "ExcludedMeterIds",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Uuid"
                            }
                        }
                    }
                } })
        }
    };
    var MonetaryCommitment = {
        serializedName: "Monetary Commitment",
        type: {
            name: "Composite",
            polymorphicDiscriminator: OfferTermInfo.type.polymorphicDiscriminator,
            uberParent: "OfferTermInfo",
            className: "MonetaryCommitment",
            modelProperties: __assign({}, OfferTermInfo.type.modelProperties, { tieredDiscount: {
                    serializedName: "TieredDiscount",
                    type: {
                        name: "Dictionary",
                        value: {
                            type: {
                                name: "Number"
                            }
                        }
                    }
                }, excludedMeterIds: {
                    serializedName: "ExcludedMeterIds",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Uuid"
                            }
                        }
                    }
                } })
        }
    };
    var RecurringCharge = {
        serializedName: "Recurring Charge",
        type: {
            name: "Composite",
            polymorphicDiscriminator: OfferTermInfo.type.polymorphicDiscriminator,
            uberParent: "OfferTermInfo",
            className: "RecurringCharge",
            modelProperties: __assign({}, OfferTermInfo.type.modelProperties, { recurringCharge: {
                    serializedName: "RecurringCharge",
                    type: {
                        name: "Number"
                    }
                } })
        }
    };
    var ErrorResponse = {
        serializedName: "ErrorResponse",
        type: {
            name: "Composite",
            className: "ErrorResponse",
            modelProperties: {
                code: {
                    serializedName: "code",
                    type: {
                        name: "String"
                    }
                },
                message: {
                    serializedName: "message",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var UsageAggregationListResult = {
        serializedName: "UsageAggregationListResult",
        type: {
            name: "Composite",
            className: "UsageAggregationListResult",
            modelProperties: {
                value: {
                    serializedName: "",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "UsageAggregation"
                            }
                        }
                    }
                },
                nextLink: {
                    serializedName: "nextLink",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var discriminators = {
        'OfferTermInfo': OfferTermInfo,
        'OfferTermInfo.Monetary Credit': MonetaryCredit,
        'OfferTermInfo.Monetary Commitment': MonetaryCommitment,
        'OfferTermInfo.Recurring Charge': RecurringCharge
    };

    var mappers = /*#__PURE__*/Object.freeze({
        CloudError: CloudError,
        BaseResource: BaseResource,
        InfoField: InfoField,
        UsageSample: UsageSample,
        UsageAggregation: UsageAggregation,
        RateCardQueryParameters: RateCardQueryParameters,
        OfferTermInfo: OfferTermInfo,
        MeterInfo: MeterInfo,
        ResourceRateCardInfo: ResourceRateCardInfo,
        MonetaryCredit: MonetaryCredit,
        MonetaryCommitment: MonetaryCommitment,
        RecurringCharge: RecurringCharge,
        ErrorResponse: ErrorResponse,
        UsageAggregationListResult: UsageAggregationListResult,
        discriminators: discriminators
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    var Mappers = /*#__PURE__*/Object.freeze({
        discriminators: discriminators,
        UsageAggregationListResult: UsageAggregationListResult,
        UsageAggregation: UsageAggregation,
        InfoField: InfoField,
        ErrorResponse: ErrorResponse
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var acceptLanguage = {
        parameterPath: "acceptLanguage",
        mapper: {
            serializedName: "accept-language",
            defaultValue: 'en-US',
            type: {
                name: "String"
            }
        }
    };
    var aggregationGranularity = {
        parameterPath: [
            "options",
            "aggregationGranularity"
        ],
        mapper: {
            serializedName: "aggregationGranularity",
            defaultValue: 'Daily',
            type: {
                name: "Enum",
                allowedValues: [
                    "Daily",
                    "Hourly"
                ]
            }
        }
    };
    var apiVersion = {
        parameterPath: "apiVersion",
        mapper: {
            required: true,
            serializedName: "api-version",
            type: {
                name: "String"
            }
        }
    };
    var continuationToken = {
        parameterPath: [
            "options",
            "continuationToken"
        ],
        mapper: {
            serializedName: "continuationToken",
            type: {
                name: "String"
            }
        }
    };
    var filter = {
        parameterPath: "filter",
        mapper: {
            required: true,
            serializedName: "$filter",
            type: {
                name: "String"
            }
        }
    };
    var nextPageLink = {
        parameterPath: "nextPageLink",
        mapper: {
            required: true,
            serializedName: "nextLink",
            type: {
                name: "String"
            }
        },
        skipEncoding: true
    };
    var reportedEndTime = {
        parameterPath: "reportedEndTime",
        mapper: {
            required: true,
            serializedName: "reportedEndTime",
            type: {
                name: "DateTime"
            }
        }
    };
    var reportedStartTime = {
        parameterPath: "reportedStartTime",
        mapper: {
            required: true,
            serializedName: "reportedStartTime",
            type: {
                name: "DateTime"
            }
        }
    };
    var showDetails = {
        parameterPath: [
            "options",
            "showDetails"
        ],
        mapper: {
            serializedName: "showDetails",
            type: {
                name: "Boolean"
            }
        }
    };
    var subscriptionId = {
        parameterPath: "subscriptionId",
        mapper: {
            required: true,
            serializedName: "subscriptionId",
            type: {
                name: "String"
            }
        }
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a UsageAggregates. */
    var UsageAggregates = /** @class */ (function () {
        /**
         * Create a UsageAggregates.
         * @param {UsageManagementClientContext} client Reference to the service client.
         */
        function UsageAggregates(client) {
            this.client = client;
        }
        UsageAggregates.prototype.list = function (reportedStartTime$$1, reportedEndTime$$1, options, callback) {
            return this.client.sendOperationRequest({
                reportedStartTime: reportedStartTime$$1,
                reportedEndTime: reportedEndTime$$1,
                options: options
            }, listOperationSpec, callback);
        };
        UsageAggregates.prototype.listNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listNextOperationSpec, callback);
        };
        return UsageAggregates;
    }());
    // Operation Specifications
    var serializer = new msRest.Serializer(Mappers);
    var listOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/providers/Microsoft.Commerce/UsageAggregates",
        urlParameters: [
            subscriptionId
        ],
        queryParameters: [
            reportedStartTime,
            reportedEndTime,
            showDetails,
            aggregationGranularity,
            continuationToken,
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: UsageAggregationListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: UsageAggregationListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    var Mappers$1 = /*#__PURE__*/Object.freeze({
        discriminators: discriminators,
        ResourceRateCardInfo: ResourceRateCardInfo,
        OfferTermInfo: OfferTermInfo,
        MeterInfo: MeterInfo,
        ErrorResponse: ErrorResponse,
        MonetaryCredit: MonetaryCredit,
        MonetaryCommitment: MonetaryCommitment,
        RecurringCharge: RecurringCharge
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a RateCard. */
    var RateCard = /** @class */ (function () {
        /**
         * Create a RateCard.
         * @param {UsageManagementClientContext} client Reference to the service client.
         */
        function RateCard(client) {
            this.client = client;
        }
        RateCard.prototype.get = function (filter$$1, options, callback) {
            return this.client.sendOperationRequest({
                filter: filter$$1,
                options: options
            }, getOperationSpec, callback);
        };
        return RateCard;
    }());
    // Operation Specifications
    var serializer$1 = new msRest.Serializer(Mappers$1);
    var getOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/providers/Microsoft.Commerce/RateCard",
        urlParameters: [
            subscriptionId
        ],
        queryParameters: [
            filter,
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: ResourceRateCardInfo
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer$1
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var packageName = "@azure/arm-commerce";
    var packageVersion = "1.0.0-preview";
    var UsageManagementClientContext = /** @class */ (function (_super) {
        __extends(UsageManagementClientContext, _super);
        /**
         * Initializes a new instance of the UsageManagementClient class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId It uniquely identifies Microsoft Azure subscription. The subscription ID
         * forms part of the URI for every service call.
         * @param [options] The parameter options
         */
        function UsageManagementClientContext(credentials, subscriptionId, options) {
            var _this = this;
            if (credentials == undefined) {
                throw new Error('\'credentials\' cannot be null.');
            }
            if (subscriptionId == undefined) {
                throw new Error('\'subscriptionId\' cannot be null.');
            }
            if (!options) {
                options = {};
            }
            _this = _super.call(this, credentials, options) || this;
            _this.apiVersion = '2015-06-01-preview';
            _this.acceptLanguage = 'en-US';
            _this.longRunningOperationRetryTimeout = 30;
            _this.baseUri = options.baseUri || _this.baseUri || "https://management.azure.com";
            _this.requestContentType = "application/json; charset=utf-8";
            _this.credentials = credentials;
            _this.subscriptionId = subscriptionId;
            _this.addUserAgentInfo(packageName + "/" + packageVersion);
            if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
                _this.acceptLanguage = options.acceptLanguage;
            }
            if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
                _this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
            }
            return _this;
        }
        return UsageManagementClientContext;
    }(msRestAzure.AzureServiceClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var UsageManagementClient = /** @class */ (function (_super) {
        __extends(UsageManagementClient, _super);
        /**
         * Initializes a new instance of the UsageManagementClient class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId It uniquely identifies Microsoft Azure subscription. The subscription ID
         * forms part of the URI for every service call.
         * @param [options] The parameter options
         */
        function UsageManagementClient(credentials, subscriptionId, options) {
            var _this = _super.call(this, credentials, subscriptionId, options) || this;
            _this.usageAggregates = new UsageAggregates(_this);
            _this.rateCard = new RateCard(_this);
            return _this;
        }
        return UsageManagementClient;
    }(UsageManagementClientContext));

    exports.UsageManagementClient = UsageManagementClient;
    exports.UsageManagementClientContext = UsageManagementClientContext;
    exports.UsageManagementModels = index;
    exports.UsageManagementMappers = mappers;
    exports.UsageAggregates = UsageAggregates;
    exports.RateCard = RateCard;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=arm-commerce.js.map