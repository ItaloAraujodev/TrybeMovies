const key = 'c2961477a1718f1c9d10112e20f4ff4f'
const endPoint = `https://api.themoviedb.org/3/movie/`


const apiTopRated = async () => {
    const url = `${endPoint}top_rated?api_key=${key}&language=pt-br`
    const res = await fetch(url);
    const result = await res.json();
    return result
}

export default apiTopRated