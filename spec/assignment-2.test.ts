import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: {
    code: string;
    startDate: string;
    endDate: string;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the assigned SLOP code, choosing only the level digit", () => {
    expect(api.course.code).toMatch(/^SLOP[123468]422$/);
  });

  it("runs across twelve dated teaching weeks", () => {
    const sessions = nodesOfType("sessions");
    const weeks = new Set(sessions.map((node) => node.meta?.week));
    expect(weeks.size, "expected a session in every one of weeks 1-12").toBe(12);
    for (let week = 1; week <= 12; week += 1) {
      expect(weeks.has(week), `no session scheduled for week ${week}`).toBe(true);
    }
  });

  it("carries at least one real, linked deck", () => {
    const lecturesWithSlides = nodesOfType("lectures").filter(
      (node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0,
    );
    expect(lecturesWithSlides.length, "no lecture links to a deck via `slides:`").toBeGreaterThan(
      0,
    );
  });

  it("adds assessment weights up to 100%", () => {
    const assessments = nodesOfType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total, `assessment weights sum to ${total}, not 100`).toBe(100);
  });
});
