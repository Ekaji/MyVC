import { getFunctions , httpsCallable} from 'firebase/functions';
import { app } from "./Firebase";

export const functions = getFunctions(app);

export const removeBackgroundHTTPCallable = httpsCallable(functions, 'removeBackground');