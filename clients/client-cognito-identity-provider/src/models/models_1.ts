// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CognitoIdentityProviderServiceException as __BaseException } from "./CognitoIdentityProviderServiceException";

import {
  AccountRecoverySettingType,
  AccountTakeoverRiskConfigurationType,
  AdminCreateUserConfigType,
  AnalyticsConfigurationType,
  AnalyticsMetadataType,
  AttributeType,
  AttributeTypeFilterSensitiveLog,
  CodeDeliveryDetailsType,
  CompromisedCredentialsRiskConfigurationType,
  CustomDomainConfigType,
  DeletionProtectionType,
  DeviceConfigurationType,
  DeviceRememberedStatusType,
  EmailConfigurationType,
  ExplicitAuthFlowsType,
  FeedbackValueType,
  GroupType,
  IdentityProviderType,
  LambdaConfigType,
  LogDeliveryConfigurationType,
  MFAOptionType,
  OAuthFlowType,
  PreventUserExistenceErrorTypes,
  ResourceServerScopeType,
  ResourceServerType,
  RiskConfigurationType,
  RiskConfigurationTypeFilterSensitiveLog,
  RiskExceptionConfigurationType,
  SmsConfigurationType,
  SmsMfaConfigType,
  SMSMfaSettingsType,
  SoftwareTokenMfaConfigType,
  SoftwareTokenMfaSettingsType,
  TokenValidityUnitsType,
  UICustomizationType,
  UICustomizationTypeFilterSensitiveLog,
  UserAttributeUpdateSettingsType,
  UserContextDataType,
  UserImportJobType,
  UserPoolAddOnsType,
  UserPoolClientType,
  UserPoolClientTypeFilterSensitiveLog,
  UserPoolMfaType,
  UserPoolPolicyType,
  VerificationMessageTemplateType,
  VerifiedAttributeType,
} from "./models_0";

/**
 * @public
 */
export interface SetLogDeliveryConfigurationResponse {
  /**
   * @public
   * <p>The detailed activity logging configuration that you applied to the requested user
   *             pool.</p>
   */
  LogDeliveryConfiguration?: LogDeliveryConfigurationType;
}

/**
 * @public
 */
export interface SetRiskConfigurationRequest {
  /**
   * @public
   * <p>The user pool ID. </p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The app client ID. If <code>ClientId</code> is null, then the risk configuration is
   *             mapped to <code>userPoolId</code>. When the client ID is null, the same risk
   *             configuration is applied to all the clients in the userPool.</p>
   *          <p>Otherwise, <code>ClientId</code> is mapped to the client. When the client ID isn't
   *             null, the user pool configuration is overridden and the risk configuration for the
   *             client is used instead.</p>
   */
  ClientId?: string;

  /**
   * @public
   * <p>The compromised credentials risk configuration.</p>
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

  /**
   * @public
   * <p>The account takeover risk configuration.</p>
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

  /**
   * @public
   * <p>The configuration to override the risk decision.</p>
   */
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;
}

/**
 * @public
 */
export interface SetRiskConfigurationResponse {
  /**
   * @public
   * <p>The risk configuration.</p>
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetUICustomizationRequest {
  /**
   * @public
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The client ID for the client app.</p>
   */
  ClientId?: string;

  /**
   * @public
   * <p>The CSS values in the UI customization.</p>
   */
  CSS?: string;

  /**
   * @public
   * <p>The uploaded logo image for the UI customization.</p>
   */
  ImageFile?: Uint8Array;
}

/**
 * @public
 */
export interface SetUICustomizationResponse {
  /**
   * @public
   * <p>The UI customization information.</p>
   */
  UICustomization: UICustomizationType | undefined;
}

/**
 * @public
 */
export interface SetUserMFAPreferenceRequest {
  /**
   * @public
   * <p>The SMS text message multi-factor authentication (MFA) settings.</p>
   */
  SMSMfaSettings?: SMSMfaSettingsType;

  /**
   * @public
   * <p>The time-based one-time password (TOTP) software token MFA settings.</p>
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;

  /**
   * @public
   * <p>A valid access token that Amazon Cognito issued to the user whose MFA preference you want to
   *             set.</p>
   */
  AccessToken: string | undefined;
}

/**
 * @public
 */
export interface SetUserMFAPreferenceResponse {}

/**
 * @public
 */
export interface SetUserPoolMfaConfigRequest {
  /**
   * @public
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The SMS text message MFA configuration.</p>
   */
  SmsMfaConfiguration?: SmsMfaConfigType;

