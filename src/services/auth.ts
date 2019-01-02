import * as CognitoExpress from 'cognito-express';
import { config } from './config';

export const auth = new CognitoExpress({
  cognitoUserPoolId: config.cognitoUserPoolId,
  region: config.cognitoRegion,
  tokenExpiration: config.tokenExpiration, // Up to default expiration of 1 hour (3600000 ms)
  tokenUse: 'access', // Possible Values: access | id
});
