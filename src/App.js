// import logo from './logo.svg';
import YJBNsubmain from './img/main/1.jpeg';
import invitation from './img/main/invitation.jpg';
import weddingDate from './img/main/weddingDate.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container text-center">
          <div className="row">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={YJBNsubmain} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-md-block">
                    <h5>저희 결혼합니다.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>조영진 | 이빛나</h1>
            <br />
            <p>2023. 04. 22 토 12:00 PM</p>
            <p>엘리스 몽드</p>
          </div>
        </div>
      </div>

      <div className="container text-center">
        {/* <div className="row">
          <div className="col bg-paleyellow">
            <div className="row">
              <div className="col">
                <h3>Love</h3>
                <br />
                <p>따뜻한 봄날, 오랜 기간 동안 서로 의지하고</p>
                <p>성장하며, 발전하던 두 사람이 하나가 되어</p>
                <p>행복한 시작을 하려합니다.</p>
                <p>그 행복의 문에 입장하는 저희를</p>
                <p>함께 축복해 주시면</p>
                <p>더할 나위 없는 기쁨으로 간직하겠습니다.</p>
              </div>
            </div>
          </div>
        </div> */}
        <img src={invitation} className="d-block w-100" alt="..." />
        <img src={weddingDate} className="d-block w-100" alt="..." />

      </div>

      {/* 연락처 div */}
      <div className="container text-center">
        <div className="row">
          <h4 className="col-6">신랑에게 연락하기</h4>
          <div className="col-3">
            <a href='tel:6048423959'>
              <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col-3">
            <a href="http://qr.kakao.com/talk/OboUswYENQOLoVURPdRRiHVilgg-">
              <i className="fa fa-comment-dots fa-3x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <h4 className="align-middle col-6">신부에게 연락하기</h4>
          <div className="col-3">
            <a href='tel:7786837687'>
              <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col-3">
            <a href="http://qr.kakao.com/talk/Gm9tvTl7HtGwo5J8YFGoLMfNilI-">
              <i className="fa fa-comment-dots fa-3x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>신랑측 혼주</h4>
            <div>
              <br />
              <h5>아버지 조석현</h5>
              <a href='tel:01045841389' className="fa fa-phone fa-2x col-3" aria-hidden="true"></a>
              <a href="sms:01045841389" className="fa fa-comment-dots fa-2x col-3" aria-hidden="true"></a>
            </div>
            <div>
              <br />
              <h5>어머니 김경희</h5>
              <a href='tel:01036955169' className="fa fa-phone fa-2x col-3" aria-hidden="true"></a>
              <a href="sms:01036955169" className="fa fa-comment-dots fa-2x col-3" aria-hidden="true"></a>
            </div>
          </div>
          <div className="col">
            <h4>신부측 혼주</h4>
            <div>
              <br />
              <h5>아버지 이현주</h5>
              <a href='tel:01053497688' className="fa fa-phone fa-2x col-3" aria-hidden="true"></a>
              <a href="sms:01053497688" className="fa fa-comment-dots fa-2x col-3" aria-hidden="true"></a>
            </div>
            <div>
              <br />
              <h5>어머니 노인숙</h5>
              <a href='tel:01063407688' className="fa fa-phone fa-2x col-3" aria-hidden="true"></a>
              <a href="sms:01063407688" className="fa fa-comment-dots fa-2x col-3" aria-hidden="true"></a>
            </div>
          </div>
        </div>
      </div>

    </div> //end of parent div
  );
}

export default App;