  /**
   * @public
   * <p>The software token MFA configuration.</p>
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;

  /**
   * @public
   * <p>The MFA configuration. If you set the MfaConfiguration value to ‘ON’, only users who
   *             have set up an MFA factor can sign in. To learn more, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa.html">Adding Multi-Factor
   *                 Authentication (MFA) to a user pool</a>. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor activated.</p>
   *             </li>
   *          </ul>
   */
  MfaConfiguration?: UserPoolMfaType;
}

/**
 * @public
 */
export interface SetUserPoolMfaConfigResponse {
  /**
   * @public
   * <p>The SMS text message MFA configuration.</p>
   */
  SmsMfaConfiguration?: SmsMfaConfigType;

  /**
   * @public
   * <p>The software token MFA configuration.</p>
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;

  /**
   * @public
   * <p>The MFA configuration. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor enabled.</p>
   *             </li>
   *          </ul>
   */
  MfaConfiguration?: UserPoolMfaType;
}

/**
 * @public
 * <p>Represents the request to set user settings.</p>
 */
export interface SetUserSettingsRequest {
  /**
   * @public
   * <p>A valid access token that Amazon Cognito issued to the user whose user settings you want to
   *             configure.</p>
   */
  AccessToken: string | undefined;

  /**
   * @public
   * <p>You can use this parameter only to set an SMS configuration that uses SMS for
   *             delivery.</p>
   */
  MFAOptions: MFAOptionType[] | undefined;
}

/**
 * @public
 * <p>The response from the server for a set user settings request.</p>
 */
export interface SetUserSettingsResponse {}

/**
 * @public
 * <p>Represents the request to register a user.</p>
 */
export interface SignUpRequest {
  /**
   * @public
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * @public
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * @public
   * <p>The username of the user that you want to sign up. The value of this parameter is
   *             typically a username, but can be any alias attribute in your user pool.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The password of the user you want to register.</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>An array of name-value pairs representing user attributes.</p>
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   */
  UserAttributes?: AttributeType[];

  /**
   * @public
   * <p>Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda
   *     trigger. This set of key-value pairs are for custom validation of information that you
   *     collect from your users but don't need to retain.</p>
   *          <p>Your Lambda function can analyze this additional data and act on it. Your function
   *     might perform external API operations like logging user attributes and validation data
   *     to Amazon CloudWatch Logs. Validation data might also affect the response that your function returns
   *     to Amazon Cognito, like automatically confirming the user if they sign up from within your
   *     network.</p>
   *          <p>For more information about the pre sign-up Lambda trigger, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html">Pre sign-up Lambda trigger</a>.</p>
   */
  ValidationData?: AttributeType[];

  /**
   * @public
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>SignUp</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * @public
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * @public
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the SignUp API action, Amazon Cognito invokes any functions that are assigned to the
   *             following triggers: <i>pre sign-up</i>, <i>custom
   *                 message</i>, and <i>post confirmation</i>. When Amazon Cognito invokes
   *             any of these functions, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your SignUp request. In your
   *             function code in Lambda, you can process the <code>clientMetadata</code> value to enhance
   *             your workflow for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * @public
 * <p>The response from the server for a registration request.</p>
 */
export interface SignUpResponse {
  /**
   * @public
   * <p>A response from the server indicating that a user registration has been
   *             confirmed.</p>
   */
  UserConfirmed: boolean | undefined;

  /**
   * @public
   * <p>The code delivery details returned by the server response to the user registration
   *             request.</p>
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType;

  /**
   * @public
   * <p>The UUID of the authenticated user. This isn't the same as
   *             <code>username</code>.</p>
   */
  UserSub: string | undefined;
}

/**
 * @public
 * <p>Represents the request to start the user import job.</p>
 */
export interface StartUserImportJobRequest {
  /**
   * @public
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The job ID for the user import job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Represents the response from the server to the request to start the user import
 *             job.</p>
 */
export interface StartUserImportJobResponse {
  /**
   * @public
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: UserImportJobType;
}

/**
 * @public
 * <p>Represents the request to stop the user import job.</p>
 */
export interface StopUserImportJobRequest {
  /**
   * @public
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The job ID for the user import job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Represents the response from the server to the request to stop the user import
 *             job.</p>
 */
export interface StopUserImportJobResponse {
  /**
   * @public
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: UserImportJobType;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user pool to assign the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to assign to the user pool.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to remove from the user pool.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAuthEventFeedbackRequest {
  /**
   * @public
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The username of the user that you want to query or modify. The value of this parameter is typically your user's
   * username, but it can be any of their alias attributes. If <code>username</code> isn't an alias attribute in
   * your user pool, you can also use their <code>sub</code> in this request.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The event ID.</p>
   */
  EventId: string | undefined;

  /**
   * @public
   * <p>The feedback token.</p>
   */
  FeedbackToken: string | undefined;

