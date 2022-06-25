import React from 'react'
import { useParams } from "react-router-dom";
const data = {
    dtakami: {
        name: '김두현',
        description: '백엔드 엔지니어'
    },
    james: {
        name: '김재현',
        description: '프론트엔드 ui/ux 디자이너'
    }
};

const Profile = ({match}) => {
    const {username} = useParams();
    const profile = data[username];
    if(!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>;
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}
export default Profile;
// Cannot read property 'params' of undefined 에러
// const {username} = match.params 을 사용했더니 오류가 나온다. 책은 react-router-dom v5인데 내가 설치한 라이브러리는 v6이라서 아무래도 차이가 있다.
// react-router-dom 버전 6부터는 element로 컴포넌트를 만들고, route props(match, history, location)을 받지 않는다. 따라서, useParams, useLocation, useHistory를 사용하여 route context에 접근한다
// 출처 : https://velog.io/@kcdoggo/Cannot-read-property-params-of-undefined-%EC%97%90%EB%9F%AC
//v6으로 업그레이드 되면서 달라진 것들 : https://velog.io/@soryeongk/ReactRouterDomV6