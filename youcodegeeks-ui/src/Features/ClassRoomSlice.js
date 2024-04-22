import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "@/Api/axios.js";

const initialState = {
    classRooms: [],
    loading: false,
    error: "",
    response: ""
}
export const getClassrooms = createAsyncThunk(
    "classRooms/get",
    async (rejectWithValue) => {
        try {
            const response = await axiosClient.get("helpers/classrooms");
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const createClassRooms = createAsyncThunk(
    "classRooms/create",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.post("classrooms", data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
export const updateClassRoom = createAsyncThunk(
    "classRooms/update",
    async (data, rejectWithValue) => {
        try {
            const response = await axiosClient.patch(`classrooms/${data.slug}`, data.data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const deleteClassRoom = createAsyncThunk(
    "classRooms/delete",
    async (slug, rejectWithValue) => {
        try {
            await axiosClient.delete(`classrooms/${slug}`);
            return slug;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
const classRoomsSlice = createSlice({
    name: "classrooms",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getClassrooms.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getClassrooms.fulfilled, (state, action) => {
                console.log("fulfilled");
                state.loading = false;
                state.classRooms = action.payload;
                state.error = "";
                state.response = "";
            })
            .addCase(getClassrooms.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(createClassRooms.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(createClassRooms.fulfilled, (state, action) => {
                console.log("fulfilled");
                state.loading = false;
                state.classRooms = [...state.classRooms, action.payload];
                state.error = "";
                state.response = "";
            })
            .addCase(createClassRooms.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(updateClassRoom.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(updateClassRoom.fulfilled, (state, action) => {
                const {id, name, slug, campusId, schoolYear} = action.payload;
                state.loading = false;
                state.classRooms = state.classRooms.map(classRoom => {
                    if (classRoom.id !== id) {
                        return classRoom;
                    }
                    return {
                        ...classRoom,
                        name: name,
                        slug: slug,
                        campusId: campusId,
                        schoolYear: schoolYear,
                    };
                });
                state.error = "";
                state.response = "";
            })
            .addCase(updateClassRoom.rejected, (state, action) => {
                console.log("classroom update rejected");
                state.loading = false;
                state.error = "Incorrect Information";
                state.response = action.payload;
            });
        builder
            .addCase(deleteClassRoom.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(deleteClassRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.classRooms = state.classRooms.filter(classRoom => classRoom.slug !== action.payload),
                    state.error = "";
                state.response = "";
            })
            .addCase(deleteClassRoom.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = "operation rejected";
                state.response = action.payload;
            })
    }
})
export default classRoomsSlice.reducer
