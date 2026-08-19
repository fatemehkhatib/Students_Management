# Students_Management

A simple client-side web app for students to log in and view their academic information: personal profile, unit/credit progress, and transcript (grades per term).

## Project Structure

| File              | Purpose                                                                 |
|--------------------|--------------------------------------------------------------------------|
| `index.html`       | Page structure/markup (login page, main menu, profile, units, transcript) |
| `style.css`        | Styling — currently empty, to be filled in later                       |
| `script.js`        | App logic — authentication, page navigation, populating tables         |
| `students.js`      | Student data as a JS variable (`const STUDENTS = [...]`), loaded by `index.html` |
| `students.json`    | Same data in raw JSON format (for reference/backup only — not loaded by the site directly) |

## How to Run

Just open `index.html` in a browser. All files must be kept together in the same folder, since `index.html` loads `students.js` and `script.js` as separate scripts.

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

## Current Status / Limitations

- Pages currently have no visual design (`style.css` is intentionally empty) — styling will be added in a later step.
- Data is static: it was exported once from the Excel file into `students.js`. Any changes to student records currently require manually editing `students.js` (or re-exporting from Excel).
- No backend or database — this is a fully client-side prototype, not connected to any server.
- No password security — this is a prototype only and not suitable for production use as-is.

## Next Steps (Planned)

- [ ] Add styling in `style.css`