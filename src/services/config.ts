import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
  tokenExpiration: number;
  cognitoRegion: string;
  cognitoUserPoolId: string;
}

const config: IConfig = {
  cognitoRegion: process.env.COGNITO_REGION || 'us-east-1',
  cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
  tokenExpiration: +process.env.PORT || 30000,
};

export { config };
