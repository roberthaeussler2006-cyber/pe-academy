import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.CLAUDE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    const { moduleTitle, moduleId, topics } = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2048,
        system: "You generate multiple-choice quiz questions for PE Academy, a private equity learning platform. Generate questions that test real understanding, not just definitions. Include numerical problems where appropriate. Always respond with valid JSON only, no other text.",
        messages: [
          {
            role: "user",
            content: `Generate 5 multiple-choice quiz questions for Module ${moduleId}: "${moduleTitle}".

Topics covered: ${topics}

Return ONLY a JSON array with this exact structure:
[
  {
    "question": "...",
    "options": ["A answer", "B answer", "C answer", "D answer"],
    "correctIndex": 0,
    "explanation": "..."
  }
]

Make questions specific, challenging, and test real PE knowledge. Include at least one numerical question. Each question must have exactly 4 options.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: `Claude API error: ${response.status}` }, { status: response.status });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || "[]";

    // Parse the JSON from the response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "Failed to parse questions" }, { status: 500 });
    }

    const questions = JSON.parse(jsonMatch[0]);
    return NextResponse.json({ questions });
  } catch {
    return NextResponse.json({ error: "Failed to generate questions" }, { status: 500 });
  }
}
