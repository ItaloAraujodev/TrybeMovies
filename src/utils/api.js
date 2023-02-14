const key = 'c2961477a1718f1c9d10112e20f4ff4f'
const endPoint = `https://api.themoviedb.org/3/movie/`
const imagensMovides = `https://image.tmdb.org/t/p/`;


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
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=${nome}&include_adult=false`
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

const getImage = (path, size = 'w300') => {
    const url = `${imagensMovides}/${size}/${path}`
    return url;
} 

const getResenhas = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=pt-BR`
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

const getPalavrasChaves = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${key}`
    const res = await fetch(url);
    const result = await res.json();
    return result;
} 

const getAvaliaçoes = async (id) => {
    const url = `https://api.themoviedb.org/3/review/${id}?api_key=${key}`
    const res = await fetch(url);
    const result = await res.json();
    return result;
} 

const getRecomendations = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=pt-BR&page=1`
    const res = await fetch(url);
    const result = await res.json();
    return result;
} 



export { apiTopRated, apiPopular, apiDetails, apiSearch, apiElenco, getVideo, getImage, getResenhas, getPalavrasChaves , getRecomendations, getAvaliaçoes}