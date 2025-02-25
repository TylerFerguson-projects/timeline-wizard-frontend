"use client";
import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from '@mui/material/Grid2';
import { Dayjs } from "dayjs";

interface FormData {
  client: string;
  venue: string;
  date: Dayjs | null;
  eventType: string;
  phone: string;
  ceremonyTime: string;
  dances: { waltz: boolean; tango: boolean; salsa: boolean };
}


interface FormData {
  client: string;
  venue: string;
  date: Dayjs | null;
  eventType: string;
  phone: string;
  ceremonyTime: string;
  dances: { waltz: boolean; tango: boolean; salsa: boolean };
}

const TimelineGeneratorPage = () => {
  const [formData, setFormData] = useState<FormData>({
    client: "",
    venue: "",
    date: null,
    eventType: "",
    phone: "",
    ceremonyTime: "",
    dances: { waltz: false, tango: false, salsa: false },
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = "target" in e ? e.target : e;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDanceChange = (dance: keyof typeof formData.dances) => {
    setFormData((prev) => ({
      ...prev,
      dances: { ...prev.dances, [dance]: !prev.dances[dance] },
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Container maxWidth="lg" className="py-6">
       <Typography variant="h4" className="mb-6 font-medium text-gray-100" display="flex" justifyContent="center">
        Timeline Generator
      </Typography>
      <Paper elevation={4} className="p-8 rounded-lg bg-gray-800 text-gray-100 m-4">
     
        <Box component="form">
          <Grid container spacing={4}>
            {/* Client Name */}
            <Grid size={{xs:12 }} display="flex" justifyContent="center">
              <TextField
                sx={{ width: '75%', mt:5 }}
                label="Client Name"
                name="client"
                value={formData.client}
                onChange={handleChange}
                variant="standard"
                className="bg-gray-700 text-gray-100"
              />
            </Grid>
            {/* Venue Location */}
            <Grid size={{xs:12 }} display="flex" justifyContent="center">
              <TextField
                sx={{ width: '75%' }}
                label="Venue Location"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                variant="standard"
                className="bg-gray-700 text-gray-100"
              />
            </Grid>
            {/* Event Date */}
            <Grid size={{xs:12 }} display="flex" justifyContent="center">
              <Box className="w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Event Date"
                    value={formData.date}
                    onChange={(date) =>
                      setFormData((prev) => ({ ...prev, date }))
                    }
                    sx={{
                      width: "100%",
                      backgroundColor: "#374151",
                      "& .MuiInputBase-input": { color: "#d1d5db" },
                      "& .MuiInputLabel-root": { color: "#9ca3af" },
                    }}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
            {/* Event Type */}
            <Grid size={{xs:12 }} display="flex" justifyContent="center">
              <FormControl sx={{ width: '75%' }} variant="standard" className="bg-gray-700">
                <InputLabel className="text-gray-300">Event Type</InputLabel>
                <Select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  label="Event Type"
                  className="text-gray-100"
                >
                  <MenuItem value="wedding">Wedding</MenuItem>
                  <MenuItem value="corporate">Corporate</MenuItem>
                  <MenuItem value="party">Party</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Phone Number */}
            <Grid size={{xs:12 }} display="flex" justifyContent="center">
              <TextField
                sx={{ width: '75%' }}
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="standard"
                className="bg-gray-700 text-gray-100"
              />
            </Grid>
            {/* Ceremony Time */}
            <Grid size={{xs:12 }} display="flex" justifyContent="center">
              <TextField
                sx={{ width: '75%' }}
                label="Ceremony Time"
                name="ceremonyTime"
                type="time"
                value={formData.ceremonyTime}
                onChange={handleChange}
                variant="standard"
                className="bg-gray-700 text-gray-100"
              />
            </Grid>
            {/* Dance Selection */}
            <Grid size={{xs:12 }} display="flex" justifyContent="center">
              <Box>
                <Typography
                  variant="subtitle1"
                  className="mb-2 text-gray-300"
                  sx={{ fontSize: "1.5rem" }}
                >
                  Dance Selection
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.dances.waltz}
                      onChange={() => handleDanceChange("waltz")}
                      className="text-blue-400"
                      
                    />
                  }
                  label="Waltz"
                  className="text-gray-100"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.dances.tango}
                      onChange={() => handleDanceChange("tango")}
                      className="text-blue-400"
                    />
                  }
                  label="Tango"
                  className="text-gray-100"
                  
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.dances.salsa}
                      onChange={() => handleDanceChange("salsa")}
                      className="text-blue-400"
                    />
                  }
                  label="Salsa"
                  className="text-gray-100"
                />
              </Box>
            </Grid>
            {/* Submit Button */}
            <Grid size={{xs:12 }} display="flex" justifyContent="center" padding={4}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default TimelineGeneratorPage;