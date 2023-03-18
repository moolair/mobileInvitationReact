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
import yjbn11 from '../img/YJBN-wedding/yjbn11.jpeg';
import yjbn12 from '../img/YJBN-wedding/yjbn12.jpeg';
import yjbn13 from '../img/YJBN-wedding/yjbn13.jpeg';
import yjbn14 from '../img/YJBN-wedding/yjbn14.jpeg';
import yjbn15 from '../img/YJBN-wedding/yjbn15.jpeg';
import yjbn16 from '../img/YJBN-wedding/yjbn16.jpeg';
import yjbn17 from '../img/YJBN-wedding/yjbn17.jpeg';

function Gallery() {
    return (
        <div>
            <div className="container text-center">
                {/* <div className="row">
                    <div className="col">
                        <h3>Gallery</h3>
                    </div>
                </div> */}
                <div className='row'>
                    <div className="col">
                        <h3 className='mb-5'>Gallery</h3>
                    </div>
                    <div id="custCarousel" className="carousel slide col" data-ride="carousel">
                        <div className='carousel-inner'>
                            <ol className="carousel-indicators list-inline">
                                <li className="list-inline-item active">
                                    <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel">
                                        <img src={yjbn1} className="img-thumbnail mg-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                                        <img src={yjbn2} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel">
                                        <img src={yjbn3} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-3" data-slide-to="3" data-target="#custCarousel">
                                        <img src={yjbn4} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-4" data-slide-to="4" data-target="#custCarousel">
                                        <img src={yjbn5} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-5" data-slide-to="5" data-target="#custCarousel">
                                        <img src={yjbn6} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-6" data-slide-to="6" data-target="#custCarousel">
                                        <img src={yjbn7} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-7" data-slide-to="7" data-target="#custCarousel">
                                        <img src={yjbn8} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-8" data-slide-to="8" data-target="#custCarousel">
                                        <img src={yjbn9} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-9" data-slide-to="9" data-target="#custCarousel">
                                        <img src={yjbn10} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-10" data-slide-to="10" data-target="#custCarousel">
                                        <img src={yjbn11} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-11" data-slide-to="11" data-target="#custCarousel">
                                        <img src={yjbn12} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-12" data-slide-to="12" data-target="#custCarousel">
                                        <img src={yjbn13} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-13" data-slide-to="13" data-target="#custCarousel">
                                        <img src={yjbn14} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-14" data-slide-to="14" data-target="#custCarousel">
                                        <img src={yjbn15} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-15" data-slide-to="15" data-target="#custCarousel">
                                        <img src={yjbn16} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a id="carousel-selector-16" data-slide-to="16" data-target="#custCarousel">
                                        <img src={yjbn17} className="img-thumbnail img-fluid" />
                                    </a>
                                </li>
                            </ol>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block mw-100" src={yjbn1} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn2} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn3} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn4} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn5} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn6} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn7} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn8} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn9} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn10} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn11} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn12} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn13} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn14} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn15} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn16} alt="Responsive image" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block mw-100" src={yjbn17} alt="Responsive image" />
                            </div>

                            <a className="carousel-control-prev" href="#custCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#custCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;