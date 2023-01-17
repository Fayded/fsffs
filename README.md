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



## ///////////////
# Fake Site

Thank you for taking the time to take part in this coding assessment. Instructions are listed below, and if you have any questions, please email dan@firststreet.org directly. Please remember to be mindful of attention to detail with your build and the mockup provided.


1. Build a fake website using `mockup.png` as your guide. The style guide is located in `StyleGuide.png`.
2. Use NextJS and ensure components are created where relevant
3. No mobile mockup is provided, how do you think this mobile site should look and function like?
4. Imagine the different pages where mockups arent provided but are branched from the homepage mockup (such as a user account page, login, logout). How does these pages work across the app? How do you manage the state across your application? Use whichever state management methodologies you are familiar with
5. Please integrate Jest as a unit testing framework across the components that you built.
6. Upload code to GitHub. Please hook up a CI/CD workflow that: A) Lints project, 2) Tests project, 3) Deploys somewhere
7. When you are done, please email the repository/app link to dan@firststreet.org

Every other assets are located in the `assets` folder and fonts are located in `fonts`.

## Video Section

For the video section of the site, use this API source as your video. You do not have to build a video player, but you can open the link to Vimeo itself.

For every item in this json file, render the video section. Use the thumbnail that is provided in the API response if you can.

Vimeo Videos api (or use videos.json in the zip):

```
https://vimeo.com/api/v2/channel/staffpicks/videos.json
```

### Videos API Requirements

(Please be ensure to build out your API as an API route)[https://nextjs.org/docs/api-routes/introduction]. This API route must be a GraphQL backend that supports the mockup. An example schema is provided below, feel free to modify as needed.

```graphql

schema {
	query: Root
}

type Root {
	videos: [Video]
}

type Video {
	id: integer
	title: string
	description: string
	thumbnail: string
}

```
