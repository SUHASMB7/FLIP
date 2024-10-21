

//components

import NavBar from './NavBar';
import Banner from './Banner';
//import Slide from './Slide';

import { Box, styled } from '@mui/material'

const Component = styled(Box)`
    padding: 0px;
    background: #F2F2F2;
`


const Home  = () => {
    
    return (
        <>
            <NavBar />
            <Component>
                <Banner />

                
            </Component>
        </>
    )
}
export default Home;


