import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GithubProfiles = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [username, setusername] = useState("");
  const [repos, setrepos] = useState([]);
  const [user, setuser] = useState("");
  const APIURL = "https://api.github.com/users/";
  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(false);
      setusername("");
      setrepos([]);
      const { data } = await axios.get(APIURL + username);
      const res = await axios(APIURL + username + "/repos?sort=created");
      setLoading(false);
      setuser(data);
      setrepos(res.data);
    } catch (error) {
      setLoading(false);
      setError(true);
      setuser("");
      setusername("");
      setrepos([]);
    }
  };

  console.log(user);
  return (
    <>
      <div className="github-profiles">
        <form
          class="user-form"
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            fetchProfile();
          }}
        >
          <input
            type="text"
            id="search"
            placeholder="Search a Github User"
            onChange={(e) => {
              e.preventDefault();
              setusername(e.target.value);
            }}
            value={username}
          />
        </form>

        <main id="main">
          {loading && <h1>Loading...</h1>}
          {error && (
            <div class="card">
              <h1>No profile with this username</h1>
            </div>
          )}
          {user && (
            <div class="card">
              <div>
                <img src={user.avatar_url} alt={user.name} class="avatar" />
              </div>
              <div class="user-info">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                <ul>
                  <li>
                    {user.followers} <strong>Followers</strong>
                  </li>
                  <li>
                    {user.following} <strong>Following</strong>
                  </li>
                  <li>
                    {user.public_repos} <strong>Repos</strong>
                  </li>
                </ul>

                <div id="repos">
                  {repos &&
                    repos.map((repo) => (
                      <a
                        className="repo"
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {repo.name}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Link to="/">
        <button className="back">
          <i class="fas fa-arrow-circle-left"></i>
        </button>
      </Link>
    </>
  );
};

export default GithubProfiles;
