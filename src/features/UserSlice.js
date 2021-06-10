import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name : 'user',
    initialState : {
        searchInput : 'tech' ,
        movieData : null
    },
    reducers : {
        setSearchInput : (state,action) =>{
            state.searchInput = action.payload;
        },
        setMovieData : (state,action) =>{
            state.movieData = action.payload;
        },
    },
});

export const {setSearchInput , setMovieData} = userSlice.actions;

export const selectSearchInput = (state) => state.user.searchInput;
export const selectMovieData = (state) => state.user.movieData;

export default userSlice.reducer;