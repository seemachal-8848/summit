import APP_CONFIG from '../../../interfaces/app-config-interface';
import { executeGETAPI } from '../../../utils/http-methods';

const getSchemesListAPI = async (appConfig: APP_CONFIG, requestParams: any, token: any): Promise<any> => {
    const additionalParams = { scheme: requestParams };
    // Use executeGETAPI to handle GET Request logic
    const response = await executeGETAPI(
        appConfig,
        'get-promotional-scheme-items-api',
        token,
        additionalParams // Pass additional parameters if needed
    );

    return response;
};

export default getSchemesListAPI;
