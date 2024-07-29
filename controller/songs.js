// controllers/songController.js

const Song = require("../models/song");

// Get all songs
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single song by ID
const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new song
const createSong = async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
  });

  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a song by ID
const updateSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (song) {
      song.title = req.body.title || song.title;
      song.artist = req.body.artist || song.artist;
      song.album = req.body.album || song.album;
      song.genre = req.body.genre || song.genre;

      const updatedSong = await song.save();
      res.json(updatedSong);
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a song by ID
const deleteSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      console.log("Song not found");
      return res.status(404).json({ message: "Song not found" });
    }
    console.log("Song found:", song);
    await song.deleteOne();
    console.log("Song deleted");
    res.json({ message: "Song deleted" });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ message: err.message });
  }
};

// Delete all songs
const deleteAllSongs = async (req, res) => {
  try {
    const result = await Song.deleteMany({});
    res.json({ message: `${result.deletedCount} songs deleted` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
  deleteAllSongs,
};