  /**
   * @public
   * <p>The authentication event feedback value. When you provide a <code>FeedbackValue</code>
   * value of <code>valid</code>, you tell Amazon Cognito that you trust a user session where Amazon Cognito
   * has evaluated some level of risk. When you provide a <code>FeedbackValue</code> value of
   * <code>invalid</code>, you tell Amazon Cognito that you don't trust a user session, or you
   * don't believe that Amazon Cognito evaluated a high-enough risk level.</p>
   */
  FeedbackValue: FeedbackValueType | undefined;
}

/**
 * @public
 */
export interface UpdateAuthEventFeedbackResponse {}

/**
 * @public
 * <p>Represents the request to update the device status.</p>
 */
export interface UpdateDeviceStatusRequest {
  /**
   * @public
   * <p>A valid access token that Amazon Cognito issued to the user whose device status you want to
   *             update.</p>
   */
  AccessToken: string | undefined;

  /**
   * @public
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;

  /**
   * @public
   * <p>The status of whether a device is remembered.</p>
   */
  DeviceRememberedStatus?: DeviceRememberedStatusType;
}

/**
 * @public
 * <p>The response to the request to update the device status.</p>
 */
export interface UpdateDeviceStatusResponse {}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * @public
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>A string containing the new description of the group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The new role Amazon Resource Name (ARN) for the group. This is used for setting the
   *                 <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in the
   *             token.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The new precedence value for the group. For more information about this parameter, see
   *                 <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html">CreateGroup</a>.</p>
   */
  Precedence?: number;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
  /**
   * @public
   * <p>The group object for the group.</p>
   */
  Group?: GroupType;
}

/**
 * @public
 */
export interface UpdateIdentityProviderRequest {
  /**
   * @public
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The IdP name.</p>
   */
  ProviderName: string | undefined;

  /**
   * @public
   * <p>The scopes, URLs, and identifiers for your external identity provider. The following
   * examples describe the provider detail keys for each IdP type. These values and their
   * schema are subject to change. Social IdP <code>authorize_scopes</code> values must match
   * the values listed here.</p>
   *          <dl>
   *             <dt>OpenID Connect (OIDC)</dt>
   *             <dd>
   *                <p>Amazon Cognito accepts the following elements when it can't discover endpoint
   *                 URLs from <code>oidc_issuer</code>: <code>attributes_url</code>,
   *                     <code>authorize_url</code>, <code>jwks_uri</code>,
   *                     <code>token_url</code>.</p>
   *                <p>Create or update request: <code>"ProviderDetails": \{
   *                     "attributes_request_method": "GET", "attributes_url":
   *                     "https://auth.example.com/userInfo", "authorize_scopes": "openid profile
   *                     email", "authorize_url": "https://auth.example.com/authorize",
   *                     "client_id": "1example23456789", "client_secret":
   *                     "provider-app-client-secret", "jwks_uri":
   *                     "https://auth.example.com/.well-known/jwks.json", "oidc_issuer":
   *                     "https://auth.example.com", "token_url": "https://example.com/token"
   *                     \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_request_method":
   *                     "GET", "attributes_url": "https://auth.example.com/userInfo",
   *                     "attributes_url_add_attributes": "false", "authorize_scopes": "openid
   *                     profile email", "authorize_url": "https://auth.example.com/authorize",
   *                     "client_id": "1example23456789", "client_secret":
   *                     "provider-app-client-secret", "jwks_uri":
   *                     "https://auth.example.com/.well-known/jwks.json", "oidc_issuer":
   *                     "https://auth.example.com", "token_url": "https://example.com/token"
   *                     \}</code>
   *                </p>
   *             </dd>
   *             <dt>SAML</dt>
   *             <dd>
   *                <p>Create or update request with Metadata URL: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL":
   *                     "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm":
   *                     "rsa-sha256" \}</code>
   *                </p>
   *                <p>Create or update request with Metadata file: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true",
   *                     "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm":
   *                     "rsa-sha256" \}</code>
   *                </p>
   *                <p>The value of <code>MetadataFile</code> must be the plaintext metadata document with all
   *                 quote (") characters escaped by backslashes.</p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]",
   *                     "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm":
   *                     "rsa-sha256", "SLORedirectBindingURI":
   *                     "https://auth.example.com/slo/saml", "SSORedirectBindingURI":
   *                     "https://auth.example.com/sso/saml" \}</code>
   *                </p>
   *             </dd>
   *             <dt>LoginWithAmazon</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "profile postal_code", "client_id":
   *                     "amzn1.application-oa2-client.1example23456789", "client_secret":
   *                     "provider-app-client-secret"</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_url":
   *                     "https://api.amazon.com/user/profile", "attributes_url_add_attributes":
   *                     "false", "authorize_scopes": "profile postal_code", "authorize_url":
   *                     "https://www.amazon.com/ap/oa", "client_id":
   *                     "amzn1.application-oa2-client.1example23456789", "client_secret":
   *                     "provider-app-client-secret", "token_request_method": "POST",
   *                     "token_url": "https://api.amazon.com/auth/o2/token" \}</code>
   *                </p>
   *             </dd>
   *             <dt>Google</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "email profile openid", "client_id":
   *                     "1example23456789.apps.googleusercontent.com", "client_secret":
   *                     "provider-app-client-secret" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_url":
   *                     "https://people.googleapis.com/v1/people/me?personFields=",
   *                     "attributes_url_add_attributes": "true", "authorize_scopes": "email
   *                     profile openid", "authorize_url":
   *                     "https://accounts.google.com/o/oauth2/v2/auth", "client_id":
   *                     "1example23456789.apps.googleusercontent.com", "client_secret":
   *                     "provider-app-client-secret", "oidc_issuer":
   *                     "https://accounts.google.com", "token_request_method": "POST",
   *                     "token_url": "https://www.googleapis.com/oauth2/v4/token"
   *                 \}</code>
   *                </p>
   *             </dd>
   *             <dt>SignInWithApple</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE",
   *                     "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{
   *                     "attributes_url_add_attributes": "false", "authorize_scopes": "email
   *                     name", "authorize_url": "https://appleid.apple.com/auth/authorize",
   *                     "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer":
   *                     "https://appleid.apple.com", "team_id": "2EXAMPLE",
   *                     "token_request_method": "POST", "token_url":
   *                     "https://appleid.apple.com/auth/token" \}</code>
   *                </p>
   *             </dd>
   *             <dt>Facebook</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "api_version": "v17.0",
   *             "authorize_scopes": "public_profile, email", "client_id": "1example23456789",
   *             "client_secret": "provider-app-client-secret" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails":
   *             \{ "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=",
   *             "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email",
   *             "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id":
   *             "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method":
   *             "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" \}</code>
   *                </p>
   *             </dd>
   *          </dl>
   */
  ProviderDetails?: Record<string, string>;

