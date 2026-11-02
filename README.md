# Big Dipper

The public home of [Little Dipper](https://github.com/bryanhollingshead/littledipper), a personal data store you run on your own server.

This site helps people get their own Little Dipper: what it is, a one-click setup on Railway, and step-by-step guides. Later it will host the API specification.

Big Dipper never sees anyone's data. The site is static: no accounts, no database, no server. Anything a setup page needs (like the address of your new Little Dipper) stays in your browser.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321/bigdipper
npm run build    # static site in dist/
```

Pushes to `main` publish to GitHub Pages (`.github/workflows/deploy.yml`).

## Look and feel

The site uses Organic, the same design system as the Little Dipper app (`src/styles/organic.css`, copied from `littledipper/web/src/styles`), so the two look like one product.
