import { Button, Stack, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const ExcerciseCard = ({excercise}) => {
  return (
    <Link className="excercise-card" to={`/excercise/${excercise.id}`}>
      <img src={excercise.gifUrl} alt={excercise.name} loading="Lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            textDecoration: "none",
          }}
        >
          {excercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            textDecoration: "none",
          }}
        >
          {excercise.target}
        </Button>
      </Stack>
      <Typography 
      ml="21px"
      mt="11px"
      color="#000"
      fontWeight="bold"
      flexWrap="wrap"
      justifyContent="center"
      fontSize="22px"
      >{excercise.name}</Typography>
    </Link>
  );
}

export default ExcerciseCard;
