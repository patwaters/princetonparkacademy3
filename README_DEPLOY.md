# Deploying Princeton Park Academy site

## Vercel (recommended)
1. Create a new GitHub repo and upload all files in this folder.
2. Go to https://vercel.com/new → Import Git Repository → select your repo.
3. **Settings on first deploy:**
   - Framework preset: **Vite**
   - Build command: **npm run build**
   - Output directory: **dist**
4. Click **Deploy**. Vercel will give you a live URL like `https://princetonparkacademy.vercel.app`.

### If deploy fails
- Open the deploy logs in Vercel. Typical fixes:
  - Ensure `package.json` has scripts:
    ```json
    { "scripts": { "build": "vite build", "dev": "vite", "preview": "vite preview" } }
    ```
  - Output directory must be `dist`.
- If the page is blank, confirm that the `index.html` is at the repo root and the build produced `dist/`.

## Netlify (drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the **unzipped** folder here. Netlify will build and publish it.
3. If prompted:
   - Build command: **npm run build**
   - Publish directory: **dist**

## Custom domain
When your preview URL works, add your domain:
- Vercel/Netlify → **Domains** → add `princetonparkacademy.com` and `www.princetonparkacademy.com`.
- Update DNS at your registrar with the records they provide.
- SSL is automatic.
