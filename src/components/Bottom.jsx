import React from 'react';

const Bottom = () => {
  return (
    <>
      <footer>
        <p>
          <span>Built by </span>
          <a href="https://github.com/rajat-porwal">Rajat Porwal</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/rajatporwal/">LinkedIn</a>
        </p>
      </footer>
      <style jsx>{`
        footer {
          background-color: #2c3e50;
          color: #ffffff;
          padding: 20px;
          text-align: center;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
        }
        
        footer p {
          margin: 0;
        }
        
        footer a {
          margin-left: 3px;
          margin-right: 3px;
          color: #3498db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        footer a:hover {
          color: #2980b9;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Bottom;
