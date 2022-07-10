import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';

function NotFoundPage() {

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  }
  return (
    <div>
        <h1>404 - PAGE NOT FOUND</h1>
        <button onClick={ () => navigateTo('/')}>
          Go to Home 
        </button>
    </div>
  )
}

export default NotFoundPage;
