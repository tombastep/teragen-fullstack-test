import cors from 'cors';
import { corsDomains } from '../env';
const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        if (origin && (corsDomains === null || corsDomains === void 0 ? void 0 : corsDomains.indexOf(origin)) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error());
        }
    },
};
export default cors(corsOptions);
//# sourceMappingURL=cors.js.map