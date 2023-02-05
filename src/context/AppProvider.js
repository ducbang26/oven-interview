import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const API_URL = 'https://api.github.com/users/ducbang26/repos?sort=updated';
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setRepos(data);
                setLoading(false);
            });
    }, []);

  return (
    <AppContext.Provider
      value={{ repos, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};