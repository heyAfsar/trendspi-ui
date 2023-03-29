import React from "react";
import TextField from "@mui/material/TextField";
import styles from "../css/style.css";
import Rating from "@mui/material/Rating";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TrendsForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="container">
      <form style={styles} className="form" action="">
        <TextField
          sx={{ textIndent: "10px" }}
          className="input-field"
          helperText=" "
          id="demo-helper-text-aligned"
          label=" Name"
        />
        <TextField
          sx={{ textIndent: "10px" }}
          className="input-field"
          helperText=" "
          id="demo-helper-text-aligned"
          label=" Id"
        />
        <TextField
          sx={{ textIndent: "10px" }}
          className="input-field"
          helperText=" "
          id="demo-helper-text-aligned"
          label=" Image url"
        />
        <TextField
          sx={{ textIndent: "10px" }}
          className="input-field"
          helperText=" "
          id="demo-helper-text-aligned"
          label=" Thumbnail url"
        />
        <Stack direction="row" display="flex" alignItems="center" spacing={2}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Trend</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={true}>Up</MenuItem>
              <MenuItem value={false}>Down</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            component="label"
            sx={{
              inlineSize: 90,
              insetInlineStart: 16,
            }}
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Rating
            style={{
              blockSize: 50,
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
            name="simple-controlled"
            // value={value}
            onChange={(event, newValue) => {
              // setValue(newValue);
            }}
          />
          <Button
            variant="contained"
            component="label"
            sx={{
              inlineSize: 90,
              insetInlineStart: 16,
            }}
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>
      </form>
    </div>
  );
}
