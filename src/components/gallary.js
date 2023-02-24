import yjbn1 from '../img/YJBN-wedding/yjbn1.JPG';

function Gallery() {
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h3>Gallery</h3>
                    </div>
                </div>
                <div class="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="0" />
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="1" />
                </div>
                <div class="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="2" />
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="3" />
                </div>
                <div class="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="4" />
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="5" />
                </div>
                <div class="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="6" />
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="7" />
                </div>
                <div class="row" id="gallery" data-toggle="modal" data-target="#imgModal">
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="8" />
                    <img id="ourImg" src={yjbn1} alt="" class="col-6 center-block d-block mx-auto"
                        data-target="#carouselExample" data-slide-to="9" />
                </div>
            </div>

            {/* image modal */}
            <div class="modal fade" id="imgModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        {/* <!-- <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div> --> */}
                        <div class="modal-body">
                            <div id="carouselExample" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block mw-100" src={yjbn1} />
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div> --> */}

                    </div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h3>Movie</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;