// import logo from './logo.svg';
import YJBNsubmain from './img/main/1.jpg';
import YJBNsubmain2 from './img/yj.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div class="container text-center">
          <div class="row">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={YJBNsubmain} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                {/* <div class="carousel-item">
                  <img src={YJBNsubmain2} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lHAzdB6etLEAX_T6I30&_nc_ht=scontent-sea1-1.xx&oh=00_AfAUCKcgTkZpHcVU-hOUJl2APfBV3dfNfaAOzgCMHug12w&oe=6402D2CE"
                    class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div> */}
              </div>
              {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a> */}
            </div>
          </div>
        </div>
      </header>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1>조영진 | 이빛나</h1>
            <p>2023. 04. 22 토 12:00 PM</p>
            <p>엘리스 몽드</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col bg-paleyellow">
            <div class="row">
              <div class="col">
                <h3>Love</h3>
                <br />
                <p>서로가 마주보며 다져온 사랑을</p>
                <p>이제 함께 한 곳을 바라보며</p>
                <p>걸어갈 수 있는 큰 사랑으로 키우고자 합니다.</p>
                <p>저희 두 살마이 사랑의 이름으로</p>
                <p>지켜나갈 수 있게 앞날을</p>
                <p>축복해 주시면 감사하겠습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 연락처 div */}
      <div class="container text-center">
        <div class="row">
          <h4 class="col-6">신랑에게 연락하기</h4>
          <div class="col-3">
            <a href='tel:6048423959'>
              <i class="fa fa-phone fa-3x" aria-hidden="true"></i>
            </a>
          </div>
          <div class="col-3">
            <a href="http://qr.kakao.com/talk/OboUswYENQOLoVURPdRRiHVilgg-">
              <i class="fa fa-comment-dots fa-3x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="row">
          <h4 class="align-middle col-6">신부에게 연락하기</h4>
          <div class="col-3">
            <a href='tel:7786837687'>
              <i class="fa fa-phone fa-3x" aria-hidden="true"></i>
            </a>
          </div>
          <div class="col-3">
            <a href="http://qr.kakao.com/talk/Gm9tvTl7HtGwo5J8YFGoLMfNilI-">
              <i class="fa fa-comment-dots fa-3x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h4>신랑측 혼주</h4>
            <div>
              <br />
              <h5>아버지 조석현</h5>
              <a href='tel:01045841389' class="fa fa-phone fa-2x col-lg-2 col-sm-3" aria-hidden="true"></a>
              <a href="sms:01045841389" class="fa fa-comment-dots fa-2x col-lg-2 col-sm-3" aria-hidden="true"></a>
            </div>
            <div>
              <br />
              <h5>어머니 김경희</h5>
              <a href='tel:01036955169' class="fa fa-phone fa-2x col-lg-2 col-sm-3" aria-hidden="true"></a>
              <a href="sms:01036955169" class="fa fa-comment-dots fa-2x col-lg-2 col-sm-3" aria-hidden="true"></a>
            </div>
          </div>
          <div class="col">
            <h4>신부측 혼주</h4>
            <div>
              <br />
              <h5>아버지 이현주</h5>
              <a href='tel:01053497688' class="fa fa-phone fa-2x col-lg-2 col-sm-3" aria-hidden="true"></a>
              <a href="sms:01053497688" class="fa fa-comment-dots fa-2x col-lg-2 col-sm-3" aria-hidden="true"></a>
            </div>
            <div>
              <br />
              <h5>어머니 노인숙</h5>
              <a href='tel:01063407688' class="fa fa-phone fa-2x col-lg-2 col-sm-3" aria-hidden="true"></a>
              <a href="sms:01063407688" class="fa fa-comment-dots fa-2x col-lg-2 col-sm-3" aria-hidden="true"></a>
            </div>
          </div>
        </div>
      </div>

    </div> //end of parent div
  );
}

export default App;
