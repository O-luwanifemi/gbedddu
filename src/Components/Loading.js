import loaderImg from '../Assets/Images/1494.gif';

const Loader = () => {
  return (
    <div className="loader">
      <h3>Please hang on</h3>
      
      <img src={loaderImg} alt="Spinner indicating page loading" />
    </div>
  )
}

export default Loader;
