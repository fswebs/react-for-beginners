// https://reactrouter.com/en/6.22.3/start/overview
// BrowerRouter의 경우 http://localhost:3000, http://localhost:3000/movie
// link는 브라우저 새로고침 없이 다른 페이지로 이동시켜준다.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Detail from "./routes/Detail";

// Movie App
// https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
// 페이지 전환 방법

function App() {
  return (
    <Router>
      {/* Routes는 Route를 찾아 한 번에 하나의 component만 rendering 한다. */}
      {/* Route는 http://localhost:3000/movies/123 에서 movies/123을 의미한다. */}
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/hello`} element={<h1>Hello</h1>} />
        {/* :변수명 */}
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
        {/* Home Route rendering */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
