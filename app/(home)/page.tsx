import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
// 컴포넌트 안에 없어도 된다구 오호 ?
async function getMovies() {
  // 트릭 멈추게하는
  // await new Promise((resolve)=>setTimeout(resolve, 1000));
  // 아래 3줄 코드와 같은 것
  // return fetch(URL).then(res => res.json());
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  // 기존 react에서 했던 방식 - 240222
  // const [isLoading, setIsLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const getMovies = async ()=>{
  //   const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
  //   const json = await response.json();
  //   setMovies(json);
  //   setIsLoading(false);
  // }

  // useEffect(()=>{
  //   getMovies();
  // },[])

  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {/* <h1>Hello!</h1> */}
      {/* {JSON.stringify(movies)} */}
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
