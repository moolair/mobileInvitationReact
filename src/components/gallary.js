import yjbn1 from '../img/YJBN-wedding/yjbn1.jpeg';
import yjbn2 from '../img/YJBN-wedding/yjbn2.jpeg';
import yjbn3 from '../img/YJBN-wedding/yjbn3.jpeg';
import yjbn4 from '../img/YJBN-wedding/yjbn4.jpeg';
import yjbn5 from '../img/YJBN-wedding/yjbn5.jpeg';
import yjbn6 from '../img/YJBN-wedding/yjbn6.jpeg';
import yjbn7 from '../img/YJBN-wedding/yjbn7.jpeg';
import yjbn8 from '../img/YJBN-wedding/yjbn8.jpeg';
import yjbn9 from '../img/YJBN-wedding/yjbn9.jpeg';
import yjbn10 from '../img/YJBN-wedding/yjbn10.jpeg';

function Gallery() {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h3>Gallery</h3>
                    </div>
                </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="0" />
                    <img id="ourImg" src={yjbn2} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="1" />
                    {/* </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal"> */}
                    <img id="ourImg" src={yjbn3} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="2" />
                    <img id="ourImg" src={yjbn4} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="3" />
                    {/* </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal"> */}
                    <img id="ourImg" src={yjbn5} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="4" />
                    <img id="ourImg" src={yjbn6} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="5" />
                    {/* </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal"> */}
                    <img id="ourImg" src={yjbn7} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="6" />
                    <img id="ourImg" src={yjbn8} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="7" />
                    {/* </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal"> */}
                    <img id="ourImg" src={yjbn9} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="8" />
                    <img id="ourImg" src={yjbn10} alt="" className="col-6 center-block d-block mx-auto pb-4"
                        data-target="#carouselExample" data-slide-to="9" />
                </div>
            </div>

            {/* image modal */}
            <div className="modal fade" id="imgModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        {/* <!-- <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div> --> */}
                        <div className="modal-body">
                            <div id="carouselExample" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn2} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn3} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn4} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn5} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn6} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn7} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn8} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn9} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn10} />
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div> --> */}

                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h3>Movie</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;