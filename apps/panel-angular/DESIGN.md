# Panel design

The panel keeps its current sidebar-and-workspace layout while using InviRtual's brand colors with a quieter, more squared administration style. This theme belongs only to this application.

## Tokens

- Grafito: `--foreground` and `--sidebar` (`#222222`).
- Dorado: `--primary` (`oklch(0.75 0.15 85)`) for selection and emphasis.
- Rosa suave: `--secondary` (`oklch(0.95 0.05 15)`) for supporting surfaces.
- Lavanda: `--accent` (`oklch(0.88 0.08 290)`) for small highlights.
- Neutral surfaces and borders use `--background`, `--card`, `--muted` and `--border`.
- Poppins is the primary typeface. Use weight and size for hierarchy; keep controls and navigation compact.
- `--radius` is 4px. Keep shapes restrained; reserve circles for small brand marks.

Tokens use Spartan's semantic CSS variables and Tailwind's theme mapping in `src/styles.css`. Keep colors and styles local to the panel; no shared theme or dark mode is defined.