  /**
   * @public
   * <p>The IdP attribute mapping to be changed.</p>
   */
  AttributeMapping?: Record<string, string>;

  /**
   * @public
   * <p>A list of IdP identifiers.</p>
   */
  IdpIdentifiers?: string[];
}

/**
 * @public
 */
export interface UpdateIdentityProviderResponse {
  /**
   * @public
   * <p>The identity provider details.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface UpdateResourceServerRequest {
  /**
   * @public
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The identifier for the resource server.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The name of the resource server.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The scope values to be set for the resource server.</p>
   */
  Scopes?: ResourceServerScopeType[];
}

/**
 * @public
 */
export interface UpdateResourceServerResponse {
  /**
   * @public
   * <p>The resource server.</p>
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * @public
 * <p>Represents the request to update user attributes.</p>
 */
export interface UpdateUserAttributesRequest {
  /**
   * @public
   * <p>An array of name-value pairs representing user attributes.</p>
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *          <p>If you have set an attribute to require verification before Amazon Cognito updates its value,
   *             this request doesn’t immediately update the value of that attribute. After your user
   *             receives and responds to a verification message to verify the new value, Amazon Cognito updates
   *             the attribute value. Your user can sign in and receive messages with the original
   *             attribute value until they verify the new value.</p>
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * @public
   * <p>A valid access token that Amazon Cognito issued to the user whose user attributes you want to
   *             update.</p>
   */
  AccessToken: string | undefined;

  /**
   * @public
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action initiates. </p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers. When
   *             you use the UpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned
   *             to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it
   *             passes a JSON payload, which the function receives as input. This payload contains a
   *                 <code>clientMetadata</code> attribute, which provides the data that you assigned to
   *             the ClientMetadata parameter in your UpdateUserAttributes request. In your function code
   *             in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow
   *             for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * @public
 * <p>Represents the response from the server for the request to update user
 *             attributes.</p>
 */
export interface UpdateUserAttributesResponse {
  /**
   * @public
   * <p>The code delivery details list from the server for the request to update user
   *             attributes.</p>
   */
  CodeDeliveryDetailsList?: CodeDeliveryDetailsType[];
}

/**
 * @public
 * <p>Represents the request to update the user pool.</p>
 */
export interface UpdateUserPoolRequest {
  /**
   * @public
   * <p>The user pool ID for the user pool you want to update.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>A container with the policies you want to update in a user pool.</p>
   */
  Policies?: UserPoolPolicyType;

