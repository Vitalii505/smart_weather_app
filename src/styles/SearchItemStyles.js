import { Paper, styled } from "@mui/material"

const SearchItemStyles = styled(Paper)(({ theme }) => ({
    backgroundColor: '#eab3b300',
    padding: theme.spacing(1),
    textAlign: 'center',
    border: "node",
    boxShadow: "none"
}));

export default SearchItemStyles;