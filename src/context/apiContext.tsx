import { Chain, Network, Wallet, API, MetadataField } from 'mintbase'
import {
    createContext,
    ReactNode,
    useEffect,
    useState,
    useContext,
} from 'react'

import { useWallet } from './walletContext'

// @ts-ignore
export const ApiContext = createContext<any>({ userData: {}, loaded: false, });

// @ts-ignore: Parameter 'props' implicitly has an 'any' type..
export const ApiProvider = (props) => {
    const { network, chain, apiKey, children } = props
    const [userData, setUserData] = useState({});
    const { wallet, isConnected, details } = useWallet();
    const [loaded, load] = useState(false);
    const [store, setStore] = useState();


    const getStores = async () => {
        if (!loaded) return;
        try {
            //@ts-ignore
            let payload = await userData.fetchAccount(details.accountId);
            if (payload.error) {
                throw (payload.error);
            } else {
                return payload.data;
            }
        } catch (error) {
            console.log(error);
        }
    }

// @ts-ignore: Parameter 'props' implicitly has an 'any' type..
    async function mintNFT(coverImage, title, description, {amount, store, royalties, split, category}) {
        if (!wallet || !wallet.minter) return
        if (!coverImage) return

        try {
            const { data: fileUploadResult, error: fileError } = await wallet.minter.uploadField(MetadataField.Media, coverImage);

            if (fileError) {
                console.error(fileError);
                return
            }

            let isSet = wallet.minter.setMetadata({
                title: title,
                description: description,
            })

            if (isSet) return false;

            return await wallet.mint(amount, store, royalties, split, category);
        } catch (error) {
            console.log(error);
        }
    }



    const initAPI = async () => {
        try {
            const api = await new API({
                // @ts-ignore: Object is possibly 'null'.
                apiBaseUrl: wallet.api.apiBaseUrl,
                apiKey: apiKey,
                // @ts-ignore: Object is possibly 'null'.
                constants: wallet.constants,
            })

            setUserData(api);
            load(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!isConnected) return;
        initAPI();
    }, [isConnected])

    return (
        <ApiContext.Provider value={{ userData, loaded, getStores, mintNFT }}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext);
