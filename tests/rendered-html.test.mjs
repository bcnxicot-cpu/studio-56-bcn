import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const html = await readFile(".next/server/app/index.html", "utf8");

test("renders the verified business information", () => {
  assert.match(html, /Studio 56/);
  assert.match(html, /Carrer de Burgos/);
  assert.match(html, /647 911 448/);
  assert.match(html, /claremach2@gmail.com/);
  assert.match(html, /5,0/);
  assert.match(html, /PARA CREAR/);
  assert.match(html, /Tengo obras que enseñar/);
  assert.doesNotMatch(html, /Talleres para empezar/);
});

test("all primary contact and booking routes are present", () => {
  assert.match(html, /meetup.com\/barcelona-ceramic-arts-pottery-ceramica-meetup/);
  assert.match(html, /mailto:claremach2@gmail.com/);
  assert.match(html, /tel:\+34647911448/);
  assert.match(html, /instagram.com\/studio56bcn/);
  assert.match(html, /google.com\/maps/);
});
