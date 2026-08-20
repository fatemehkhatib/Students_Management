# Student Management System

A simple client-side web app for students to log in and view their academic information: personal profile, unit/credit progress, and transcript (grades per term).

## Project Structure

| File / Folder           | Purpose                                                                 |
|-------------------------|--------------------------------------------------------------------------|
| `index.html`            | Page structure/markup (login page, main menu, profile, units, transcript) |
| `fonts.css`             | `@font-face` declarations for the two custom Persian fonts             |
| `style.css`             | Main "carbon blue" theme — layout, colors, minimal tables, icons       |
| `script.js`             | App logic — authentication, page navigation, populating tables         |
| `students.js`           | Student data as a JS variable (`const STUDENTS = [...]`), loaded by `index.html` |
| `students.json`         | Same data in raw JSON format (for reference/backup only — not loaded by the site directly) |
| `fonts/DigiLotosBold.ttf`               | Heading font (`DigiLotos`)                                |
| `fonts/DigiNazaninPlusBoldCircle.ttf`   | Body text font (`DigiNazanin`)                             |

## How to Run

Just open `index.html` in a browser. All files must be kept together in the same folder structure (including the `fonts/` subfolder), since `index.html` loads `fonts.css`, `style.css`, `students.js`, and `script.js` as separate files, and `fonts.css` loads the font files from `fonts/`.

No server or build step is required — everything runs client-side in the browser.

## Login / Testing

- Username: student ID number
- Password: same student ID number (must match the username)

Example test account:
- Username: `40311270248`
- Password: `40311270248`

## Data Source

Student records were imported from an Excel file (`200_دانشجوی_رندوم.xlsx`) containing 200 students, including:
- Name, major, shift, student ID
- Units completed per term, remaining units
- Grades per term, overall GPA

## Styling

A "carbon blue" theme has been applied across all pages: a dark carbon-weave background, glassmorphism panels, blue glow accents, minimal line-style icons for the three main sections, and centered, minimal tables. Two custom Persian fonts are used throughout — `DigiLotos` for headings and `DigiNazanin` for body text — declared in `fonts.css` and loaded from the `fonts/` folder.

## Current Status / Limitations

- Data is static: it was exported once from the Excel file into `students.js`. Any changes to student records currently require manually editing `students.js` (or re-exporting from Excel).
- No backend or database — this is a fully client-side prototype, not connected to any server.
- No password security — this is a prototype only and not suitable for production use as-is.