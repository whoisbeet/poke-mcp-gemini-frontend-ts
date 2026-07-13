import { FastMCP } from '@modelcontextprotocol/sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const mcp = new FastMCP('Poke Gemini Frontend Tools');

// Tool 1: Review UI/UX
mcp.tool({
  name: 'review_ui_design',
  description: 'วิจารณ์ UX/UI จากคำอธิบายหรือภาพ',
  parameters: {
    type: 'object',
    properties: {
      description: { type: 'string' },
      imageBase64: { type: 'string', nullable: true }
    }
  },
  execute: async ({ description, imageBase64 }) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    // (โค้ดเต็มจะตามมาในข้อความถัดไปเพราะยาว)
    return "Tool ทำงาน (กำลังพัฒนาเต็มรูปแบบ)";
  }
});

// Tool 2 & 3 จะตามมา

console.log('MCP Server started with Gemini tools');

export default mcp;
