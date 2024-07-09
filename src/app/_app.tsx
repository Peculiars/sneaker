import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "@/store/store";
import '@fontsource/satoshi/400.css'; // Replace with the specific weights you want to use
import '@fontsource/satoshi/500.css';
import '@fontsource/satoshi/700.css';

const MyApp = ({Component, pageProps}:AppProps) =>{
    const {store, props} = wrapper.useWrappedStore(pageProps);

    return(
        <Provider store={store}>
            <Component {...props}/>
        </Provider>
    )
}

export default MyApp