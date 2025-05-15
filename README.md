# Firebase Studio
**Product Requirements Document (PRD): Seirah AI Features**

---

**Product Name:** Seirah – AI-Powered CV Builder
**Feature Set:** AI-Powered Capabilities
**Owner:** Product Team
**Release Scope:** Progressive rollout
**Last Updated:** May 2025

---

### **Overview**

Seirah is an AI-powered resume builder designed for Arabic and English-speaking users, with a strong focus on localization for the Saudi market. The platform leverages AI features to simplify CV creation, translation, critique, and enhancement processes.

This PRD outlines all currently implemented AI capabilities within Seirah, as well as supporting UI logic, input/output structure, and customization options.

---

### **AI Features Overview**

#### **1. Import Your Resume (PDF Parsing & OCR)**

* **Purpose:** Upload existing resumes (PDF, DOCX, or image) to extract structured CV data.
* **Input:** PDF, Word, or image file
* **Output:** Seirah CV JSON structure filled
* **Technology:** OpenAI GPT-4o + OCR + pdf2json + Mammoth.js
* **UI:** Upload > Extract Preview > Finalize into CV > Select Template
* **Status:** Live
* **Metrics:**

  * Upload-to-conversion rate
  * Accuracy rating
  * Most extracted sections

#### **2. Rate My Resume (CV Rating Engine)**

* **Purpose:** Evaluate a user’s CV and provide a score with actionable feedback.
* **Input:** PDF, DOCX, or Seirah CV
* **Output:** Score + color-coded breakdown + improvement suggestions
* **Tech:** OpenAI + custom scoring logic (MCP will be used initially in this feature)
* **UI:** Upload area + score breakdown display
* **Status:** Live
* **Metrics:**

  * Usage rate
  * Conversion to premium
  * Common weak pillars


#### **3. Instant Improve**

* **Purpose:** One-click AI improvements for CV sections.
* **Input:** Section content
* **Output:** Reworded text
* **Tech:** OpenAI
* **Status:** Live (Premium)
* **Metrics:**

  * Button CTR
  * Accepted suggestions

#### **4. Translate My Resume**

* **Purpose:** Translate between Arabic and English.
* **Input:** Structured CV data
* **Output:** Translated fields (preserving format)
* **Tech:** OpenAI GPT-4
* **UI:** Language toggle, inline translate
* **Status:** Live (Paid)
* **Metrics:**

  * Usage by direction
  * Post-edit rate

#### **5. Generate Resume Description**

* **Purpose:** Generate a professional summary from full CV or selected fields.
* **Input:** Seirah CV JSON or manual input
* **Output:** Short/medium paragraph(s)
* **UI:** Textarea + generate button + preview
* **Status:** Live
* **Metrics:**

  * Generate click rate
  * Edit rate
  * Satisfaction

#### **6. Job Description Comparison**

* **Purpose:** Match user resume to job description
* **Input:** Resume + job posting
* **Output:** Match score, feedback, missing keywords
* **Tech:** GPT-4o + similarity model
* **Status:** In Progress
* **Metrics:**

  * Usage rate
  * Tailor resume CTR

#### **7. LinkedIn to CV Conversion**

* **Purpose:** Generate CV from LinkedIn PDF or text
* **Input:** PDF export or profile text
* **Output:** Mapped CV JSON
* **UI:** Upload → Review → Select Template
* **Tech:** OpenAI + PDF reader
* **Status:** Planned
* **Metrics:**

  * Upload success
  * Completion rate

#### **8. Add Old Resume (Auto-Converter)**

* **Purpose:** Convert old resume into Seirah format
* **Input:** PDF, DOCX, JPG, PNG
* **Output:** Prefilled CV form
* **Tech:** OCR (Tesseract), PDF.js, Mammoth.js
* **Status:** Live

#### **9. CV Template**

#### **10. CV Example**
* **🎨 Customization Engine [Now Live in Template Preview]**

* **Details:**
  * Live UI Controls:
	* Font size (numerical)
	* Font family (sans, serif, mono)
	* Theme color (color picker)
	* Language toggle (Arabic / English) - Not Done Yet
	* Multi-page PDF-ready layout supported in preview
	* Dynamic rendering for structured Seirah CV JSON


#### **11. Resume Example**
  * Shows Resume Examples By Job
    * pdf and png examples in /public/cvs
    * Can be used to test AI features 
---

### **Shared AI Infrastructure**

* **Unified Prompt System:** Shared across features for consistency
* **MCP (Model Context Protocol)** 

  * Current Use: rate-cv only (via useRateCvMCP.ts)
  * Structure:
    ```json {
    version: "1.0",
    platform: "Seirah",
    feature: "rate-cv",
    goal: "Analyze the resume to generate a score for compatibility with Saudi market standards and offer AI-powered suggestions for improvement.",
    inputs: {
        text: "...",
        language: "ar"
    },
    event: "analyze_resume_request"
    } ```
  * Purpose: Provides a unified and structured way to describe intent across AI interactions.
  * Improvements in Progress:
    * Flattened vs. nested input structures
    * Session-based personalization
    * Event-specific goal adjustments

  * Includes userLanguage, platform, feature, inputFields, sessionMetadata
  * Enhances personalization and abuse prevention
