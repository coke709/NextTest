import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// 데이터 패치를 같이 하는 방법 , 동시에 실행되게 하지만 각자의 컴포넌트로 이동했음.
// async function getMovie(id: string) {
//   console.log(`Fetching movies: ${Date.now()}`)
//   await new Promise((resolve)=>setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`)
//   await new Promise((resolve)=>setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // const [movie] = await Promise.all([getMovie(id),getVideos(id)]);
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
