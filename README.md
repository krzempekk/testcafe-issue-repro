To reproduce issue:
1. Clone this repo
2. Run `yarn` to install dependencies
3. Run `yarn start:shell` and `yarn start:mfe`. Simple test pages will be served on `localhost:4000` and `localhost:4001` respectively.
4. Run `yarn test:no-native`. Test should pass.
5. Run `yarn test`. Test should not pass - this is the issue.