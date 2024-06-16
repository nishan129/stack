
import {AppBar, Toolbar, Box,styled} from '@mui/material'
const StyledHeader = styled(AppBar)`
        background: #FFA500;
        height: 55px;
`
const Component = styled(Box)`
        margin-left: 12%;
`

const Header = () => {
      
    const logourl = 'https://seeklogo.com/images/S/star-company-logo-9EBEA69882-seeklogo.com.png';

    return (
        <StyledHeader>
            <Toolbar>
                    <Component>
                        <img src={logourl} alt='logo' style={{width: 200, height: 59}}/>
                    </Component>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;