// smithy-typescript generated code
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import {
  GetGroupConfigurationCommandInput,
  GetGroupConfigurationCommandOutput,
} from "../commands/GetGroupConfigurationCommand";
import { GetGroupQueryCommandInput, GetGroupQueryCommandOutput } from "../commands/GetGroupQueryCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GroupResourcesCommandInput, GroupResourcesCommandOutput } from "../commands/GroupResourcesCommand";
import { ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput } from "../commands/ListGroupResourcesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import {
  PutGroupConfigurationCommandInput,
  PutGroupConfigurationCommandOutput,
} from "../commands/PutGroupConfigurationCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "../commands/SearchResourcesCommand";
import { TagCommandInput, TagCommandOutput } from "../commands/TagCommand";
import { UngroupResourcesCommandInput, UngroupResourcesCommandOutput } from "../commands/UngroupResourcesCommand";
import { UntagCommandInput, UntagCommandOutput } from "../commands/UntagCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "../commands/UpdateAccountSettingsCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import { UpdateGroupQueryCommandInput, UpdateGroupQueryCommandOutput } from "../commands/UpdateGroupQueryCommand";
import {
  BadRequestException,
  ForbiddenException,
  GroupConfigurationItem,
  GroupConfigurationParameter,
  GroupFilter,
  InternalServerErrorException,
  MethodNotAllowedException,
  NotFoundException,
  ResourceFilter,
  ResourceQuery,
  TooManyRequestsException,
  UnauthorizedException,
} from "../models/models_0";
import { ResourceGroupsServiceException as __BaseException } from "../models/ResourceGroupsServiceException";

/**
 * serializeAws_restJson1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Configuration: (_) => _json(_),
      Description: [],
      Name: [],
      ResourceQuery: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-group");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Group: [],
      GroupName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-account-settings");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-group");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Group: [],
      GroupName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupConfigurationCommand
 */
export const se_GetGroupConfigurationCommand = async (
  input: GetGroupConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-group-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Group: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupQueryCommand
 */
export const se_GetGroupQueryCommand = async (
  input: GetGroupQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-group-query");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Group: [],
      GroupName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTagsCommand
 */
export const se_GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resources/{Arn}/tags");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GroupResourcesCommand
 */
export const se_GroupResourcesCommand = async (
  input: GroupResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/group-resources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Group: [],
      ResourceArns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroupResourcesCommand
 */
export const se_ListGroupResourcesCommand = async (
  input: ListGroupResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-group-resources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      Group: [],
      GroupName: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/groups-list");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutGroupConfigurationCommand
 */
export const se_PutGroupConfigurationCommand = async (
  input: PutGroupConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/put-group-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Configuration: (_) => _json(_),
      Group: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchResourcesCommand
 */
export const se_SearchResourcesCommand = async (
  input: SearchResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resources/search");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ResourceQuery: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagCommand
 */
export const se_TagCommand = async (input: TagCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resources/{Arn}/tags");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UngroupResourcesCommand
 */
export const se_UngroupResourcesCommand = async (
  input: UngroupResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ungroup-resources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Group: [],
      ResourceArns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagCommand
 */
export const se_UntagCommand = async (input: UntagCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resources/{Arn}/tags");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Keys: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountSettingsCommand
 */
export const se_UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-account-settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GroupLifecycleEventsDesiredStatus: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-group");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Group: [],
      GroupName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGroupQueryCommand
 */
export const se_UpdateGroupQueryCommand = async (
  input: UpdateGroupQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-group-query");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Group: [],
      GroupName: [],
      ResourceQuery: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Group: _json,
    GroupConfiguration: _json,
    ResourceQuery: _json,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Group: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Group: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupConfigurationCommand
 */
export const de_GetGroupConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupQueryCommand
 */
export const de_GetGroupQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupQuery: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTagsCommand
 */
export const de_GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GroupResourcesCommand
 */
export const de_GroupResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GroupResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Failed: _json,
    Pending: _json,
    Succeeded: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupResourcesCommand
 */
export const de_ListGroupResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    QueryErrors: _json,
    ResourceIdentifiers: _json,
    Resources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupIdentifiers: _json,
    Groups: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutGroupConfigurationCommand
 */
export const de_PutGroupConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupConfigurationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SearchResourcesCommand
 */
export const de_SearchResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    QueryErrors: _json,
    ResourceIdentifiers: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagCommand
 */
export const de_TagCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<TagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UngroupResourcesCommand
 */
export const de_UngroupResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UngroupResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Failed: _json,
    Pending: _json,
    Succeeded: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UntagCommand
 */
export const de_UntagCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<UntagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Keys: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountSettingsCommand
 */
export const de_UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Group: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupQueryCommand
 */
export const de_UpdateGroupQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupQuery: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.resourcegroups#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MethodNotAllowedExceptionRes
 */
const de_MethodNotAllowedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MethodNotAllowedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MethodNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_GroupConfigurationItem omitted.

// se_GroupConfigurationList omitted.

// se_GroupConfigurationParameter omitted.

// se_GroupConfigurationParameterValueList omitted.

// se_GroupFilter omitted.

// se_GroupFilterList omitted.

// se_GroupFilterValues omitted.

// se_GroupParameterList omitted.

// se_ResourceArnList omitted.

// se_ResourceFilter omitted.

// se_ResourceFilterList omitted.

// se_ResourceFilterValues omitted.

// se_ResourceQuery omitted.

// se_TagKeyList omitted.

// se_Tags omitted.

// de_AccountSettings omitted.

// de_FailedResource omitted.

// de_FailedResourceList omitted.

// de_Group omitted.

// de_GroupConfiguration omitted.

// de_GroupConfigurationItem omitted.

// de_GroupConfigurationList omitted.

// de_GroupConfigurationParameter omitted.

// de_GroupConfigurationParameterValueList omitted.

// de_GroupIdentifier omitted.

// de_GroupIdentifierList omitted.

// de_GroupList omitted.

// de_GroupParameterList omitted.

// de_GroupQuery omitted.

// de_ListGroupResourcesItem omitted.

// de_ListGroupResourcesItemList omitted.

// de_PendingResource omitted.

// de_PendingResourceList omitted.

// de_QueryError omitted.

// de_QueryErrorList omitted.

// de_ResourceArnList omitted.

// de_ResourceIdentifier omitted.

// de_ResourceIdentifierList omitted.

// de_ResourceQuery omitted.

// de_ResourceStatus omitted.

// de_TagKeyList omitted.

// de_Tags omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const _MR = "MaxResults";
const _NT = "NextToken";
const _mR = "maxResults";
const _nT = "nextToken";

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
