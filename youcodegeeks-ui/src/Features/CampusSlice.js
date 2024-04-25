import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";
import {formDataConfig} from "@/Api/Config.js";

const initialState = {
    campus: [], loading: false, error: "", response: ""
}

export const createCampus = createAsyncThunk("campus/create", async (data, rejectWithValue) => {
    try {
        const response = await axiosClient.post("campuses", data);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.return.data.errors);
    }
})
export const updateCampus = createAsyncThunk("campus/update", async (data, rejectWithValue) => {
    try {
        const response = await axiosClient.patch(`campuses/${data.slug}`, data.formData, formDataConfig);
        return response.data.data;
    } catch (error) {
        console.log(error.response.data.errors);
        return rejectWithValue(error.response.data.errors);
    }
});
export const deleteCampus = createAsyncThunk("campus/delete", async (slug, rejectWithValue) => {
    try {
        axiosClient.delete("campuses/" + slug);
        return slug;
    }catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const getCampus = createAsyncThunk("campus/get", async (rejectWithValue) => {
    try {
        const response = await axiosClient.get("campuses");
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

const campusSlice = createSlice({
    name: "campus", initialState, extraReducers: (builder) => {
        builder
            .addCase(getCampus.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getCampus.fulfilled, (state, action) => {
                state.loading = false;
                state.campus = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getCampus.rejected, (state, action) => {
                console.log("get campus rejected");
                console.log(action.payload)
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(createCampus.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(createCampus.fulfilled, (state, action) => {
                state.loading = false;
                state.campus = [...state.campus, action.payload];
                state.error = "";
                state.response = "";
            })
            .addCase(createCampus.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(deleteCampus.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(deleteCampus.fulfilled, (state, action) => {
                state.loading = false;
                state.campus = state.campus.filter(c => c.slug !== action.payload),
                    state.error = "";
                state.response = "";
            })
            .addCase(deleteCampus.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "operation rejected";
                state.response = action.payload;
            })
    }
})
export default campusSlice.reducer
