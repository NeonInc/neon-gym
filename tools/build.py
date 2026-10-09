"""Builds index.html (GitHub Pages) from src/app.html. The same src/app.html is published as the claude.ai artifact."""
import pathlib, re
root = pathlib.Path(__file__).resolve().parent.parent
src = (root / "src" / "app.html").read_text(encoding="utf-8")
title = re.search(r"<title>(.*?)</title>", src).group(1)
body = re.sub(r"<title>.*?</title>\n?", "", src, count=1)
head = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#15181d">
<meta name="description" content="Neon Gym: a beginner-friendly gym plan and log. Full body now, splits later, with weights, rest timer and progress tracking.">
<title>{title} · Neon Inc™</title>
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icon-192.png">
<link rel="manifest" href="manifest.webmanifest">
<style>html,body{{margin:0}}:root{{padding-top:env(safe-area-inset-top,0px)}}img{{max-width:100%}}[hidden]{{display:none!important}}</style>
</head>
<body>
"""
(root / "index.html").write_text(head + body + "\n</body>\n</html>\n", encoding="utf-8")
print("built index.html", len(head + body), "bytes")
