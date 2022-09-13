import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./card.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const CardProject = ({title}) => {
  return (
    <Card sx={{ maxWidth: 345 ,margin: 3}}>
      <CardMedia
        component="img"
        height="300"
        sx={{ backgroundColor: "rgba(48, 48, 48, 0.5)" }}
      />

      <div className="description">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <ArrowCircleRightIcon
              sx={{ color: "gray", fontSize: "3rem", rotate: "-40deg" }}
            />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default CardProject;