* **Customization Layer:**

  * Font, color, spacing, RTL/LTR support
  * User selects preferences before AI output
* **Security:**

  * Input sanitization
  * Prompt injection protection
  * Abusive pattern logging


* **Updates:**
  * useRateCvMCP.ts (MCP hook implementation)
  * /app/api/ai/route.ts (Unified AI stream handler using OpenAI)
  * StreamingTextResponse via ai SDK

  * MCP hooks include minimum input length enforcement (e.g., >100 chars)
  * Added runtime hook filtering to block use outside authorized contexts
  * Planned: rate-limiting on AI API routes (per IP/session)

---

### **Admin Dashboard KPIs**

* Feature usage rate
* Conversion to premium
* Translation/edit acceptance rate
* Cost per feature (OpenAI usage)
* User satisfaction per interaction

---

### **User Journey**

1. Upload resume or start from scratch
2. Use AI to:

   * Extract and fill content
   * Generate summary
   * Rate and improve content
   * Translate CV
   * Match with job description
3. Finalize and download CV

---

### **Technical Stack**

* **Front-end:** Next.js, TailwindCSS
* **Back-end:** Laravel + MySQL
* **AI:** OpenAI (GPT-4o), function calling (planned)
* **Extraction:** pdf2json, Mammoth.js, Tesseract.js
* **Storage:** Local / Supabase
* **Bilingual Structure:** Dual-field support (AR/EN)

---

### **Metrics to Track**

* Time to complete CV
* Upload to edit rate
* Feature-specific retention (7/30 days)
* Section-level edit acceptance
* Satisfaction indicators (e.g., thumbs up, emoji)

**📈 New Metrics to Track (Post-MCP)**
**Metric**               |     **Description**
MCP event frequency      |   How often each feature is triggered via MCP
MCP input quality score  |   Based on token length, structure, or flags
AI response accept/reject|   For rating + suggestions
Customization changes    |   Font/color selection heatmap

---

### **Future Improvements**

* AI-generated bullet point builder
* Smart section reorder by job type
* Recruiter tone optimization (formal/informal)
* Voice-to-resume for mobile users

---

### **Appendix: Example MCP Payload**

```json
{
  "language": "ar",
  "platform": "web",
  "feature": "translate_resume",
  "goal": "Convert Arabic resume into English while preserving layout",
  "event": "user_clicked_translate",
  "inputFields": {
    "summary": "مبرمج محترف...",
    "experience": [ ... ]
  },
  "sessionMetadata": {
    "ip": "192.168.1.1",
    "timestamp": "2025-05-14T10:00:00Z"
  }
}
```

---

### **🧪 Testing & Mocking**
* New mock data used for testing MCP:
    * charles-cv resume as placeholder for development
    * Use in CV preview, resume rating, and AI suggestion tests

---



------
------
------
------
------
------







step-by-step implementation plan to integrate MCP (Model Context Protocol)
✅ Step 1: Define the Purpose of MCP in Seirah

Seirah uses AI across:
    •   Rephrasing content
    •   Translating CV sections
    •   Generating summaries/descriptions
    •   Feedback analysis
    •   Resume rating

MCP helps give consistent, structured, and brand-aligned context to every model call.


🛠️ Step 2: Create a Central MCPContext Generator
📁 /lib/mcp.ts


⚛️ Step 3: Build a Secure Client-side useMCP Hook
📁 /hooks/use-mcp.ts
✅ Safe by design: Doesn’t expose server secrets
✅ Prevents abuse: You control what inputs and metadata go into the protocol


📤 Step 4: Send MCP with AI API Requests
Wherever you call OpenAI or your backend /api/ai/* routes
📁 /app/api/ai/route.ts 


🧠 Step 5: Use MCP in OpenAI Calls on Server
📁 /app/api/ai/rephrase/route.ts


🔐 Step 6: Secure the Backend
    •   ✅ Validate inputs on server (zod or schema)
    •   ✅ Limit token length (e.g. 1000 tokens max)
    •   ✅ Add rate limiting on endpoints
    •   ✅ Sanitize mcp.inputs for prompts


🔁 Step 7: Reuse Across Features

Update your features like:
Feature          |     feature    |    goal
Rephrase         |   "rephrase"   |  "improve clarity and tone of resume text"
Translate        |  "translate"   |  "convert resume section into Arabic"
Feedback         |  "feedback"    |  "analyze resume content and highlight gaps"
Generate Summary |  "summary"     | "summarize user experience professionally"

Each feature passes its intent and content as part of useMCP.




🚫 Step 8: Prevent Abuse

Attack Vector             |    Fix
Prompt injection          |Sanitize user inputs + use fixed system prompt in OpenAIStream()
Token abuse               |Add rate limits and content length guard
Context spoofing          |Do not allow user to edit MCP fields directly
Excessive input size      |Truncate or reject long input text



🌟 Step 9: Future-Proof Suggestions
    1.  Log MCPs in analytics (e.g., Segment or PostHog) for insight.
    2.  Auto-switch tone for recruiter vs job seeker roles.
    3.  Support platform = 'mobile' for future native apps.
    4.  Integrate userId, sessionId in metadata.
    •   Add zod schema validation?
    •   Set up proper error logging + OpenAI error handling?
    •   Enable support for streaming output?



