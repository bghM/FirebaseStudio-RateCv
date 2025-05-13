# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.




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
