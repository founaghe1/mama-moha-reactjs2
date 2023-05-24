import 'bootstrap/dist/css/bootstrap.css';
import button  from '../../assets/images/Button.png';
import image1  from '../../assets/images/image1.png';
import image2  from '../../assets/images/image2.png';
import image3  from '../../assets/images/image3.png';
import image4  from '../../assets/images/image4.png';
import arrowLeft  from '../../assets/images/ArrowLeft.png';
import arrowRight  from '../../assets/images/ArrowRight.png';
import Heart from '../../assets/images/Heart.svg'
import troisbars from '../../assets/images/troisBars.png'

import './menuCompo.css';

export const Menu = () =>{
    return(
        <>
        <div className="menu pt-5">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12 ">
                        <div className='row row1 m-3 rounded-3'>
                            <div className='col-lg-6 col-md-12 col-sm-12  pt-5'>
                                <p className='text-warning ps-md-4'>Create MetroVerse Genesis</p>
                                <p className='mt-3 ps-md-4'>physical claim for issue #1 now live. please check that the token is available for claim via website</p>
                                <img src={button} alt="btn" className='text-start' />
                                <div className='ms-md-4 d-flex justify-content-around items mb-sm-3'>
                                    <div className='text-center item1 px-2'>
                                        <p>24.8K</p>
                                        <p>Items</p>
                                    </div>
                                    <div className='text-center item2 px-2'>
                                        <p>4.1k</p>
                                        <p>Owners</p>
                                    </div>
                                    <div className='text-center item3 px-2'>
                                        <p>0.221</p>
                                        <p>Floor Price</p>
                                    </div>
                                    <div className='text-center item4'>
                                        <p>43.1K</p>
                                        <p>Volume Traded</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 position-relative '>
                                <div className='arrows d-flex justify-content-end mt-3 me-3'>
                                    <img src={arrowLeft} alt="img" />
                                    <img src={arrowRight} alt="img" />
                                </div>
                                <div className=''>
                                    <img src={image2} alt="img" className='position-absolute positionImg mt-lg-3 w-100'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pe-md-5  colNfts ">
                        <h4>New NFTs</h4>
                        <div className='d-flex nfts bg-light pe-5  pt-3 ps-3 rounded-3 align-items-center'>
                            <p>
                                <img src={image1} alt="" />
                            </p>
                            <div className='ms-2 me-md-3 w-100'>
                                <p className='text1'>Metroverse Genesis</p>
                                <p className='text2 fw-bold'>Block #1460</p>
                                <p className='text3'>Owned <span className='text-warning'> by BabyKee</span> </p>
                                <p className='d-flex justify-content-between '><span> <img src={Heart} alt="" />  1K</span>   <span> <img src={troisbars} alt="" />   21</span></p>
                            </div>
                        </div>

                        <div className='d-flex nfts bg-light pe-5  pt-3 ps-3 my-2 rounded-3 align-items-center'>
                            <p>
                                <img src={image3} alt="" />
                            </p>
                            <div className='ms-2 me-md-3 w-100'>
                                <p className='text1'>Metroverse Genesis</p>
                                <p className='text2 fw-bold'>Block #1460</p>
                                <p className='text3'>Owned <span className='text-warning'> by BabyKee</span> </p>
                                <p className='d-flex justify-content-between'><span> <img src={Heart} alt="" />  1K</span>   <span> <img src={troisbars} alt="" />   21</span></p>
                            </div>
                        </div>
                        <div className='d-flex nfts bg-light pe-5  pt-3 ps-3 rounded-3 align-items-center'>
                            <p>
                                <img src={image4} alt="" />
                            </p>
                            <div className='ms-2 me-md-3 w-100'>
                                <p className='text1'>Metroverse Genesis</p>
                                <p className='text2 fw-bold'>Block #1460</p>
                                <p className='text3'>Owned <span className='text-warning'> by BabyKee</span> </p>
                                <p className='d-flex justify-content-between'><span> <img src={Heart} alt="" />  1K</span>   <span> <img src={troisbars} alt="" />   21</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row 2 */}
                <div className="row w-auto">
                    <div className="col-lg-8 col-md-6 col-sm-12 w-auto">
                        <h1>Row2 Colone 1</h1>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 w-auto">
                        <h1>Row2 Colone 2</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};