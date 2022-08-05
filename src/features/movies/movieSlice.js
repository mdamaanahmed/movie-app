import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/movieApi'
import MovieApiKey from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const searchKeyword = 'harry'
    const res = await MovieApi.get(`?apikey=${MovieApiKey}&s=${searchKeyword}&type=movie`)
    return res.data
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async () => {
    const searchKeyword = 'friend'
    const res = await MovieApi.get(`?apikey=${MovieApiKey}&s=${searchKeyword}&type=series`)
    return res.data
})

export const fetchAsyncWithID = createAsyncThunk('shows/fetchAsyncWithID', async (id) => {
    // const searchKeyword = 'friend'
    const res = await MovieApi.get(`?apikey=${MovieApiKey}&i=${id}&plot=full`)
    return res.data
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        // addMovies: (state, { payload }) => {
        //     state.movies = payload
        // },
        removeSelectedIdData: (state) => {
            state.selectedMovieOrShow = {}
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : ()=>{
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload})=>{
            console.log('Fetched Successfully');
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected] : ()=>{
            console.log('Rejected');
        },
        [fetchAsyncShows.fulfilled] : (state, {payload})=>{
            console.log('Fetched Successfully');
            return {...state, shows: payload}
        },
        [fetchAsyncWithID.fulfilled] : (state, {payload})=>{
            console.log('Fetched Successfully');
            return {...state, selectedMovieOrShow: payload}
        },
    }
})

// export const { addMovies } = movieSlice.actions
export const { removeSelectedIdData } = movieSlice.actions
export const getAllMovies = (state) => state.moviesreducer.movies
export const getAllShows = (state) => state.moviesreducer.shows
export const getSingleData = (state) => state.moviesreducer.selectedMovieOrShow
export default movieSlice.reducer