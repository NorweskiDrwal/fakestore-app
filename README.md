## Introduction

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).<br>
It is using [fakestoreapi](https://fakestoreapi.com) for data.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

```bash
npm run test
```

## Project description

I gave myself 4 hours to code the app - 3 hours for coding, 1 hour for testing and writing down whats and whys. The request in the requirements was to show-off skills instead of using external libraries, which is a nice premise but had to be adjusted for available time.

The focus of this solution <b>IS NOT</b> styling, theming, UX or the looks of the application. The only thing that was implemented is RWD.<br>
In order to speed up the development process I used [shadcn](https://ui.shadcn.com/docs) with tailwindcss.

For state management I went with classic ContextAPI. My go-to solution for global state is [Zustand](https://zustand-demo.pmnd.rs/) and it would be the first thing I would change in the next iteration.

Another thing to change in the next iteration is component design. The proposed component setup is fairly easy to test, however I like to make the components smaller, especially in nextjs, because it allows for more control with using `use client` directives. Properly structuring the UI enables decend gains in performance when most of the application is server rendered.

I would also use either [SWR](https://swr.vercel.app/) or [react-query](https://tanstack.com/query/v5/docs/) to further improve performance via introducing caching on client side.

[Storybook](https://storybook.js.org/) is another tool that I like to use when building UIs. I like to bake in component tests into Storybook via [Playwright](https://storybook.js.org/docs/writing-stories/play-function), so for the next iteration I would focus on adding more tests and ensuring the application renders information properly.