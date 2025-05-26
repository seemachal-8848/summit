import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { CONSTANTS } from '../../services/config/app-config';
import useHandleStateUpdate from '../GeneralHooks/handle-state-update-hook';
import getSchemesListAPI from '../../services/api/product-listing-page-apis/get-schemes-list-api';
import { useRouter } from 'next/router';

const useSchemesList = (schemeType: any) => {
    const [itemTotalCount, setItemTotalCount] = useState<number>(0);
    const [schemesList, setSchemesList] = useState<any>([]);
    const { isLoading, setIsLoading, errorMessage, setErrMessage }: any = useHandleStateUpdate();
    const { SUMMIT_APP_CONFIG }: any = CONSTANTS;
    const tokenFromStore: any = useSelector(get_access_token);
    const router = useRouter();
    const { query }: any = router;

    useEffect(() => {
        if (schemeType) {
            fetchSchemesList();
        }
    }, [schemeType]);

    const fetchSchemesList: any = async () => {
        let SchemesList: any;
        setIsLoading(true);
        try {
            SchemesList = await getSchemesListAPI(SUMMIT_APP_CONFIG, schemeType, tokenFromStore.token);
            if (SchemesList?.status === 200 && SchemesList?.data?.message?.msg === 'success') {
                setSchemesList(SchemesList?.data?.message?.data);
                setItemTotalCount(SchemesList?.data?.message?.total_count);
            } else {
                setErrMessage(SchemesList?.data?.message?.error);
            }
        } catch (error) {
            setErrMessage(SchemesList?.data?.message?.error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSchemesList();
    }, []);

    const handlePaginationBtn = (pageNo: any) => {
        router.push({
            query: { ...query, page: pageNo + 1 },
        });
    };

    return {
        schemesList,
        itemTotalCount,
        isLoading,
        errorMessage,
        handlePaginationBtn,
        query
    };
};

export default useSchemesList;
