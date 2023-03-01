import yjbn1 from '../img/YJBN-wedding/yjbn1.JPG';

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
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="0" />
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="1" />
                </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="2" />
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="3" />
                </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="4" />
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="5" />
                </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="6" />
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="7" />
                </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="8" />
                    <img id="ourImg" src={yjbn1} alt="" className="col-6 center-block d-block mx-auto"
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
                                        <img className="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block mw-100" src={yjbn1} />
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