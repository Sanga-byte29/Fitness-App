import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Detail from "./Detail";
import ExcerciseVideos from './ExcerciseVideos';
import SimilarExcercises from './SimilarExcercises';
import { excerciseOptions, fetchData,youtubeOptions } from './../utils/fetchData';


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos,setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl =  'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData);
    }
    fetchExercisesData();
  },[id]);
}


const ExcerciseDetails = () => {
  return (
    <Box>
      <Detail />
      <ExcerciseVideos />
      <SimilarExcercises />
    </Box>
  );
}


export default ExcerciseDetails 