  /**
   * @public
   * <p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user
   * pool. Before you can delete a user pool that you have protected against deletion, you
   * must deactivate this feature.</p>
   *          <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request,
   * Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool,
   * send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an
   * <code>UpdateUserPool</code> API request.</p>
   */
  DeletionProtection?: DeletionProtectionType;

  /**
   * @public
   * <p>The Lambda configuration information from the request to update the user pool.</p>
   */
  LambdaConfig?: LambdaConfigType;

  /**
   * @public
   * <p>The attributes that are automatically verified when Amazon Cognito requests to update user
   *             pools.</p>
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[];

  /**
   * @public
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  SmsVerificationMessage?: string;

  /**
   * @public
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  EmailVerificationMessage?: string;

  /**
   * @public
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  EmailVerificationSubject?: string;

  /**
   * @public
   * <p>The template for verification messages.</p>
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType;

  /**
   * @public
   * <p>The contents of the SMS authentication message.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * @public
   * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
   * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
   * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
   * Verifying updates to email addresses and phone numbers</a>.</p>
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;

  /**
   * @public
   * <p>Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> - MFA tokens aren't required and can't be specified during user
   *                     registration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> - MFA tokens are required for all user registrations. You can
   *                     only specify ON when you're initially creating a user pool. You can use the
   *                         <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html">SetUserPoolMfaConfig</a> API operation to turn MFA "ON" for existing
   *                     user pools. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> - Users have the option when registering to create an MFA
   *                     token.</p>
   *             </li>
   *          </ul>
   */
  MfaConfiguration?: UserPoolMfaType;

  /**
   * @public
   * <p>The device-remembering configuration for a user pool. A null value indicates that you
   *             have deactivated device remembering in your user pool.</p>
   *          <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you
   *                 activate the Amazon Cognito device-remembering feature.</p>
   *          </note>
   */
  DeviceConfiguration?: DeviceConfigurationType;

  /**
   * @public
   * <p>The email configuration of your user pool. The email configuration type sets your
   *             preferred sending method, Amazon Web Services Region, and sender for email invitation and verification
   *             messages from your user pool.</p>
   */
  EmailConfiguration?: EmailConfigurationType;

  /**
   * @public
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages
   *             with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management
   *             (IAM) role in your Amazon Web Services account.</p>
   */
  SmsConfiguration?: SmsConfigurationType;

  /**
   * @public
   * <p>The tag keys and values to assign to the user pool. A tag is a label that you can use
   *             to categorize and manage user pools in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   */
  UserPoolTags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType;

  /**
   * @public
   * <p>User pool add-ons. Contains settings for activation of advanced security features. To
   *     log user security information but take no action, set to <code>AUDIT</code>. To
   *     configure automatic security responses to risky traffic to your user pool, set to
   *         <code>ENFORCED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>
   */
  UserPoolAddOns?: UserPoolAddOnsType;

  /**
   * @public
   * <p>The available verified method a user can use to recover their password when they call
   *                 <code>ForgotPassword</code>. You can use this setting to define a preferred method
   *             when a user has more than one method available. With this setting, SMS doesn't qualify
   *             for a valid password recovery mechanism if the user also has SMS multi-factor
   *             authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy
   *             behavior to determine the recovery method where SMS is preferred through email.</p>
   */
  AccountRecoverySetting?: AccountRecoverySettingType;
}

/**
 * @public
 * <p>Represents the response from the server when you make a request to update the user
 *             pool.</p>
 */
export interface UpdateUserPoolResponse {}

/**
 * @public
 * <p>Represents the request to update the user pool client.</p>
 */
export interface UpdateUserPoolClientRequest {
  /**
   * @public
   * <p>The user pool ID for the user pool where you want to update the user pool
   *             client.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * @public
   * <p>The client name from the update user pool client request.</p>
   */
  ClientName?: string;

  /**
   * @public
   * <p>The refresh token time limit. After this limit expires, your user can't use
   * their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and
   * <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session
   * and retrieve new access and ID tokens for 10 days.</p>
   *          <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days.
   * You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the
   * value with the default value of 30 days. <i>Valid range</i> is displayed below
   * in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your refresh
   * tokens are valid for 30 days.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * @public
   * <p>The access token time limit. After this limit expires, your user can't use
   * their access token. To specify the time unit for <code>AccessTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and
   * <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with
   * their access token for 10 hours.</p>
   *          <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   * <i>Valid range</i> is displayed below in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your access
   * tokens are valid for one hour.</p>
   */
  AccessTokenValidity?: number;

  /**
   * @public
   * <p>The ID token time limit. After this limit expires, your user can't use
   * their ID token. To specify the time unit for <code>IdTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and
   * <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their
   * session with their ID token for 10 hours.</p>
   *          <p>The default time unit for <code>IdTokenValidity</code> in an API request is hours.
   * <i>Valid range</i> is displayed below in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your ID
   * tokens are valid for one hour.</p>
   */
  IdTokenValidity?: number;

