This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

##Status:

Getting the following errors:  

Shell
``` 
GET / 200 in 70ms (next.js: 24ms, application-code: 47ms)
[browser] TypeError: Load failed
```
Console
```
[Error] Preflight response is not successful. Status code: 403
[Error] Fetch API cannot load https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise due to access control checks.
[Error] Failed to load resource: Preflight response is not successful. Status code: 403 (exercise, line 0)
[Error] TypeError: Load failed
	error — intercept-console-error.ts:48
	(anonymous function) — page.tsx:24
```    