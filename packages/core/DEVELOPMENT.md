# Development

## Development environment

> Helsinki Design System uses [**Lerna**](https://lerna.js.org/) for running scripts across the repo as well as versioning and creating releases of the packages. [**Yarn workspaces**](https://yarnpkg.com/lang/en/docs/workspaces/) is used to manage dependencies. This allows the separate packages to reference each other via symlinks during local development.

```
# Clone the repo
git clone https://github.com/City-of-Helsinki/helsinki-design-system.git
cd helsinki-design-system

# Install dependencies
yarn

# Start Core-development (launch Storybook)
yarn start:core
```

This starts storybook. You can read about how to write storybook stories [here](https://storybook.js.org/docs/basics/writing-stories/). The use of Storybook is recommended for component development.

### Design Tokens

This project uses [hds-design-tokens](../design-tokens/README.md) as a dependency. It provides variables for colors, spacing, typography etc. that are used by the core package. Those variables should be used whenever possible. If you need to update or add new tokens, see [here](../design-tokens/README.md#adding-and-updating-tokens).

Remember to always build the tokens after updating or adding new ones, otherwise they won't be available.

## Workflow

This project uses the [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Happy branching!

## Built with

- [PostCSS](https://github.com/postcss/postcss)
- [Storybook](https://storybook.js.org/)
- hds-core follows the [BEM methodology](http://getbem.com/)

## Git

Pull requests can be submitted from fork. [Read more from here.](https://guides.github.com/activities/forking/)

### Developing a feature:

```bash
git checkout -b <branchname>
git add <file1> <file2> ...
git commit -m "My commit message"
```

### Pushing your feature to Github:

```bash
git checkout develop
git pull
git checkout <branchname>
git rebase -i develop
```

- Resolve conflicts and continue:

```bash
git add <file1> <file2> ...
git rebase --continue
```

- After no conflicts:

```bash
git push --force-with-lease
```

(If your remote does not accept your local new branch: `git push -u origin HEAD`)

- Make a Pull Request at Github website.
