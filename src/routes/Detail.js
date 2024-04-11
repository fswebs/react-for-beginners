import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    // useParams()는 현재 페이지의 동적 URL parameter 값을 추출한다.
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(id);
  return <h1>Detail</h1>;
}

export default Detail;
