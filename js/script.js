console.log("Hello There!!");

const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "5CiFTGRXXucYTqIzIabCvJA-udvo0UnlzJKyFOQUh-cmo0P8X5");
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "8d95029b-93c4-47f8-aff1-b5be77d700d9");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

async function fetchData() {
    try {
        const response = await fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/get-born-by-date?month=07&date=3", requestOptions);
        const result = await response.text();
        MineData(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

function MineData(dataFromApi) {
    console.log(dataFromApi);
    try {
        let temp = JSON.parse(dataFromApi);

        // Check if `temp.movie` is an array and has at least one element
        if (Array.isArray(temp.movie) && temp.movie.length > 0) {
            const movieList = temp.movie[0].list;

            // Check if `movieList` is an array and has at least three elements
            if (Array.isArray(movieList) && movieList.length > 2) {
                console.log(movieList[2]);
            } else {
                console.error('Error: `list` is either not an array or does not have enough elements');
            }
        }
    } catch (error) {
        console.error('Error parsing data:', error);
    }
}
