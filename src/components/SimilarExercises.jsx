import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography, Divider } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercise, equipmentExercises }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = equipmentExercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value)

        window.scrollTo({ top: 2820, behavior: "smooth" })
    }


    return (
        <Box sx={{ mt: { lg: "110px", xs: '0' } }}>
            {targetMuscleExercise.length ? (
                <>
                    <Typography variant="h3" sx={{ fontSize: { xs: "20px" }, mt: "80px", ml: "40px", pl: "5px", pr: "5px", borderRadius: "10px", pt: "5px", pb: "5px", background: "#FF2625", maxWidth: { xs: "85%", sm: "max-content" }, color: "white" }}>
                        Exercises that target the same muscle group
                    </Typography>

                    <Stack direction="row" sx={{ p: '2', position: 'relative', mt: "30px" }}>
                        <HorizontalScrollbar data={targetMuscleExercise} />
                    </Stack>


                    <Divider sx={{ mt: "6rem" }} />

                    <Typography variant="h3" sx={{ fontSize: { xs: "20px" }, mt: "100px", ml: "40px", pl: "5px", pr: "5px", pt: "5px", borderRadius: "10px", pb: "5px", background: "#FF2625", maxWidth: { xs: "85%", sm: "max-content" }, color: "white" }}>
                        Target exercises by their equipments
                    </Typography>
                    <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" }, mt: "40px" }} flexWrap="wrap" justifyContent="center">
                        {currentExercises.map((singleExercise, index) => (
                            <ExerciseCard key={index} exercise={singleExercise} />
                        ))}
                    </Stack>
                    <Stack mt="100px" alignItems="center">
                        {equipmentExercises.length > 9 && (
                            <Pagination color="standard" shape="rounded" defaultPage={1}
                                count={Math.ceil(equipmentExercises.length / exercisesPerPage)}
                                page={currentPage}
                                onChange={paginate}
                                size="large"
                            />
                        )}
                    </Stack>
                </>
            ) :
                (<Loader />)
            }
        </Box>

    )
}

export default SimilarExercises