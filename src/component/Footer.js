import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>CanYou Inc. &copy; 2022</div>
      <div className='footer_container footer_links'>
        <p>
          <a className='link' href='mailto:support@canyouapp.com'>
            Support
          </a>
        </p>
        <p>
          <Link className='link' to='/terms'>
            Terms
          </Link>
        </p>
        <p>
          <Link className='link' to='/privacy'>
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
