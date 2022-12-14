import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {apiGoogleConnect} from '../api'
import _ from 'lodash'
import {AddressMap} from '../sharedComponent/maps/types'

interface AppState {
    loading: boolean;
    error: boolean;
    mapOnlyPoint: AddressMap[];
    citys: string[]
}

interface MapResponse {
    valueRanges: [
        {
            range: string,
            majorDimension: string,
            values: string[]
        }
    ]
}

const initialState: AppState = {
    error: false,
    loading: false,
    mapOnlyPoint: [],
    citys: []
}

const keys = [
    'name', 'country', 'city', 'franshes', 'lat', 'lng', 'adderess', 'workTime', 'email', 'phone'
]

export const getAddressesSto = createAsyncThunk(
    'app/getAddressesSto',
    async () => {
        const path = `/values:batchGet?ranges=C12:L3&majorDimension=ROWS&key=${process.env.REACT_APP_GOOGLE_SHEET_KEY}`
        try {
            const res = await apiGoogleConnect().get<MapResponse>(path)
            const result = await res.data.valueRanges[0].values

            const data = result.map((item: string, index: number) => {
                const object: any = new Object()
                for (let i = 0; i < item.length; i++) {
                    object[keys[i]] = item[i]
                }
                return object
            })

            const uniqueArr = data.map((item: AddressMap) => item.city)
            const citys = _.uniq(uniqueArr)
            return {data, citys}
        } catch (e: any) {
            console.log(e.message)
        }
    }
)

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        disabledError: (state) => {
            state.error = false
        }
    },
    extraReducers: builder => {
        builder.addCase(getAddressesSto.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(getAddressesSto.fulfilled, (state, action: any) => {
            state.loading = false;
            state.mapOnlyPoint = action.payload.data;
            state.citys = action.payload.citys
        });
        builder.addCase(getAddressesSto.rejected, (state) => {
            state.loading = false;
            state.error = true
        })
    }
});

export const {disabledError} = appSlice.actions

export default appSlice.reducer
