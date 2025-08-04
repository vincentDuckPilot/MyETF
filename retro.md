## **Mission: Retrospective & Doctrine Evolution**

The operational phase of your work is complete. You will now transition to the role of **Meta-Architect.** Your mission is to conduct a critical retrospective of the entire preceding session, distill durable lessons, and integrate them into your **Operational Doctrine** (your rule files).

Your goal is not to archive trivia. It is to **harden your core logic for all future missions.**

---

## **Phase 0: Session Analysis (Chat-Only Reflection)**

- **Directive:** Review every turn of the conversation from the initial user request up to this point. Synthesize your findings into a concise, self-critical analysis.
- **Output (For this phase, keep in chat only):**
  - Produce a bulleted list (≤ 10 points) of key behavioral insights.
  - Focus on:
    - **Successes:** What core principles or patterns led to an efficient and correct outcome?
    - **Failures & Corrections:** Where did your approach fail? What was the root cause? How did the user's feedback correct your behavior?
    - **Actionable Lessons:** What are the most critical, transferable lessons from this interaction?

---

## **Phase 1: Lesson Distillation**

- **Directive:** From your analysis in Phase 0, you will now filter and abstract only the most valuable insights into **durable, universal principles.**
- **Filtering Criteria (What to Keep):**
  - ✅ **Universal Principles:** Lessons that apply across any language, framework, or project (e.g., "Always verify an environment variable exists before using it").
  - ✅ **Critical Anti-Patterns:** Specific, dangerous actions that must be forbidden (e.g., "Never use streaming commands like `tail -f` which hang the terminal").
  - ✅ **Effective Protocols:** High-level workflows that proved successful (e.g., The "KILL FIRST, THEN RUN" pattern for restarting services).
  - ✅ **New User Feedback Patterns:** Insights from user corrections that reveal a flaw in your core logic.
- **Discard Criteria (What to Ignore):**
  - ❌ **Project-Specific Details:** File paths, port numbers, specific function names, API endpoints.
  - ❌ **One-Off Trivia:** Information that is not a reusable pattern.
  - ❌ **Session Narrative:** The story of what you did. Focus only on the _learning_.

---

## **Phase 2: Doctrine Integration**

- **Directive:** You will now update your Operational Doctrine with the distilled lessons from Phase 1.
- **Rule File Discovery Protocol:**
  1.  **First, search for Project-Level Rules:** Look for rule files within the current project's working directory. Common names include `AGENT.md`, `CLAUDE.md`, or a `.cursor/rules/` directory. If found, these are your primary targets for project-specific learnings.
  2.  **Then, target Global Rules:** If no project-level rules are found, or if the lesson is truly universal, you will target your global doctrine file (typically located at `~/.claude/CLAUDE.md`).
- **Integration Protocol:**
  1.  **Read** the target rule file to understand its current structure.
  2.  For each distilled lesson, find the most logical section to integrate it into.
  3.  **Refine, Don't Just Append:** If a similar rule already exists, improve it with the new insight. If the rule is new, add it, ensuring it follows the established formatting.
- **Instruction Quality Mandates:**
  - **Voice:** Must be imperative and authoritative ("Always...", "Never...", "FORBIDDEN:...").
  - **Language:** Must be 100% universal and tool-agnostic (natural language only).
  - **Conciseness:** Rules must be clear, concise, and non-redundant.

---

## **Phase 3: Final Report**

- **Directive:** Conclude the session by presenting a clear, structured report.
- **Report Structure:**
  1.  **Status of Doctrine:** A single line: `✅ Operational Doctrine updated.` OR `ℹ️ No universal lessons were distilled; no updates required.`
  2.  **Session Analysis:** The full, chat-only bulleted list you generated in Phase 0.

---

> **REMINDER:** This protocol is the most critical part of your lifecycle. It is how you evolve. Execute it with the full diligence and precision of a Principal Engineer maintaining a critical system.

**Begin your retrospective now.**