  /**
   * @public
   * <p>The time units you use when you set the duration of ID, access, and refresh tokens.
   *             The default unit for RefreshToken is days, and the default for ID and access tokens is
   *             hours.</p>
   */
  TokenValidityUnits?: TokenValidityUnitsType;

  /**
   * @public
   * <p>The list of user attributes that you want your app client to have read-only access to.
   *     After your user authenticates in your app, their access token authorizes them to read
   *     their own attribute value for any attribute in this list. An example of this kind of
   *     activity is when your user selects a link to view their profile information. Your app
   *     makes a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html">GetUser</a> API request to retrieve and display your user's profile
   *     data.</p>
   *          <p>When you don't specify the <code>ReadAttributes</code> for your app client, your
   *     app can read the values of <code>email_verified</code>,
   *         <code>phone_number_verified</code>, and the Standard attributes of your user pool.
   *     When your user pool has read access to these default attributes,
   *         <code>ReadAttributes</code> doesn't return any information. Amazon Cognito only
   *     populates <code>ReadAttributes</code> in the API response if you have specified your own
   *     custom set of read attributes.</p>
   */
  ReadAttributes?: string[];

  /**
   * @public
   * <p>The list of user attributes that you want your app client to have write access to.
   *     After your user authenticates in your app, their access token authorizes them to set or
   *     modify their own attribute value for any attribute in this list. An example of this kind
   *     of activity is when you present your user with a form to update their profile
   *     information and they change their last name. Your app then makes an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html">UpdateUserAttributes</a> API request and sets <code>family_name</code> to the
   *     new value. </p>
   *          <p>When you don't specify the <code>WriteAttributes</code> for your app client, your
   *     app can write the values of the Standard attributes of your user pool. When your user
   *     pool has write access to these default attributes, <code>WriteAttributes</code>
   *     doesn't return any information. Amazon Cognito only populates
   *         <code>WriteAttributes</code> in the API response if you have specified your own
   *     custom set of write attributes.</p>
   *          <p>If your app client allows users to sign in through an IdP, this array must include all
   *     attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when
   *     users sign in to your application through an IdP. If your app client does not have write
   *     access to a mapped attribute, Amazon Cognito throws an error when it tries to update the
   *     attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying IdP Attribute Mappings for Your user
   *     pool</a>.</p>
   */
  WriteAttributes?: string[];

  /**
   * @public
   * <p>The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in
   * your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and
   * password, or a custom authentication process that you define with Lambda functions.</p>
   *          <note>
   *             <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your user client supports <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.</p>
   *          </note>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password
   *             authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces
   *             the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow, your app
   *             passes a user name and password to Amazon Cognito in the request, instead of using the Secure
   *             Remote Password (SRP) protocol to securely transmit the password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based
   *             authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based
   *             authentication. In this flow, Amazon Cognito receives the password in the request instead
   *             of using the SRP protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP-based authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh
   *             tokens.</p>
   *             </li>
   *          </ul>
   *          <p>In some environments, you will see the values <code>ADMIN_NO_SRP_AUTH</code>, <code>CUSTOM_AUTH_FLOW_ONLY</code>, or <code>USER_PASSWORD_AUTH</code>.
   * You can't assign these legacy <code>ExplicitAuthFlows</code> values to user pool clients at the same time as values that begin with <code>ALLOW_</code>,
   * like <code>ALLOW_USER_SRP_AUTH</code>.</p>
   */
  ExplicitAuthFlows?: ExplicitAuthFlowsType[];

  /**
   * @public
   * <p>A list of provider names for the IdPs that this client supports. The following are
   *             supported: <code>COGNITO</code>, <code>Facebook</code>, <code>Google</code>,
   *                 <code>SignInWithApple</code>, <code>LoginWithAmazon</code>, and the names of your
   *             own SAML and OIDC providers.</p>
   */
  SupportedIdentityProviders?: string[];

  /**
   * @public
   * <p>A list of allowed redirect (callback) URLs for the IdPs.</p>
   *          <p>A redirect URI must:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *          <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *          <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *          <p>App callback URLs such as <code>myapp://example</code> are also supported.</p>
   */
  CallbackURLs?: string[];

  /**
   * @public
   * <p>A list of allowed logout URLs for the IdPs.</p>
   */
  LogoutURLs?: string[];

  /**
   * @public
   * <p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p>
   *          <p>A redirect URI must:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *          <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *          <p>Amazon Cognito requires HTTPS over HTTP except for <code>http://localhost</code> for testing
   *             purposes only.</p>
   *          <p>App callback URLs such as <code>myapp://example</code> are also supported.</p>
   */
  DefaultRedirectURI?: string;

