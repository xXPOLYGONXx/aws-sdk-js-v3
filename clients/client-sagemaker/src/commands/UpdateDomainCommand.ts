// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDomainRequest, UpdateDomainResponse } from "../models/models_4";
import { de_UpdateDomainCommand, se_UpdateDomainCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandInput extends UpdateDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandOutput extends UpdateDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the default settings for new user profiles in the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateDomainCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateDomainCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateDomainRequest
 *   DomainId: "STRING_VALUE", // required
 *   DefaultUserSettings: { // UserSettings
 *     ExecutionRole: "STRING_VALUE",
 *     SecurityGroups: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     SharingSettings: { // SharingSettings
 *       NotebookOutputOption: "Allowed" || "Disabled",
 *       S3OutputPath: "STRING_VALUE",
 *       S3KmsKeyId: "STRING_VALUE",
 *     },
 *     JupyterServerAppSettings: { // JupyterServerAppSettings
 *       DefaultResourceSpec: { // ResourceSpec
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         SageMakerImageVersionAlias: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *       LifecycleConfigArns: [ // LifecycleConfigArns
 *         "STRING_VALUE",
 *       ],
 *       CodeRepositories: [ // CodeRepositories
 *         { // CodeRepository
 *           RepositoryUrl: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     KernelGatewayAppSettings: { // KernelGatewayAppSettings
 *       DefaultResourceSpec: {
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         SageMakerImageVersionAlias: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *       CustomImages: [ // CustomImages
 *         { // CustomImage
 *           ImageName: "STRING_VALUE", // required
 *           ImageVersionNumber: Number("int"),
 *           AppImageConfigName: "STRING_VALUE", // required
 *         },
 *       ],
 *       LifecycleConfigArns: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     TensorBoardAppSettings: { // TensorBoardAppSettings
 *       DefaultResourceSpec: {
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         SageMakerImageVersionAlias: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *     },
 *     RStudioServerProAppSettings: { // RStudioServerProAppSettings
 *       AccessStatus: "ENABLED" || "DISABLED",
 *       UserGroup: "R_STUDIO_ADMIN" || "R_STUDIO_USER",
 *     },
 *     RSessionAppSettings: { // RSessionAppSettings
 *       DefaultResourceSpec: {
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         SageMakerImageVersionAlias: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *       CustomImages: [
 *         {
 *           ImageName: "STRING_VALUE", // required
 *           ImageVersionNumber: Number("int"),
 *           AppImageConfigName: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     CanvasAppSettings: { // CanvasAppSettings
 *       TimeSeriesForecastingSettings: { // TimeSeriesForecastingSettings
 *         Status: "ENABLED" || "DISABLED",
 *         AmazonForecastRoleArn: "STRING_VALUE",
 *       },
 *       ModelRegisterSettings: { // ModelRegisterSettings
 *         Status: "ENABLED" || "DISABLED",
 *         CrossAccountModelRegisterRoleArn: "STRING_VALUE",
 *       },
 *       WorkspaceSettings: { // WorkspaceSettings
 *         S3ArtifactPath: "STRING_VALUE",
 *         S3KmsKeyId: "STRING_VALUE",
 *       },
 *       IdentityProviderOAuthSettings: [ // IdentityProviderOAuthSettings
 *         { // IdentityProviderOAuthSetting
 *           DataSourceName: "SalesforceGenie" || "Snowflake",
 *           Status: "ENABLED" || "DISABLED",
 *           SecretArn: "STRING_VALUE",
 *         },
 *       ],
 *       DirectDeploySettings: { // DirectDeploySettings
 *         Status: "ENABLED" || "DISABLED",
 *       },
 *       KendraSettings: { // KendraSettings
 *         Status: "ENABLED" || "DISABLED",
 *       },
 *       GenerativeAiSettings: { // GenerativeAiSettings
 *         AmazonBedrockRoleArn: "STRING_VALUE",
 *       },
 *     },
 *     CodeEditorAppSettings: { // CodeEditorAppSettings
 *       DefaultResourceSpec: {
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         SageMakerImageVersionAlias: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *       LifecycleConfigArns: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     JupyterLabAppSettings: { // JupyterLabAppSettings
 *       DefaultResourceSpec: "<ResourceSpec>",
 *       CustomImages: [
 *         {
 *           ImageName: "STRING_VALUE", // required
 *           ImageVersionNumber: Number("int"),
 *           AppImageConfigName: "STRING_VALUE", // required
 *         },
 *       ],
 *       LifecycleConfigArns: [
 *         "STRING_VALUE",
 *       ],
 *       CodeRepositories: [
 *         {
 *           RepositoryUrl: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     SpaceStorageSettings: { // DefaultSpaceStorageSettings
 *       DefaultEbsStorageSettings: { // DefaultEbsStorageSettings
 *         DefaultEbsVolumeSizeInGb: Number("int"), // required
 *         MaximumEbsVolumeSizeInGb: Number("int"), // required
 *       },
 *     },
 *     DefaultLandingUri: "STRING_VALUE",
 *     StudioWebPortal: "ENABLED" || "DISABLED",
 *     CustomPosixUserConfig: { // CustomPosixUserConfig
 *       Uid: Number("long"), // required
 *       Gid: Number("long"), // required
 *     },
 *     CustomFileSystemConfigs: [ // CustomFileSystemConfigs
 *       { // CustomFileSystemConfig Union: only one key present
 *         EFSFileSystemConfig: { // EFSFileSystemConfig
 *           FileSystemId: "STRING_VALUE", // required
 *           FileSystemPath: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   DomainSettingsForUpdate: { // DomainSettingsForUpdate
 *     RStudioServerProDomainSettingsForUpdate: { // RStudioServerProDomainSettingsForUpdate
 *       DomainExecutionRoleArn: "STRING_VALUE", // required
 *       DefaultResourceSpec: "<ResourceSpec>",
 *       RStudioConnectUrl: "STRING_VALUE",
 *       RStudioPackageManagerUrl: "STRING_VALUE",
 *     },
 *     ExecutionRoleIdentityConfig: "USER_PROFILE_NAME" || "DISABLED",
 *     SecurityGroupIds: [ // DomainSecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     DockerSettings: { // DockerSettings
 *       EnableDockerAccess: "ENABLED" || "DISABLED",
 *       VpcOnlyTrustedAccounts: [ // VpcOnlyTrustedAccounts
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   AppSecurityGroupManagement: "Service" || "Customer",
 *   DefaultSpaceSettings: { // DefaultSpaceSettings
 *     ExecutionRole: "STRING_VALUE",
 *     SecurityGroups: [
 *       "STRING_VALUE",
 *     ],
 *     JupyterServerAppSettings: {
 *       DefaultResourceSpec: "<ResourceSpec>",
 *       LifecycleConfigArns: [
 *         "STRING_VALUE",
 *       ],
 *       CodeRepositories: [
 *         {
 *           RepositoryUrl: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     KernelGatewayAppSettings: {
 *       DefaultResourceSpec: "<ResourceSpec>",
 *       CustomImages: [
 *         {
 *           ImageName: "STRING_VALUE", // required
 *           ImageVersionNumber: Number("int"),
 *           AppImageConfigName: "STRING_VALUE", // required
 *         },
 *       ],
 *       LifecycleConfigArns: "<LifecycleConfigArns>",
 *     },
 *   },
 *   SubnetIds: [ // Subnets
 *     "STRING_VALUE",
 *   ],
 *   AppNetworkAccessType: "PublicInternetOnly" || "VpcOnly",
 * };
 * const command = new UpdateDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainResponse
 * //   DomainArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDomainCommandInput - {@link UpdateDomainCommandInput}
 * @returns {@link UpdateDomainCommandOutput}
 * @see {@link UpdateDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateDomainCommand extends $Command
  .classBuilder<
    UpdateDomainCommandInput,
    UpdateDomainCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateDomain", {})
  .n("SageMakerClient", "UpdateDomainCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDomainCommand)
  .de(de_UpdateDomainCommand)
  .build() {}
