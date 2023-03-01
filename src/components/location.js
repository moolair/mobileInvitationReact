import React, { useEffect } from 'react';

const { kakao } = window;

const Location = () => {

    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.541923088415, 126.995249388096), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(37.541923088415, 126.995249388096);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }, []);

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h3>Location</h3>
                    <br />
                    {/* <!-- 맵 생성 실행 --> */}
                    <div id="map" className="map"></div>
                    <br />
                    <h4>엘리스 몽드</h4>
                    <p>서울특별시 용산구 소월로 302</p>
                    <p>02-511-2266 / 02-6259-1010</p>
                </div>
            </div>
        </div>
    );
}

export default Location; 