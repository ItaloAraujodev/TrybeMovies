const key = 'c2961477a1718f1c9d10112e20f4ff4f'
const endPoint = `https://api.themoviedb.org/3/movie/`
const imagensMovides = `https://image.tmdb.org/t/p/w500`;


const apiTopRated = async () => {
    const url = `${endPoint}top_rated?api_key=${key}&language=pt-br`
    const res = await fetch(url);
    const result = await res.json();
    return result
}

const apiPopular = async () => {
    const url = `${endPoint}popular?api_key=${key}&language=pt-br&page=1`
    const res = await fetch(url);
    const result = await res.json();
    return result
}

const apiDetails = async (id) => {
    const url = `${endPoint}${id}?api_key=${key}&language=pt-br`
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

const apiSearch = async (nome, page) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=${nome}&page=${page}&include_adult=false`
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

const apiElenco = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=pt-BR`
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

const getVideo = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=pt-BR`
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

const getImage = (path) => {
    const url = `${imagensMovides}/${path}`
    if(path === null || path === undefined){
        return 'https://via.placeholder.com/300x450'
    }
    return url;
} 

export { apiTopRated, apiPopular, apiDetails, apiSearch, apiElenco, getVideo, getImage }