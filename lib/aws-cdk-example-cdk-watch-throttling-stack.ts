import * as cdk from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";
import * as path from "path";

export class AwsCdkExampleCdkWatchThrottlingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    for (let i = 0; i < 100; i++) {
      new NodejsFunction(this, `NodejsFunction${i}`, {
        entry: path.resolve(__dirname, "lambda.ts"),
        logRetention: RetentionDays.ONE_DAY,
      });
    }
  }
}
