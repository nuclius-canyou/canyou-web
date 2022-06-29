import AppImage from '../assets/app.png'
import Play from '../assets/play.png'
import Apple from '../assets/apple.png'

const Landing = () => {
  return (
    <div className='landing_container'>
      <div className='landing_content'>
        <img src={AppImage} alt='app image' />
      </div>
      <div className='landing_content'>
        <h1>Try CanYou.</h1>
        <h2>Less Texts. More Tasks.</h2>
        <div className='app_store'>
          <img src={Play} alt='Google Play' />
          <img src={Apple} alt='Apple Store' />
        </div>
      </div>
    </div>
  )
}

export default Landing
