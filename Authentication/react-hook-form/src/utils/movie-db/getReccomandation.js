function getReccomandation() {
  const getReccomandationData = async (movieId) => {
    console.log(`Movie ID iin getrecc is ${movieId}`);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZkMzRhZWQ5MGVlZDU4MjI4NTFkZDFjNGIyOTA3MCIsInN1YiI6IjY1NDg3YjhhOTI0Y2U2MDEwMWY1MzMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uXa14BGj3_FUJLeWvvi0XQ1ZSuqS_LSHC0e03NwoUrs",
      },
    };

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US`,
      options
    ).then((response) => response.json());
    return data.results;
  };
  return { getReccomandationData };
}

export default getReccomandation;
