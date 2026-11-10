const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '..', 'data', 'ai_automate47.db');

const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    icon TEXT,
    features TEXT,
    display_order INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS case_studies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    client_name TEXT,
    industry TEXT,
    challenge TEXT,
    solution TEXT,
    results TEXT,
    image_url TEXT,
    is_published INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT,
    excerpt TEXT,
    featured_image TEXT,
    author TEXT DEFAULT 'AiAutomate47',
    published_at DATETIME,
    is_published INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT,
    preferred_date TEXT,
    preferred_time TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS chatbot_qa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category TEXT DEFAULT 'general',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Insert default admin user if not exists
const existingAdmin = db.prepare('SELECT id FROM users WHERE email = ?').get('admin@aiautomate47.com');
if (!existingAdmin) {
  db.prepare('INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)').run(
    'admin@aiautomate47.com',
    'admin123',
    'admin'
  );
}

// Insert sample services
const existingServices = db.prepare('SELECT COUNT(*) as count FROM services').get();
if (existingServices.count === 0) {
  const insertService = db.prepare(`
    INSERT INTO services (title, subtitle, description, icon, features, display_order) VALUES (?, ?, ?, ?, ?, ?)
  `);

  insertService.run(
    'AI Consultancy',
    'Expert guidance for your AI journey',
    'Strategic AI consulting tailored for small businesses. We help you identify opportunities, implement solutions, and train your team.',
    '🤖',
    JSON.stringify(['Strategy & roadmap', 'AI readiness assessment', 'Team training', 'Implementation planning']),
    1
  );

  insertService.run(
    'Workflow Automation',
    'Automate repetitive tasks',
    'Streamline your business operations with AI-powered workflow automation. Save time and reduce errors.',
    '⚡',
    JSON.stringify(['Process analysis', 'Custom automation workflows', 'Integration with existing tools', 'Monitoring & optimization']),
    2
  );

  insertService.run(
    'Social Media Management',
    'AI-powered social growth',
    'Automated social media content creation, scheduling, and engagement using advanced AI models.',
    '📱',
    JSON.stringify(['Content generation', 'Post scheduling', 'Engagement automation', 'Analytics & reporting']),
    3
  );

  insertService.run(
    'Asset Generation',
    'Images, text & videos',
    'Generate professional images, compelling copy, and short-form videos using cutting-edge AI tools.',
    '🎨',
    JSON.stringify(['AI image generation', 'Copywriting', 'Short-form video creation', 'Brand asset library']),
    4
  );

  insertService.run(
    'Custom AI Dashboard',
    'Your AI command center',
    'A complete, custom AI-powered dashboard built specifically for your business needs.',
    '📊',
    JSON.stringify(['Real-time analytics', 'Custom widgets', 'AI assistant integration', 'Data visualization']),
    5
  );
}

// Insert sample chatbot Q&A
const existingQA = db.prepare('SELECT COUNT(*) as count FROM chatbot_qa').get();
if (existingQA.count === 0) {
  const insertQA = db.prepare(`
    INSERT INTO chatbot_qa (question, answer, category) VALUES (?, ?, ?)
  `);

  insertQA.run(
    'What services do you offer?',
    'We offer AI consultancy, workflow automation, social media management, asset generation (images, text, videos), and custom AI-powered dashboards for small businesses.',
    'services'
  );

  insertQA.run(
    'How much does it cost?',
    'Our pricing starts at $499/month for small businesses. We offer custom packages based on your specific needs. Visit our pricing page for details.',
    'pricing'
  );

  insertQA.run(
    'Do you work with small businesses?',
    'Yes! AiAutomate47 specializes in helping US small businesses leverage AI to grow and automate their operations.',
    'general'
  );

  insertQA.run(
    'How do I book a consultation?',
    'You can book a free consultation through our pricing page or contact us directly. We typically respond within 24 hours.',
    'booking'
  );
}

// Insert sample blog post
const existingBlog = db.prepare('SELECT COUNT(*) as count FROM blog_posts').get();
if (existingBlog.count === 0) {
  db.prepare(`
    INSERT INTO blog_posts (title, slug, content, excerpt, author, is_published, published_at)
    VALUES (?, ?, ?, ?, ?, 1, datetime('now'))
  `).run(
    'Why Claude is the AI Assistant Your Small Business Needs',
    'why-claude-is-the-ai-assistant-your-small-business-needs',
    '# Why Claude is the AI Assistant Your Small Business Needs\n\nAs a small business owner, you\'re always looking for ways to do more with less. That\'s where Claude comes in.\n\n## What Makes Claude Different?\n\nClaude, developed by Anthropic, is designed with safety and helpfulness at its core. Unlike other AI assistants, Claude excels at:\n\n- **Complex reasoning**: Claude can handle multi-step problems and nuanced business decisions\n- **Long context**: It can process and remember large documents, making it perfect for analyzing contracts, reports, and customer data\n- **Writing assistance**: From emails to marketing copy, Claude produces natural, professional content\n- **Code generation**: Need a simple automation script? Claude can write and explain code\n\n## Real-World Use Cases for Small Businesses\n\n1. **Customer Support**: Draft responses to common customer inquiries\n2. **Content Creation**: Write blog posts, social media updates, and newsletters\n3. **Data Analysis**: Summarize sales data and identify trends\n4. **Meeting Prep**: Prepare agendas and summarize previous meetings\n\n## Getting Started\n\nAt AiAutomate47, we help small businesses integrate Claude into their daily operations. From custom dashboards to automated workflows, we make AI work for you.\n\nReady to transform your business with AI? Book a consultation today.',
    'Discover how Claude, the AI assistant from Anthropic, can help your small business save time, improve productivity, and grow faster.',
    'AiAutomate47 Team'
  );
}

console.log('✅ Database initialized successfully!');
db.close();