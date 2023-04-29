This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Environment variables

An .env file must be created in the root directory with the backend url:

/.env
```yaml
NEXT_PUBLIC_BACKEND_URL=<backend_link>
```
The name of the variable must start with 'NEXT_PUBLIC_'. If the variable is not defined, 'http://localhost:5000/' will be used instead.

## Install dependencies

```bash
npm install
```

## Run App
Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.