import os, http.server, socketserver
os.chdir("/Users/mac/Downloads/Photos copy/qahwah-drip-site/site/public")
PORT = 8137
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    httpd.serve_forever()
