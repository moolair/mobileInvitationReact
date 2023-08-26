import yjbn1 from '../img/YJBN-wedding/yjbn1.jpeg';
import yjbn2 from '../img/YJBN-wedding/yjbn2.jpeg';
// import yjbn3 from '../img/YJBN-wedding/yjbn3.jpeg';
// import yjbn4 from '../img/YJBN-wedding/yjbn4.jpeg';
// import yjbn5 from '../img/YJBN-wedding/yjbn5.jpeg';
// import yjbn6 from '../img/YJBN-wedding/yjbn6.jpeg';
// import yjbn7 from '../img/YJBN-wedding/yjbn7.jpeg';
// import yjbn8 from '../img/YJBN-wedding/yjbn8.jpeg';
// import yjbn9 from '../img/YJBN-wedding/yjbn9.jpeg';
// import yjbn10 from '../img/YJBN-wedding/yjbn10.jpeg';
// import yjbn11 from '../img/YJBN-wedding/yjbn11.jpeg';
// import yjbn12 from '../img/YJBN-wedding/yjbn12.jpeg';
// import yjbn13 from '../img/YJBN-wedding/yjbn13.jpeg';
// import yjbn14 from '../img/YJBN-wedding/yjbn14.jpeg';
// import yjbn15 from '../img/YJBN-wedding/yjbn15.jpeg';
// import yjbn16 from '../img/YJBN-wedding/yjbn16.jpeg';
// import yjbn17 from '../img/YJBN-wedding/yjbn17.jpeg';

function Gallery() {
    return (
        <div>
            <div className="container text-center">
                <div className='row'>
                    <div className="col">
                        <h3 className='mb-5'>Gallery</h3>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={yjbn1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn2} className="d-block w-100" alt="..." />
                            </div>
                            {/* Aug 26, 2023
                            YJ
                            Can create it dynamically, but for quick development, leave the following as is. */}
                            {/* <div className="carousel-item">
                                <img src={yjbn3} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn4} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn5} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn6} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn7} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn8} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn9} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn10} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn11} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn12} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn13} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn14} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn15} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn16} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={yjbn17} className="d-block w-100" alt="..." />
                            </div> */}
                            {/* END Aug 26, 2023 */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;