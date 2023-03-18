// import { copyID } from '../shared/other';
import {
    Button
} from 'reactstrap';

function copyID(id) {
    console.log(id);
    var text = document.getElementById(id).innerHTML;
    console.log(text);
    // var copied = text.value;
    // console.log(copied);
    navigator.clipboard.writeText(text);
}


const Gift = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h3>신랑 & 신부에게 선물하기</h3>
                        <p>축복의 의미로 마음을 전달해보세요.</p>
                        <img src="https://www.flaticon.com/free-animated-icon/bride_9284546?term=bride&page=1&position=1&origin=search&related_id=9284546"
                            alt="" />
                        <button type="button" className="btn btn-light btn-lg btn-block" data-toggle="modal"
                            data-target="#bankInfoModal">
                            {/* <i className="fa fa-male fa-shake" style="--fa-animation-duration: 2s;" aria-hidden="true"></i> */}
                            신랑측 계좌번호
                        </button>
                        <button type="button" className="btn btn-light btn-lg btn-block" data-toggle="modal"
                            data-target="#bnbankInfoModal">
                            {/* <i className="fa fa-female fa-bounce"></i> 신부측 */}
                            신부측 계좌번호
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- 신랑 계좌연동 --> */}
            <div className="modal fade" id="bankInfoModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        {/* <!-- <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div> --> */}
                        <div className="modal-body">
                            <div className="row justify-content-between">
                                <h4 className="col-auto mr-auto offset-1">신랑 계좌</h4>
                                <Button onClick={() => copyID('yj1')} type="button" className="col btn btn-secondary col-auto"
                                    data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">복사하기
                                    <i className="fa fa-copy" aria-hidden="true"></i>
                                </Button>
                                <div className="col-1"></div>
                            </div>
                            <div className="text-left offset-1">
                                <p>IBK기업은행 (예금주: 조영진)</p>
                                <p id="yj1">02802204018234</p>
                            </div>
                            {/* <br />
                            <div className="row justify-content-between">
                                <h4 className="col-auto mr-auto offset-1">신랑 아버지 계좌</h4>
                                <button onClick={() => copyID('YJP')} type="button" className="col btn btn-secondary col-auto"
                                    data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">복사하기
                                    <i className="fa fa-copy" aria-hidden="true"></i>
                                </button>
                                <div className="col-1"></div>
                            </div>
                            <div className="text-left offset-1">
                                <p>IBK기업은행 (예금주: 조영진)</p>
                                <p id="YJP">123456</p>
                            </div>

                            <br />
                            <div className="row justify-content-between">
                                <h4 className="col-auto mr-auto offset-1">신랑 어머니 계좌</h4>
                                <button onClick={() => copyID('YJM')} type="button" className="col btn btn-secondary col-auto"
                                    data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">복사하기
                                    <i className="fa fa-copy" aria-hidden="true"></i>
                                </button>
                                <div className="col-1"></div>
                            </div>
                            <div className="text-left offset-1">
                                <p>IBK기업은행 (예금주: 조영진)</p>
                                <p id="YJM">02802204018234</p>
                            </div> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">닫기</span>
                            </button>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 신부 계좌연동 --> */}
            <div className="modal fade" id="bnbankInfoModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        {/* <!-- <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div> --> */}
                        <div className="modal-body">
                            <div className="row justify-content-between">
                                <h4 className="col-auto mr-auto offset-1">신부 계좌</h4>
                                <button onClick={() => copyID('BN')} type="button" className="col btn btn-secondary col-auto"
                                    data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">복사하기
                                    <i className="fa fa-copy" aria-hidden="true"></i>
                                </button>
                                <div className="col-1"></div>
                            </div>
                            <div className="text-left offset-1">
                                <p>IBK기업은행 (예금주: 조영진)</p>
                                <p id="BN">82381268665</p>
                            </div>
                            <br />
                            <div className="row justify-content-between">
                                <h4 className="col-auto mr-auto offset-1">신부 아버지 계좌</h4>
                                <button onClick={() => copyID('BNP')} type="button" className="col btn btn-secondary col-auto"
                                    data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">복사하기
                                    <i className="fa fa-copy" aria-hidden="true"></i>
                                </button>
                                <div className="col-1"></div>
                            </div>
                            <div className="text-left offset-1">
                                <p>IBK기업은행 (예금주: 조영진)</p>
                                <p id="BNP">0192703214</p>
                            </div>

                            <br />
                            <div className="row justify-content-between">
                                <h4 className="col-auto mr-auto offset-1">신부 어머니 계좌</h4>
                                <button onClick={() => copyID('BNM')} type="button" className="col btn btn-secondary col-auto"
                                    data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">복사하기
                                    <i className="fa fa-copy" aria-hidden="true"></i>
                                </button>
                                <div className="col-1"></div>
                            </div>
                            <div className="text-left offset-1">
                                <p>IBK기업은행 (예금주: 조영진)</p>
                                <p id="BNM">2827386017027</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">닫기</span>
                            </button>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Gift;