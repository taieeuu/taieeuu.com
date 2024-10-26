import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-yellow-300 inline-block px-4 py-2">hi, i'm Matt</h1>
        <p className="text-xl mb-8">:)</p>
        <div className="mt-8">
          <p className="text-lg">
            My Dosc
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="https://github.com/taieeuu" className="text-2xl hover:text-gray-600" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/chungmin-tai-bbb2b32b2/" className="text-2xl hover:text-gray-600" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="mt-12">
          <p>Tai ChungMin | taieeuu@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
