import React from 'react';

const RepoCard = ({ repo: { svn_url, name, description, visibility, pushed_at, owner } }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <a target='_blank' href={svn_url} rel="noreferrer">{name}</a>
          <span className="tag">{visibility}</span>
        </div>
        <p>{description}</p>
        <div className="user">
          <img src={owner?.avatar_url} alt="user" />
          <div className="user-info">
            <h5>{owner?.login}</h5>
            <small>{pushed_at}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;