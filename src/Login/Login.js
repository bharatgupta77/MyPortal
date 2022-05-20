import './login.css';
import logo from '../images/Hsbc_Logo/hsbc_logo3.png'
import center_img from '../images/background_images/center_image.png'


function Login() {
  return (
    <div className='container cont-parent border border-2 rounded'>
        <div className="row row1">
            <div className="col col1 p-5 py-3 d-flex flex-column justify-content-start align-items-center">
                <marquee><h4 className="mt-3 mb-5">Welcome</h4></marquee>
                <img className="mt-5 mb-5 img2" src={center_img}></img>
                <img className="img1 mt-4" src={logo}></img>
                <h4>HSBC</h4>
                <span className="line mx-3 mt-2" style={{width:"90%"}}>
                    <p style={{borderBottom : "1px solid rgba(211, 211, 211, 0.7)"}} className="mt-3"><span style={{backgroundColor : "rgba(255, 255, 255, .8)"}}>Together we thrive</span></p>
                </span>
            </div>

            <div className="col col2 p-5 py-3">
                <h4 className="text-center text-light mt-4">LOGIN</h4>
                <span className="line">
                    <p className="text-light mt-3 ms-4"><span>Enter your credentials</span></p>
                </span>​
                <form className="px-5 pt-2 pb-2"> 
                    <div className="mb-3">
                        <label for="username" className="form-label text-light">Username</label>
                        <input type="number" placeholder='Enter your username' className="form-control" id="username"/>
                    </div>
                    <div class="mb-5">
                        <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                        <input type="password" placeholder='Enter your password' className="form-control" id="exampleInputPassword1"/>
                    </div>
                  <button type="submit" className="btn btn1 btn-dark ">Submit</button>
                </form>
            </div>        
        </div>   
    </div>  
  );
}

export default Login;