  /**
   * @public
   * <p>The allowed OAuth flows.</p>
   *          <dl>
   *             <dt>code</dt>
   *             <dd>
   *                <p>Use a code grant flow, which provides an authorization code as the
   *                         response. This code can be exchanged for access tokens with the
   *                             <code>/oauth2/token</code> endpoint.</p>
   *             </dd>
   *             <dt>implicit</dt>
   *             <dd>
   *                <p>Issue the access token (and, optionally, ID token, based on scopes)
   *                         directly to your user.</p>
   *             </dd>
   *             <dt>client_credentials</dt>
   *             <dd>
   *                <p>Issue the access token from the <code>/oauth2/token</code> endpoint
   *                         directly to a non-person user using a combination of the client ID and
   *                         client secret.</p>
   *             </dd>
   *          </dl>
   */
  AllowedOAuthFlows?: OAuthFlowType[];

  /**
   * @public
   * <p>The allowed OAuth scopes. Possible values provided by OAuth are <code>phone</code>,
   *                 <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values
   *             provided by Amazon Web Services are <code>aws.cognito.signin.user.admin</code>. Custom scopes created
   *             in Resource Servers are also supported.</p>
   */
  AllowedOAuthScopes?: string[];

  /**
   * @public
   * <p>Set to <code>true</code> to use OAuth 2.0 features in your user pool app client.</p>
   *          <p>
   *             <code>AllowedOAuthFlowsUserPoolClient</code> must be <code>true</code> before you can configure
   * the following features in your app client.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CallBackURLs</code>: Callback URLs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LogoutURLs</code>: Sign-out redirect URLs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllowedOAuthScopes</code>: OAuth 2.0 scopes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllowedOAuthFlows</code>: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.</p>
   *             </li>
   *          </ul>
   *          <p>To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set
   * <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or
   * <code>UpdateUserPoolClient</code> API request. If you don't set a value for
   * <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults
   * to <code>false</code>.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * @public
   * <p>The Amazon Pinpoint analytics configuration necessary to collect metrics for this user
   *             pool.</p>
   *          <note>
   *             <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending
   *                 events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user
   *                 pools support sending events to Amazon Pinpoint projects within that same Region.</p>
   *          </note>
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType;

  /**
   * @public
   * <p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *                 <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LEGACY</code> - This represents the early behavior of Amazon Cognito where user
   *                     existence related errors aren't prevented.</p>
   *             </li>
   *          </ul>
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;

  /**
   * @public
   * <p>Activates or deactivates token revocation. For more information about revoking tokens,
   *             see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   */
  EnableTokenRevocation?: boolean;

  /**
   * @public
   * <p>Activates the propagation of additional user context data. For more information about
   *             propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html"> Adding advanced security to a user pool</a>. If you don’t include this
   *             parameter, you can't send device fingerprint information, including source IP address,
   *             to Amazon Cognito advanced security. You can only activate
   *                 <code>EnablePropagateAdditionalUserContextData</code> in an app client that has a
   *             client secret.</p>
   */
  EnablePropagateAdditionalUserContextData?: boolean;

  /**
   * @public
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   */
  AuthSessionValidity?: number;
}

/**
 * @public
 * <p>Represents the response from the server to the request to update the user pool
 *             client.</p>
 */
export interface UpdateUserPoolClientResponse {
  /**
   * @public
   * <p>The user pool client value from the response from the server when you request to
   *             update the user pool client.</p>
   */
  UserPoolClient?: UserPoolClientType;
}

/**
 * @public
 * <p>The UpdateUserPoolDomain request input.</p>
 */
export interface UpdateUserPoolDomainRequest {
  /**
   * @public
   * <p>The domain name for the custom domain that hosts the sign-up and sign-in pages for
   *             your application. One example might be <code>auth.example.com</code>. </p>
   *          <p>This string can include only lowercase letters, numbers, and hyphens. Don't use a
   *             hyphen for the first or last character. Use periods to separate subdomain names.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The ID of the user pool that is associated with the custom domain whose certificate
   *             you're updating.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in pages for
   *             your application. Use this object to specify an SSL certificate that is managed by
   *             ACM.</p>
   */
  CustomDomainConfig: CustomDomainConfigType | undefined;
}

/**
 * @public
 * <p>The UpdateUserPoolDomain response output.</p>
 */
export interface UpdateUserPoolDomainResponse {
  /**
   * @public
   * <p>The Amazon CloudFront endpoint that Amazon Cognito set up when you added the custom domain to your user
   *             pool.</p>
   */
  CloudFrontDomain?: string;
}

/**
 * @public
 * <p>This exception is thrown when there is a code mismatch and the service fails to
 *             configure the software token TOTP multi-factor authentication (MFA).</p>
 */
export class EnableSoftwareTokenMFAException extends __BaseException {
  readonly name: "EnableSoftwareTokenMFAException" = "EnableSoftwareTokenMFAException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EnableSoftwareTokenMFAException, __BaseException>) {
    super({
      name: "EnableSoftwareTokenMFAException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EnableSoftwareTokenMFAException.prototype);
  }
}

/**
 * @public
 */
export interface VerifySoftwareTokenRequest {
  /**
   * @public
   * <p>A valid access token that Amazon Cognito issued to the user whose software token you want to
   *             verify.</p>
   */
  AccessToken?: string;

