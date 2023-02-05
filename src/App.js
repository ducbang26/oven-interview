import { useContext, useEffect, useState } from "react";
import './App.scss';
import Loading from "./components/Loading/Loading";
import SearchIcon from './assets/search.svg';
import RepoCard from "./components/Card/RepoCard";
import { AppContext } from "./context/AppProvider";
import LoginCard from "./components/Login/LoginCard";

const App = () => {
  const { repos, loading } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");

  const userInfo = localStorage.getItem('userInfo');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="app">
        { userInfo 
        ? (
          <>
            <h1>Oven Interview</h1>
            <span 
              className="logoutTag" 
              onClick={() => {
                localStorage.removeItem("userInfo");
                window.location.reload();
              }}
            >
              Đăng xuất
            </span>
            <div className="search">
              <input
                type="text"
                placeholder="Nhập tên kho chứa ở đây"
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
              <img src={SearchIcon} alt="search" onClick={()=>{}}/>
            </div>
            {loading ? <Loading /> : <>{repos?.length > 0 ? (
              <div className="container">
                {repos.filter((repo) => {
                    return searchTerm.toLowerCase() === ''
                      ? repo
                      : repo?.full_name.toLowerCase().includes(searchTerm);
                  }).map((repo) => (
                  <RepoCard key={repo?.id} repo={repo} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>Không tìm thấy kho chứa</h2>
              </div>
            )}</>}
          </>
        )
        : <LoginCard/>
        }
    </div>
  );
}

export default App;