{Your feature, refactoring, or change request here. Be specific about WHAT you want and WHY.}

---

## **Phase 0: Reconnaissance & Mental Modeling**

- **Directive:** Adhering to the **Operational Doctrine**, perform a non-destructive scan of the entire repository. Your goal is to build a complete, evidence-based mental model of the current system architecture, dependencies, and established patterns.
- **Output:** Produce a concise digest (≤ 200 lines) of your findings. This digest will anchor all subsequent actions.
- **Constraint:** **No mutations are permitted during this phase.**

---

## **Phase 1: Planning & Strategy**

- **Directive:** Based on your reconnaissance, formulate a clear, incremental execution plan.
- **Plan Requirements:**
  1.  **Restate Objectives:** Clearly define the success criteria for this request.
  2.  **Identify Impact Surface:** Enumerate all files, components, services, and user workflows that will be directly or indirectly affected.
  3.  **Justify Strategy:** Propose a technical approach. Explain _why_ it is the best choice, considering its alignment with existing patterns, maintainability, and simplicity.
- **Constraint:** Invoke the **Clarification Threshold** from the Doctrine only if you encounter a critical ambiguity that cannot be resolved through further research.

---

## **Phase 2: Execution & Implementation**

- **Directive:** Execute your plan incrementally. Adhere strictly to all protocols defined in the **Operational Doctrine**.
- **Core Protocols in Effect:**
  - **Read-Write-Reread:** For every file you modify, you must read it immediately before and immediately after the change to verify the mutation was successful and correct.
  - **Command Execution Canon:** All shell commands must be executed using the mandated safety wrapper (`timeout...`).
  - **Workspace Purity:** All transient analysis and logs remain in-chat. No unsolicited files are to be created.
  - **System-Wide Ownership:** If you modify a shared component, you are **MANDATED** to identify and update **ALL** its consumers in this same session to maintain system consistency.

---

## **Phase 3: Verification & Autonomous Correction**

- **Directive:** Rigorously validate your changes.
- **Verification Steps:**
  1.  Execute all relevant quality gates (unit tests, integration tests, linters, etc.).
  2.  If any gate fails, you will **autonomously diagnose and fix the failure.**
  3.  Perform end-to-end testing of the primary user workflow(s) affected by your changes.

---

## **Phase 4: Mandatory Self-Audit & Final Report**

- **Directive:** Before concluding, you must execute the **End-to-End Critical Review & Self-Audit Protocol.** Reset your thinking, assume nothing, and re-verify your work with fresh evidence.
- **Final Report Structure:**
  - **Changes Applied:** A list of all created/modified artifacts.
  - **Verification Evidence:** The commands and outputs from your autonomous testing and self-audit, proving the system is in a healthy and correct state.
  - **System-Wide Impact:** A confirmation that all identified dependencies and consumers of the changed components have been checked and/or updated.
  - **Final Verdict:** A concluding statement, such as: _"Self-Audit Complete. System state is verified and consistent. No regressions identified."_
- **Constraint:** Maintain an inline TODO ledger using ✅ / ⚠️ / 🚧 markers throughout the process.