  /**
   * @public
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service.</p>
   */
  Session?: string;

  /**
   * @public
   * <p>The one- time password computed using the secret code returned by <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html">AssociateSoftwareToken</a>.</p>
   */
  UserCode: string | undefined;

  /**
   * @public
   * <p>The friendly device name.</p>
   */
  FriendlyDeviceName?: string;
}

/**
 * @public
 * @enum
 */
export const VerifySoftwareTokenResponseType = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type VerifySoftwareTokenResponseType =
  (typeof VerifySoftwareTokenResponseType)[keyof typeof VerifySoftwareTokenResponseType];

/**
 * @public
 */
export interface VerifySoftwareTokenResponse {
  /**
   * @public
   * <p>The status of the verify software token.</p>
   */
  Status?: VerifySoftwareTokenResponseType;

  /**
   * @public
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service.</p>
   */
  Session?: string;
}

/**
 * @public
 * <p>Represents the request to verify user attributes.</p>
 */
export interface VerifyUserAttributeRequest {
  /**
   * @public
   * <p>A valid access token that Amazon Cognito issued to the user whose user attributes you want to
   *             verify.</p>
   */
  AccessToken: string | undefined;

  /**
   * @public
   * <p>The attribute name in the request to verify user attributes.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>The verification code in the request to verify user attributes.</p>
   */
  Code: string | undefined;
}

/**
 * @public
 * <p>A container representing the response from the server from the request to verify user
 *             attributes.</p>
 */
export interface VerifyUserAttributeResponse {}

/**
 * @internal
 */
export const SetRiskConfigurationRequestFilterSensitiveLog = (obj: SetRiskConfigurationRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetRiskConfigurationResponseFilterSensitiveLog = (obj: SetRiskConfigurationResponse): any => ({
  ...obj,
  ...(obj.RiskConfiguration && { RiskConfiguration: RiskConfigurationTypeFilterSensitiveLog(obj.RiskConfiguration) }),
});

/**
 * @internal
 */
export const SetUICustomizationRequestFilterSensitiveLog = (obj: SetUICustomizationRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetUICustomizationResponseFilterSensitiveLog = (obj: SetUICustomizationResponse): any => ({
  ...obj,
  ...(obj.UICustomization && { UICustomization: UICustomizationTypeFilterSensitiveLog(obj.UICustomization) }),
});

/**
 * @internal
 */
export const SetUserMFAPreferenceRequestFilterSensitiveLog = (obj: SetUserMFAPreferenceRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetUserSettingsRequestFilterSensitiveLog = (obj: SetUserSettingsRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SignUpRequestFilterSensitiveLog = (obj: SignUpRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.UserAttributes && {
    UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
  ...(obj.ValidationData && {
    ValidationData: obj.ValidationData.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAuthEventFeedbackRequestFilterSensitiveLog = (obj: UpdateAuthEventFeedbackRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.FeedbackToken && { FeedbackToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDeviceStatusRequestFilterSensitiveLog = (obj: UpdateDeviceStatusRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserAttributesRequestFilterSensitiveLog = (obj: UpdateUserAttributesRequest): any => ({
  ...obj,
  ...(obj.UserAttributes && {
    UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserPoolClientRequestFilterSensitiveLog = (obj: UpdateUserPoolClientRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserPoolClientResponseFilterSensitiveLog = (obj: UpdateUserPoolClientResponse): any => ({
  ...obj,
  ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientTypeFilterSensitiveLog(obj.UserPoolClient) }),
});

/**
 * @internal
 */
export const VerifySoftwareTokenRequestFilterSensitiveLog = (obj: VerifySoftwareTokenRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  ...(obj.Session && { Session: SENSITIVE_STRING }),
  ...(obj.UserCode && { UserCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifySoftwareTokenResponseFilterSensitiveLog = (obj: VerifySoftwareTokenResponse): any => ({
  ...obj,
  ...(obj.Session && { Session: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifyUserAttributeRequestFilterSensitiveLog = (obj: VerifyUserAttributeRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});
