export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

// export const getAnimeResponse = async(resource, query) => {
//     const cacheKey = `${resource}-${query}`;
//     const cachedData = sessionStorage.getItem(cacheKey);

//     if (cachedData) {
//         return JSON.parse(cachedData);
//     }

//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
//     const anime = await response.json();

//     // Simpan hasil ke sessionStorage
//     sessionStorage.setItem(cacheKey, JSON.stringify(anime));

//     return anime;
// };


export const getRecommendedAnimeResponse = async (resource, objectProperty) => {
    try {
        const response = await getAnimeResponse(resource);

        // Cek apakah response dan response.data ada
        if (!response || !response.data) {
            console.error("Respons tidak valid:", response);
            return []; // Kembalikan array kosong jika respons tidak valid
        }

        // Cek apakah response.data adalah array
        if (Array.isArray(response.data)) {
            return response.data.flatMap(item => item[objectProperty]);
        } else if (typeof response.data === 'object') {
            // Jika data adalah objek, mungkin Anda ingin mengambil nilai tertentu
            // Misalnya: return [response.data[objectProperty]];
            return [response.data];
        } else {
            // Jika data tidak berbentuk array atau objek yang dikenali
            console.error("Data tidak dikenali:", response.data);
            return []; // Kembalikan array kosong jika data tidak dikenali
        }
    } catch (error) {
        console.error("Terjadi error saat mengambil data:", error);
        return []; // Kembalikan array kosong jika terjadi error
    }
};



// export const getRecommendedAnimeRespons = async(resource, objectProperty) => {
//     const response = await getAnimeResponse(resource)
//     return response.data.flatMap(item => item[objectProperty])
// }

export const randomAnime = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const respone = {
        data: data.slice(first, last)
    }

    return respone
}