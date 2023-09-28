import { Box, Typography } from "@mui/material"

const Title = () => {
    return (
        <div>
            <Typography variant="h4" component="div">
                <Box fontWeight='fontWeightBold' display='inline' sx={{
                    color: "#fff",
                }}>
                    Hệ thống khai thác hồ sơ
                </Box>
            </Typography>
            <Typography variant="h5">
                <Box fontWeight='fontWeightBold' display='inline' sx={{
                    color: "#fff",
                }}>
                    Nhập từ khoá bạn cần tìm
                </Box>
            </Typography>
        </div>

    )
}

export default Title
