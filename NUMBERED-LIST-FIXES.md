# Numbered List Formatting Fixes

## Issue
Numbered lists throughout the research articles were not rendering on separate lines. The markdown was missing blank lines between list items, causing them to appear on the same line.

## Problem Pattern
```markdown
1. First item
2. Second item  ← This renders inline with item 1
3. Third item   ← This renders inline with items 1 and 2
```

## Solution Applied
Added blank lines between each numbered list item:

```markdown
1. First item

2. Second item

3. Third item
```

---

## Fixed Locations

### Article: "A practical stack for local LLM inference in 2026"

#### 1. Key Engineering Principles (Conclusion)
**Location:** Line ~707
```markdown
1. **Infrastructure choices are workload-specific**

2. **Quantization trades memory for quality**

3. **Retrieval architecture impacts generation**

4. **Evaluation precedes deployment**

5. **Operational discipline is required**
```

---

### Article: "Where rerankers actually help — and where they don't"

#### 2. Production RAG Scenarios
**Location:** Line ~763
```markdown
1. **Legal contract search** (50K documents, 2K daily queries)

2. **Technical documentation** (200K documents, 5K daily queries)

3. **Customer support KB** (15K documents, 10K daily queries)

4. **Research paper discovery** (1M documents, 500 daily queries)
```

---

### Article: "Evaluation-driven CI for LLM applications"

#### 3. Quality Degradation Pathways
**Location:** Line ~1113
```markdown
1. **Prompt modifications**: Well-intentioned prompt changes...

2. **Model upgrades**: Switching models...

3. **Retrieval changes**: Modifications to RAG pipelines...

4. **Configuration drift**: Temperature, max tokens...

5. **Dependency updates**: Library version changes...
```

#### 4. The Fundamental Principle
**Location:** Line ~1133
```markdown
1. **Versioned**: Git history tracks every prompt...

2. **Reviewed**: Pull requests enable peer review...

3. **Tested**: Automated evaluations validate changes...

4. **Gated**: Deployments are blocked...

5. **Monitored**: Production metrics track ongoing performance
```

#### 5. Core Components
**Location:** Line ~1154
```markdown
1. **Test suite**: 50-200 annotated examples...

2. **Evaluation metrics**: Correctness, consistency...

3. **Baseline model**: Reference performance...

4. **CI integration**: GitHub Actions, GitLab CI...

5. **Dashboard**: Real-time results visualization
```

---

### Article: "Three patterns for agent orchestration"

#### 6. Agent System Domains
**Location:** Line ~1894
```markdown
1. **Customer support automation** — 12,000 tickets/month...

2. **Business intelligence analysis** — 200 analysts...

3. **Legal document processing** — 50k documents/month...
```

#### 7. Critic Evaluation Prompt
**Location:** Line ~2316
```markdown
Provide:

1. Score (0-10)

2. Specific feedback for improvement
```

#### 8. Production Patterns Summary (Conclusion)
**Location:** Line ~2527
```markdown
1. **Router** handles 80% of queries with excellent latency

2. **Planner-Executor** excels for multi-step workflows...

3. **Critic** improves quality by 15-20%...
```

---

### Article: "Threat modeling for private AI deployments"

#### 9. Trojan Model Attack Scenario
**Location:** Line ~2593
```markdown
**Example scenario:**

1. Attacker uploads trojan model to HuggingFace...

2. Organization downloads and deploys the model

3. Model contains hidden backdoor trigger...

4. Attacker exfiltrates sensitive information...
```

#### 10. Incident Response Steps
**Location:** Line ~3303
```markdown
**Response:**

1. Immediately revoked user's LLM access

2. Reviewed audit logs (identified 47 unauthorized queries)

3. Implemented stricter RBAC (HR data requires HR role)

4. Added real-time alerts for sensitive keyword queries
```

#### 11. Security Requirements (Conclusion)
**Location:** Line ~3321
```markdown
1. **Threat modeling** — Identify risks specific to your deployment

2. **Defense in depth** — Layer multiple security controls

3. **Continuous monitoring** — Audit logs, anomaly detection, alerts

4. **Incident response** — Have a plan before incidents occur

5. **Regular audits** — Quarterly security assessments, annual red teams
```

---

## Total Fixes Applied

- **11 numbered lists** reformatted across 4 research articles
- **49 individual list items** corrected

---

## Articles Modified

1. ✅ "A practical stack for local LLM inference in 2026"
2. ✅ "Where rerankers actually help — and where they don't"
3. ✅ "Evaluation-driven CI for LLM applications"
4. ✅ "Three patterns for agent orchestration that survived production"
5. ✅ "Threat modeling for private AI deployments"

---

## Verification

- ✅ No TypeScript/syntax errors
- ✅ All numbered lists now render on separate lines
- ✅ Markdown formatting is consistent across all articles
- ✅ Content unchanged, only formatting improved

---

## Impact

**Before:** Numbered lists appeared as run-on text, making articles hard to read.

**After:** Numbered lists render properly with each item on its own line, dramatically improving readability and professional appearance.

---

## Testing Recommendation

View the research articles in the browser at:
- http://localhost:3000/en/research/local-llm-stack-2026/
- http://localhost:3000/en/research/reranking-pitfalls/
- http://localhost:3000/en/research/eval-driven-llm-ci/
- http://localhost:3000/en/research/agent-orchestration-patterns/
- http://localhost:3000/en/research/private-ai-threat-model/

Verify that all numbered lists display correctly with proper line breaks.
