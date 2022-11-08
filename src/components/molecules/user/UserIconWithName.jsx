import styled from 'styled-components';
import { memo, useContext } from 'react';
import { UserContext } from '../../../providers/UserProvider';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/userState';

export const UserIconWithName = memo((props) => {
    console.log('UserIconWithName');
    const { image, name } = props;
    // const { userInfo } = useContext(UserContext);
    const userInfo = useRecoilValue(userState);
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt="プロフィール" />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    );
});

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    border-radius: 18px;
    font-weight: bold;
    margin: 0;
    color: #40154e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`;
