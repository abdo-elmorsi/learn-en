import { configureStore } from '@reduxjs/toolkit'
import ToggleMenuSlice from './slices/toggleSidebar'
import ConfigSlice from "./slices/config";
import fetchUserSlice from "./slices/auth";
import ToggleHeaderSlice from "./slices/toggle-header";
import CollocationsSlice from './slices/collocations';
import phrasalVerbSlice from './slices/phrasalVerb';

export default configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    reducer: {
        toggleMenu: ToggleMenuSlice,
        config: ConfigSlice,
        auth: fetchUserSlice,
        ToggleHeader: ToggleHeaderSlice,
        Collocations: CollocationsSlice,
        PhrasalVerb: phrasalVerbSlice
    },
})
