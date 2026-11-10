open next.config.js  
content = open('next.config.js').read()  
content = content.replace('webpack: (config) =, 'turbopack: {},\\n  webpack: (config) = 
open('next.config.js', 'w').write(content)  
print('Done')  
