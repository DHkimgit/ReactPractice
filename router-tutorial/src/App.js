import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => { 
  return(
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path='/profiles/*' element={<Profiles/>} />
        <Route path='/history' element={<HistorySample/>} />
      </Routes>
      
    </div>
  );
 };

export default App;
// https://velog.io/@katej927/Jest-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-ReactDOM.render-no-longer-supported-in-React-18
// https://velog.io/@ryu_jm/%EC%98%A4%EB%A5%98%ED%95%B4%EA%B2%B0-Outlet-with-a-null-value-by-default-resulting-in-an-empty-page
// 책으로 하면 오류가 나온다. 바뀌었나보다 reactDOM이 없어졌고, 라우트는 <Routes>로 감싸줘야 하며 라우트에서 component 대신 element를 써야 하는 듯 하다.