// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultCodeStarHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateTeamMemberCommandInput,
  AssociateTeamMemberCommandOutput,
} from "./commands/AssociateTeamMemberCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "./commands/DescribeUserProfileCommand";
import {
  DisassociateTeamMemberCommandInput,
  DisassociateTeamMemberCommandOutput,
} from "./commands/DisassociateTeamMemberCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput } from "./commands/ListTagsForProjectCommand";
import { ListTeamMembersCommandInput, ListTeamMembersCommandOutput } from "./commands/ListTeamMembersCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "./commands/ListUserProfilesCommand";
import { TagProjectCommandInput, TagProjectCommandOutput } from "./commands/TagProjectCommand";
import { UntagProjectCommandInput, UntagProjectCommandOutput } from "./commands/UntagProjectCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput } from "./commands/UpdateTeamMemberCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateTeamMemberCommandInput
  | CreateProjectCommandInput
  | CreateUserProfileCommandInput
  | DeleteProjectCommandInput
  | DeleteUserProfileCommandInput
  | DescribeProjectCommandInput
  | DescribeUserProfileCommandInput
  | DisassociateTeamMemberCommandInput
  | ListProjectsCommandInput
  | ListResourcesCommandInput
  | ListTagsForProjectCommandInput
  | ListTeamMembersCommandInput
  | ListUserProfilesCommandInput
  | TagProjectCommandInput
  | UntagProjectCommandInput
  | UpdateProjectCommandInput
  | UpdateTeamMemberCommandInput
  | UpdateUserProfileCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateTeamMemberCommandOutput
  | CreateProjectCommandOutput
  | CreateUserProfileCommandOutput
  | DeleteProjectCommandOutput
  | DeleteUserProfileCommandOutput
  | DescribeProjectCommandOutput
  | DescribeUserProfileCommandOutput
  | DisassociateTeamMemberCommandOutput
  | ListProjectsCommandOutput
  | ListResourcesCommandOutput
  | ListTagsForProjectCommandOutput
  | ListTeamMembersCommandOutput
  | ListUserProfilesCommandOutput
  | TagProjectCommandOutput
  | UntagProjectCommandOutput
  | UpdateProjectCommandOutput
  | UpdateTeamMemberCommandOutput
  | UpdateUserProfileCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CodeStarClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CodeStarClient class constructor that set the region, credentials and other options.
 */
export interface CodeStarClientConfig extends CodeStarClientConfigType {}

/**
 * @public
 */
export type CodeStarClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CodeStarClient class. This is resolved and normalized from the {@link CodeStarClientConfig | constructor configuration interface}.
 */
export interface CodeStarClientResolvedConfig extends CodeStarClientResolvedConfigType {}

/**
 * @public
 * <fullname>AWS CodeStar</fullname>
 *          <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the
 *       operations and data types for the AWS CodeStar API along with usage examples.</p>
 *          <p>You can use the AWS CodeStar API to work with:</p>
 *          <p>Projects and their resources, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DeleteProject</code>, which deletes a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeProject</code>, which lists the attributes of a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListProjects</code>, which lists all projects associated with your AWS
 *           account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListResources</code>, which lists the resources associated with a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTagsForProject</code>, which lists the tags associated with a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TagProject</code>, which adds tags to a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UntagProject</code>, which removes tags from a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateProject</code>, which updates the attributes of a project.</p>
 *             </li>
 *          </ul>
 *          <p>Teams and team members, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AssociateTeamMember</code>, which adds an IAM user to the team for a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTeamMembers</code>, which lists all the IAM users in the team for a
 *           project, including their roles and attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateTeamMember</code>, which updates a team member's attributes in a
 *           project.</p>
 *             </li>
 *          </ul>
 *          <p>Users, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateUserProfile</code>, which creates a user profile that contains data
 *           associated with the user across all projects.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteUserProfile</code>, which deletes all user profile information across
 *           all projects.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeUserProfile</code>, which describes the profile of a user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListUserProfiles</code>, which lists all user profiles.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateUserProfile</code>, which updates the profile for a user.</p>
 *             </li>
 *          </ul>
 */
export class CodeStarClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeStarClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeStarClient class. This is resolved and normalized from the {@link CodeStarClientConfig | constructor configuration interface}.
   */
  readonly config: CodeStarClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CodeStarClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultCodeStarHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: CodeStarClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
