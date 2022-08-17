import cors from 'cors';
import { corsDomains } from './environment';

type CorsOrigin = string | undefined;
type CorsCallback = (...args: any[]) => void;

const corsOptions = {
    credentials: true,
    origin: (origin: CorsOrigin, callback: CorsCallback) => {
        if (origin && corsDomains?.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error());
        }
    },
};

export default cors(corsOptions);
