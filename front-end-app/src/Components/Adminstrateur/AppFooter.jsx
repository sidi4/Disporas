import Typography from 'antd/es/typography/Typography'

import React from 'react'
import { Link } from 'react-router-dom';

function AppFooter() {
  return (
    <footer class="mt-auto text-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span class="fw-bold">Copyright &copy;</span> Dispora Website 2023
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
