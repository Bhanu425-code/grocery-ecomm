import React, { createContext } from 'react';

export const downloadApp = createContext();
const DownloadOurApp = () => {

    return (
        <downloadApp.Provider value={true}>
            
        </downloadApp.Provider>
    );
};

// Stores Link_buttons to download the app
const AppStores = () => (
    <div className='flex items-center xl:space-x-5 lg:space-x-4 space-x-4'>
    </div>
)
export default DownloadOurApp;