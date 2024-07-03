const fs = require('fs');
const express = require('express');
const router = express.Router();

const tours = JSON.parse(
  fs.readFileSync(`/home/igor/Documents/Development/Natours-API/Natours-API/api/dev-data/data/tours-simple.json`)
);

// Route Handlers
router.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

router.post("/api/v1/tours", (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body }; // Melhor forma de criar um novo objeto

  tours.push(newTour);

  fs.writeFile(
    `/home/igor/Documents/Development/Natours-API/Natours-API/api/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        res.status(500).json({
          status: "error",
          message: "Failed to write to file",
        });
      } else {
        res.status(201).json({
          status: "success",
          data: {
            tour: newTour,
          },
        });
      }
    }
  );
});

module.exports = router;
