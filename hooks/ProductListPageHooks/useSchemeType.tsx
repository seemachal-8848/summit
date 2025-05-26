import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { CONSTANTS } from '../../services/config/app-config';
import useHandleStateUpdate from '../GeneralHooks/handle-state-update-hook';
import { useRouter } from 'next/router';
import getSchemes from '../../services/api/product-listing-page-apis/get-schemes';

const useSchemeType = () => {
    const { isLoading, setIsLoading, errorMessage, setErrMessage }: any = useHandleStateUpdate();
    const { SUMMIT_APP_CONFIG }: any = CONSTANTS;
    const [schemeType, setSchemeType] = useState<any>('');
    const tokenFromStore: any = useSelector(get_access_token);

    const fetchSchemes: any = async () => {
        let SchemeData: any;
        setIsLoading(true);
        try {
            SchemeData = await getSchemes(SUMMIT_APP_CONFIG, tokenFromStore.token);
            if (SchemeData?.status === 200 && SchemeData?.data?.message?.msg === 'success') {
                setSchemeType(SchemeData?.data?.message?.data[0]?.name);
            } else {
                setErrMessage(SchemeData?.data?.message?.error);
            }
        } catch (error) {
            setErrMessage(SchemeData?.data?.message?.error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSchemes();
    }, []);

    return {
        schemeType,
        isLoading,
        errorMessage,

    };
};

export default useSchemeType;
