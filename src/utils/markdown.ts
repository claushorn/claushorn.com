export interface EssayMetadata {
  title: string;
  date: string;
  categories: string[];
  tags: string[];
  layout?: string;
  image?: string;
}

export interface Essay {
  metadata: EssayMetadata;
  content: string;
  slug: string;
}

export function parseMarkdownFile(filename: string, content: string): Essay {
  // Extract frontmatter and content
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error(`Invalid markdown file format: ${filename}`);
  }
  
  const frontmatter = match[1];
  const markdownContent = match[2];
  
  // Parse frontmatter
  const metadata: EssayMetadata = {
    title: "",
    date: "",
    categories: [],
    tags: [],
    layout: "post",
    image: ""
  };
  
  const lines = frontmatter.split('\n');
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      
      switch (key.trim()) {
        case 'title':
          metadata.title = value.replace(/"/g, '');
          break;
        case 'date':
          metadata.date = value;
          break;
        case 'categories':
          // Parse array format: [AI, Interpretability, Science]
          const categoriesMatch = value.match(/\[(.*)\]/);
          if (categoriesMatch) {
            metadata.categories = categoriesMatch[1].split(',').map(cat => cat.trim());
          }
          break;
        case 'tags':
          // Parse array format: [AI, Interpretability, Mechanistic Analysis, AI for Science]
          const tagsMatch = value.match(/\[(.*)\]/);
          if (tagsMatch) {
            metadata.tags = tagsMatch[1].split(',').map(tag => tag.trim());
          }
          break;
        case 'layout':
          metadata.layout = value;
          break;
        case 'image':
          metadata.image = value.replace(/"/g, '');
          break;
      }
    }
  }
  
  // Generate slug from filename
  const slug = filename.replace(/\.markdown$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  
  return {
    metadata,
    content: markdownContent.trim(),
    slug
  };
}

export function convertMarkdownToHtml(markdown: string): string {
  // Simple markdown to HTML conversion
  // This is a basic implementation - you might want to use a library like marked or remark
  let html = markdown;
  
  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-charcoal mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-charcoal mb-6">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-charcoal mb-8">$1</h1>');
  
  // Convert paragraphs (but not if they're already in HTML tags)
  html = html.replace(/^(?!<[h|u|o|p|li])(.*$)/gim, '<p class="text-charcoal/80 leading-relaxed mb-4">$1</p>');
  
  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Convert italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Convert code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-light-gray p-4 rounded-lg overflow-x-auto mb-4"><code>$1</code></pre>');
  
  // Convert inline code
  html = html.replace(/`(.*?)`/g, '<code class="bg-light-gray px-1 py-0.5 rounded text-sm">$1</code>');
  
  // Convert links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent-blue hover:text-dark-red underline" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Convert reference citations like [1], [2], etc. to anchor links
  html = html.replace(/\[(\d+)\]/g, '<a href="#ref-$1" class="text-accent-blue hover:text-dark-red underline">[$1]</a>');
  
  // Convert lists
  html = html.replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2">$1</li>');
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc ml-6 mb-4">$1</ul>');
  
  // Clean up empty paragraphs
  html = html.replace(/<p class="text-charcoal\/80 leading-relaxed mb-4"><\/p>/g, '');
  
  return html;
} 