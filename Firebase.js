import { initializeApp } from 'firebase/app';
import 'firebase/auth';

import {
  developmentFirebaseConfig,
  productionFirebaseConfig,
} from './FirebaseConfig';

const env = 'dev';

export const app =
  env === 'dev'
    ? initializeApp(developmentFirebaseConfig)
    : initializeApp(productionFirebaseConfig);
