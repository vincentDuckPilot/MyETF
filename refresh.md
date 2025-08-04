{A concise but complete description of the persistent bug or issue. Include observed behavior, expected behavior, and any relevant error messages.}

---

## **Mission: Root Cause Analysis & Remediation**

Previous attempts to resolve this issue have failed. You are now authorized to initiate a **deep diagnostic protocol.** Your approach must be systematic, evidence-based, and focused on identifying and fixing the **absolute root cause**—not just the surface symptoms.

---

## **Phase 0: Reconnaissance & State Baseline**

- **Directive:** Adhering to the **Operational Doctrine**, perform a non-destructive scan of the repository, runtime environment, configurations, and recent logs. Your objective is to establish a high-fidelity baseline of the system's current state.
- **Output:** Produce a concise digest (≤ 200 lines) of your findings relevant to the issue.
- **Constraint:** **No mutations are permitted during this phase.**

---

## **Phase 1: Isolate the Anomaly**

- **Directive:** Your first goal is to create a **minimal, reproducible test case** that reliably triggers the bug.
- **Actions:**
  1.  **Define Success:** Clearly state what the correct, non-buggy behavior should be.
  2.  **Create Failing Test:** If possible, write a new, specific automated test that fails because of this bug. This test will be our signal for success.
  3.  **Identify Trigger:** Pinpoint the exact conditions, inputs, or sequence of events that causes the failure.
- **Constraint:** Do not attempt any fixes until you can reliably and repeatedly reproduce the failure.

---

## **Phase 2: Root Cause Analysis (RCA)**

- **Directive:** Methodically investigate the failing pathway to find the definitive root cause.
- **Investigation Loop:**
  1.  **Formulate a Hypothesis:** Based on the evidence, state a clear, testable hypothesis about the cause of the bug.
  2.  **Gather Evidence:** Use safe, non-destructive commands and code inspection to gather data that will either prove or disprove your hypothesis.
  3.  **Prove or Disprove:** State your conclusion and present the evidence. If the hypothesis is wrong, formulate a new one and repeat the loop.
- **Anti-Patterns to Avoid:**
  - **FORBIDDEN:** Applying a fix without a confirmed root cause.
  - **FORBIDDEN:** Re-trying a previously failed fix without new evidence.
  - **FORBIDDEN:** Patching a symptom (e.g., adding a `null` check) without understanding _why_ the value is `null`.

---

## **Phase 3: Remediation**

- **Directive:** Design and implement a minimal, precise fix that durably hardens the system against this root cause.
- **Core Protocols in Effect:**
  - **Read-Write-Reread:** For every file you modify, you must read it immediately before and after the change.
  - **Command Execution Canon:** All shell commands must use the mandated safety wrapper.
  - **System-Wide Ownership:** If the root cause is in a shared component, you are **MANDATED** to analyze and, if necessary, fix all other consumers of that component that could be affected by the same flaw.

---

## **Phase 4: Verification & Regression Guard**

- **Directive:** Prove that your fix has resolved the issue without creating new ones.
- **Verification Steps:**
  1.  **Confirm the Fix:** Re-run the failing test case from Phase 1. It must now pass.
  2.  **Run Quality Gates:** Execute the full suite of relevant tests (unit, integration, etc.) and linters to ensure no regressions have been introduced.
  3.  **Autonomous Correction:** If any new failures are introduced, you will autonomously diagnose and fix them.

---

## **Phase 5: Mandatory Self-Audit & Final Report**

- **Directive:** Execute the **End-to-End Critical Review & Self-Audit Protocol.** Reset your thinking and re-verify the fix and its system-wide impact with fresh evidence.
- **Final Report Structure:**
  - **Root Cause:** A definitive statement of the underlying issue, supported by evidence from your RCA.
  - **Remediation:** A list of all changes applied to fix the issue.
  - **Verification Evidence:** Proof that the original bug is fixed (e.g., passing test output) and that no new regressions were introduced.
  - **Final Verdict:** A concluding statement, such as: _"Self-Audit Complete. Root cause has been addressed, and system state is verified. No regressions identified."_
- **Constraint:** Maintain an inline TODO ledger using ✅ / ⚠️ / 🚧 markers throughout the process.
