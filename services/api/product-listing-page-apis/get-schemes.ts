import APP_CONFIG from '../../../interfaces/app-config-interface';
import { executeGETAPI } from '../../../utils/http-methods';

const getSchemes = async (appConfig: APP_CONFIG, token: any): Promise<any> => {
    const additionalParams = {};
    // Use executeGETAPI to handle GET Request logic
    const response = await executeGETAPI(
        appConfig,
        'get-promotional-scheme-api',
        token,
        additionalParams // Pass additional parameters if needed
    );

    return response;
};

export default getSchemes;
