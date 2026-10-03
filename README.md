# Utility Hub

Utility Hub is a collection of simple, practical tools built with React and TypeScript.

The project is designed as a central place for calculators and converters, with each tool available through its own route.

## Current Tools

### Transport Cost Calculator

Calculate your estimated monthly transport cost based on:

- Cost per day
- Selected work days
- Number of work days in the selected month
- Option to calculate from the current day

The calculator determines the actual number of matching weekdays in the month instead of assuming a fixed number of weeks.

## Planned Tools

- Unit Converter
- Additional calculators and utility tools

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Features

- Responsive interface
- Client-side routing
- Reusable components
- Dynamic weekday calculations
- Month selection
- "From today" calculations
- 404 page
- Modular structure for adding new tools

## Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project Structure

```text
src/
├── components/
├── pages/
├── App.tsx
└── main.tsx
```

Pages represent individual tools and routes, while reusable interface elements are kept inside the components directory.

## Purpose

I built this project to practise building a modular React and TypeScript application while creating small tools that are genuinely useful.

The goal is to keep expanding Utility Hub with more calculators and converters over time.
