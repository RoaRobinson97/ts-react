import styled from 'styled-components';
import React, {FC} from "react";

interface LiPROPS{
    isActive: Boolean
}

export const Li: FC<LiPROPS> = ({isActive, children}) => (
    isActive ? <ActiveLi>
        {children}
    </ActiveLi> : <InactiveLi>
        {children}
    </InactiveLi>
);

export const Nav = styled.nav`
    width: 100%;
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

export const InactiveLi = styled.li`
    padding:10px;
    list-style-type: none;
    margin-right: 20px;
    font-size: 24px;
    text-decoration: none;
`;

export const ActiveLi = styled.li`
    padding:10px;
    background: #6002ee;
    list-style-type: none;
    margin-right: 20px;
    font-size: 24px;
    text-decoration: none;
`;

export const A = styled.a`
    text-decoration: none;
    color: #efe5fd;
    &:hover {
        color: #ffaf49;
    };
   
`;
