import { CONSTANTS } from '../services/config/app-config';
import { ServerDataTypes } from '../interfaces/meta-data-interface';
import getPageMetaData from '../utils/fetch-page-meta-deta';
import PageMetaData from '../components/PageMetaData';
import RegisterComponent from '../components/Auth/RegisterComponentWithGST';
import SchemeMaster from '../components/SchemeComponent/MasterComponent';

const Schemes = () => {
    return (
        <>
            <SchemeMaster />
        </>
    );
};

export default Schemes;
