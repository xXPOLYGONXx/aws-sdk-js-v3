import {
  QuickSightClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../QuickSightClient";
import { UpdateUserRequest, UpdateUserResponse } from "../models/index";
import {
  deserializeAws_restJson1_1UpdateUserCommand,
  serializeAws_restJson1_1UpdateUserCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type UpdateUserCommandInput = UpdateUserRequest;
export type UpdateUserCommandOutput = UpdateUserResponse;

export class UpdateUserCommand extends $Command<
  UpdateUserCommandInput,
  UpdateUserCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserCommandInput, UpdateUserCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateUserCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateUserCommandOutput> {
    return deserializeAws_restJson1_1UpdateUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
