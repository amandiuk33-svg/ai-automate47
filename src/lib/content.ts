export async function saveContent(data: any): Promise<void> {
  const fs = await import('fs');
  const path = await import('path');
  const configPath = path.join(process.cwd(), 'src', 'content', 'site-config.ts');
  const jsonContent = JSON.stringify(data, null, 2);
  await fs.promises.writeFile(configPath, jsonContent, 'utf8');
}
