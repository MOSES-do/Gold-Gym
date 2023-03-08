import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    // console.log(exerciseVideos)
    if (!exerciseVideos.length) return 'Loading...'

    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
            <Typography variant="h5" mb="33px">
                Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise videos
            </Typography>

            <Stack justifyContent="flexStart" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
            >
                {/* slice indicates how mmany results/items we want to return */}
                {exerciseVideos?.slice(0, 5).map((item, index) => (
                    <a key={index} target="_blank" rel="noreferrer" className="exercise-video" href={`https://youtube.com/watch?v=${item.video.videoId}`}>

                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant="h6" sx={{ fontSize: "18px", marginTop: "-25px" }} color="#000">
                                {item.video.title}
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "bold", marginBottom: "2rem" }} color="#000">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos