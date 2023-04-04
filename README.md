## Latihan Git & Nextjs Dasar

TODO 1:
- membuat section pada homepage
- pada section terdapat link navigasi yang mengarah ke suatu halaman

TODO 2:
- membuat halaman baru pada folder /pages

### Langkah

1. fork repo ini pada akun github masing-masing 

2. clone repository dan install dependency

```bash
git clone https://github.com/{username}/ngodingo-git-1.git
cd ngodingo-git-1
npm install
```

3. buat branch baru dengan nama kalian

```bash
git checkout -b [nama]
```

4. buka VS Code kemudian lakukan TODO 1 dan 2, jangan lupa melakukan commit pada setiap TODO

5. jika sudah selesai, lakukan push ke github

```bash
git push origin [branch-name]
```

6. open pull request ke repo asli




---


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
