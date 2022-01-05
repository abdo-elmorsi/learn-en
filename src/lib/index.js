import { configureStore } from '@reduxjs/toolkit'
import ToggleMenuSlice from './slices/toggleSidebar'
import ConfigSlice from "./slices/config";
import ToggleAddMarkerRoutingMachineSlice from "./slices/toggleAddMarkerRoutingMachine";
import fetchUserSlice from "./slices/auth";
import ToggleHeaderSlice from "./slices/toggle-header";
import CollocationsSlice from './slices/collocations';

export default configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    reducer: {
        toggleMenu: ToggleMenuSlice,
        config: ConfigSlice,
        auth: fetchUserSlice,
        toggleAddMarkerRoutingMachine: ToggleAddMarkerRoutingMachineSlice,
        ToggleHeader: ToggleHeaderSlice,
        Collocations: CollocationsSlice
    },
})
