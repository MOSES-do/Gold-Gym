import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography, Container } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { HorizontalScrollbar } from '../components/'



const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setBodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions)

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);
        }
    }
    return (
        <Stack className="searchBar" alignItems="center" mt="37px" justifyContent="center" p="30px"  >
            <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "25px", mb: "50px" }, textAlign: "center" }}>
                Awesome Exercises You <br /> Should Know
            </Typography>


            <Box sx={{ display: "flex", gap: "10px", justifyContent: "center", width: { xs: "100%", sm: "90%" }, alignItems: "center", flexDirection: { xs: "column", sm: "row" } }} position="relative" mb="72px">
                <TextField sx={{ flex: "3", input: { fontWeight: "700", border: "none", borderadius: "4px" }, backgroundColor: "#fff", borderRadius: "40px" }}
                    height="76px" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search exercises" type="text" />
                <Button onClick={handleSearch} className="search-btn" sx={{ bgcolor: "#ff2625", color: '#fff', textTransform: 'none', width: { lg: '125px', xs: '100px' }, fontSize: { lg: '20px', xs: '14px' }, height: '56px' }}>
                    Search
                </Button>
            </Box>

            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} isBodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack >
    )
}

export default SearchExercises