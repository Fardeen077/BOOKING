import express from "express";
import {
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel
} from "../../controllers/hotel.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET SINGLE HOTEL
router.get("/:id", getHotel);

// GET ALL HOTELS
router.get("/", getHotels);

export default router;
