# 🤖 AI Development Rules & Guidelines

> **CRITICAL INSTRUCTION FOR AI AGENTS:**
> Before modifying any page in this project, YOU MUST READ AND FOLLOW these rules.

## 1. 👁️ LLM Visibility (Mandatory)
**Rule:** All service and content pages MUST be fully visible to LLMs (ChatGPT, Claude, etc.) and search crawlers via the initial HTML response.

**The Problem:**
This project uses Client Components (`'use client'`) for interactive UI. LLMs often cannot execute JS to see this content.

**The Solution Pattern:**
Every page must implement the **Server-Side Hidden Content** pattern.

### Implementation Requirement:
For every `page.tsx` (Server Component):
1. Keep the interactive Client Component (`<ServiceClient />`).
2. Add a hidden `div` containing **all** semantic text content found in the client component.
3. Use the specific inline styles below to hide it visually but keep it accessible to crawlers.

**Code Snippet to Use:**
```tsx
export default function ServicePage() {
  return (
    <>
      {/* 1. Interactive UI for Humans */}
      <ServiceClient />

      {/* 2. Hidden Content for LLMs/Crawlers */}
      <div style={{ 
        position: 'absolute', 
        left: '-10000px', 
        width: '1px', 
        height: '1px', 
        overflow: 'hidden' 
      }} 
      aria-hidden="true">
        
        {/* MUST use semantic HTML: h1, h2, p, ul, li */}
        <h1>Service Title</h1>
        <p>Full description...</p>
        <h2>Pricing</h2>
        <p>Exact price: $XXX</p>
        <h2>Benefits</h2>
        <ul>
          <li>Benefit 1...</li>
        </ul>
        {/* Include FAQs, Testimonials, Methodologies */}
      </div>
    </>
  );
}
```

## 2. 🎨 Design & Aesthetics
- Use **Tailwind CSS** for styling.
- Maintain the "Premium Dark Mode" aesthetic (Black backgrounds, Gray text, White headings).
- Use `framer-motion` for animations if requested.

## 3. 🏗️ Project Structure
- **Pages**: `app/servicios/[category]/[service]/page.tsx`
- **Client Components**: `[ServiceName]Client.tsx` in the same folder.
- **Images**: `public/images/[category]/...`

---
*Reference: See `docs/LLM_VISIBILITY_GUIDE.md` for full technical details.*
