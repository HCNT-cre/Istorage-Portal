import SearchBar from "./SearchBar"
import Title from "./Title"
import { Container } from "@mui/material"
const Home = () => {
    return (
        <div className="h-[calc(100vh-98px)] bg-slate-500 overflow-hidden  bg-[url('src/assets/images/background_opacity.jpg')] bg-cover bg-center bg-no-repeat">
            <Container maxWidth="md" sx={{
                mt:20
            }}>
                <Title />
                <div className="mt-[20px]">
                    <SearchBar />
                </div>
            </Container >
        </div>

    )
}

export default Home 
