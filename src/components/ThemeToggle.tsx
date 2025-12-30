import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const STORAGE_KEY = "theme-preference";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // apply theme class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, [theme]);

  // initialize theme:
  // 1) if user previously chose a preference (localStorage), honor it
  // 2) otherwise, default to light between 06:00–17:59 IST, dark otherwise
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        setTheme(stored as "light" | "dark");
        return;
      }
    } catch {
      // ignore localStorage errors and fall back to time-based default
    }

    // determine IST hour (0-23) using Intl with Asia/Kolkata timezone
    try {
      const now = new Date();
      const hourString = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        hour12: false,
      }).format(now);
      const hour = parseInt(hourString, 10);
      if (!Number.isNaN(hour)) {
        // light from 06:00 (inclusive) to 18:00 (exclusive)
        setTheme(hour >= 6 && hour < 18 ? "light" : "dark");
        return;
      }
    } catch {
      // if Intl/timeZone isn't supported for some reason, fallback to local time
      const localHour = new Date().getHours();
      setTheme(localHour >= 6 && localHour < 18 ? "light" : "dark");
      return;
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write errors (e.g., private mode)
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="neon-border"
      aria-pressed={theme === "dark"}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-neon-cyan" />
      ) : (
        <Moon className="h-4 w-4 text-neon-purple" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
