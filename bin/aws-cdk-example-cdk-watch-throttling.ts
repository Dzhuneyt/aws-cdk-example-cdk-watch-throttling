#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AwsCdkExampleCdkWatchThrottlingStack } from "../lib/aws-cdk-example-cdk-watch-throttling-stack";

const app = new cdk.App();
new AwsCdkExampleCdkWatchThrottlingStack(
  app,
  "AwsCdkExampleCdkWatchThrottlingStack",
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
  }
);
